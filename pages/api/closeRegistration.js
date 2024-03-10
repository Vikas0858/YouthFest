import { doc, updateDoc, getDoc, collection } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import verifyAdmin from "../../middleware/adminCheck";

const handler = async (req, res) => {
  const admin = await verifyAdmin(req, res);
  if (admin === false) {
    return res.status(200).json({ message: "User is not admin" });
  }
  if (admin === true) {
    const { email, eventID } = JSON.parse(req.body);
    if (req.method == "POST") {
      const docRef = doc(db, "admin", email);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const eventDocRef = doc(db, "events", eventID);
        await updateDoc(eventDocRef, {
          isClosed: true,
        });
        res
          .status(200)
          .json({ status: "success", message: "Event closed successfully" });
      } else {
        res.status(200).json({ message: "User is not admin" });
      }
    } else {
      res.status(200).json({ message: "Method not allowed" });
    }
  } else {
    res.status(200).json({ message: "User is not admin" });
  }
};

export default handler;
