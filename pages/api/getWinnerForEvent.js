import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import verifyToken from "../../middleware/authCheck";
const handler = async (req, res) => {
  const isVerified = await verifyToken(req, res);
  if (!isVerified) return res.status(200).json({ message: "Not authorized" });
  if (req.method == "GET") {
    const { event_name } = req.query;
    const eventDocRef = doc(db, "events", event_name);
    const docSnap = await getDoc(eventDocRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      res.status(200).json({ message: data["winner"] });
    } else {
      res.status(200).json({ message: "Event does not exist" });
    }
  } else {
    res.status(200).json({ message: "Method not allowed" });
  }
};

export default handler;
