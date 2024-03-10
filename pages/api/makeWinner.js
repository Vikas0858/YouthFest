import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";

const handler = async (req, res) => {
  const { email, event_name, winner_position } = req.body;
  if (req.method == "POST") {
    const docRef = doc(db, "admin", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const eventDocRef = doc(db, "events", event_name);
      const eventDocSnap = await getDoc(eventDocRef);
      if (eventDocSnap.exists()) {
        const data = eventDocSnap.data();
        data["winner"][winner_position-1] = email;
        await setDoc(eventDocRef, data);
        res.status(200).json({ message: "Winner added successfully" });
      } else {
        res.status(200).json({ message: "Event not found" });
      }
    }
  } else {
    res.status(200).json({ message: "Method not allowed" });
  }
};

export default handler;