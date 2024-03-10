import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import verifyToken from "../../middleware/authCheck";

const handler = async (req, res) => {
  const isVerified = await verifyToken(req, res);
  if (!isVerified) return res.status(200).json({ message: "Not authorized" });
  if (req.method == "POST") {
    const { email, credits } = JSON.parse(req.body);
    // console.log(req.body);
    const userDocRef = doc(db, "registration", email);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      data["coins"] = parseInt(data["coins"]) + parseInt(credits);
      await setDoc(userDocRef, data);
      res
        .status(200)
        .json({ status: "success", message: "Credits added successfully" });
    } else {
      res.status(200).json({ message: "User does not exist" });
    }
  } else {
    res.status(200).json({ message: "Method not allowed" });
  }
};

export default handler;
