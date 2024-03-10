import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import verifyAdmin from "../../middleware/adminCheck";
const handler = async (req, res) => {
  const admin = await verifyAdmin(req, res);
  if (admin === true) {
    if (req.method == "GET") {
      const events_registered = new Map();
      const registrationRef = collection(db, "registration");
      const querySnapshot = await getDocs(registrationRef);
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        for (const [key, value] of Object.entries(data["event-map"])) {
          if (events_registered.has(key)) {
            events_registered.set(key, [...events_registered.get(key), doc.id]);
          } else {
            events_registered.set(key, [doc.id]);
          }
        }
      });
      var result = Object.fromEntries(events_registered);
      res.status(200).json({ message: result });
    } else {
      res.status(200).json({ message: "Method not allowed" });
    }
  } else {
    res.status(200).json({ message: "User is not admin" });
  }
};

export default handler;
