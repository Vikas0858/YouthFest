import { doc, setDoc, getDoc } from "firebase/firestore";
import { connectStorageEmulator } from "firebase/storage";
import { db } from "../../config/FirebaseConfig";
import verifyToken from "../../middleware/authCheck";
const handler = async (req, res) => {
  const isVerified = await verifyToken(req, res);
  // console.log(isVerified);
  if (!isVerified) return res.status(200).json({ message: "Not authorized" });
  if (req.method == "POST") {
    const { email } = JSON.parse(req.body);
    // console.log(email);
    const userDocRef = doc(db, "registration", email);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      // console.log("hell");
      const data = docSnap.data();
      res.status(200).json({ status: "success", message: data["coins"] });
    } else {
      res.status(200).json({ message: "User does not exist" });
    }
  } else {
    res.status(200).json({ message: "Method not allowed" });
  }
};

export default handler;
