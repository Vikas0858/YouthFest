import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import verifyToken from "../../middleware/authCheck";

const handler = async (req, res) => {
  const isVerified = await verifyToken(req, res);
  // if (!isVerified) return res.status(200).json({ message: "Not authorized" });
  if (req.method == "GET") {
    const eventsRef = collection(db, "events");
    const querySnapshot = await getDocs(eventsRef);
    let allEvents = [];
    querySnapshot.forEach((doc) => {
      allEvents.push({ ...doc.data(), eventID: doc.id });
    });

    if (allEvents.length) {
      res.status(200).json({ events: allEvents });
    } else {
      res.status(404).json({ message: "No Events found" });
    }
  } else {
    res.status(200).json({ message: "Method not allowed" });
  }
};

export default handler;
