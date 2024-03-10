import { doc, setDoc, addDoc, getDoc, collection } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import verifyAdmin from "../../middleware/adminCheck";
const handler = async (req, res) => {
  const admin = await verifyAdmin(req, res);

  if (admin === false) {
    return res.status(200).json({ message: "User is not admin" });
  }
  if (admin === true) {
    const { email, event_details } = JSON.parse(req.body);
    if (req.method == "POST") {
      const docRef = doc(db, "admin", email);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // const eventDocRef = doc(db, "events");
        await addDoc(collection(db, "events"), {
          name: event_details["name"],
          category: event_details["category"],
          about: event_details["about"],
          price: event_details["price"],
          venue: event_details["venue"],
          date: event_details["date"],
          eventImageURL: "",
          registrations: [{}],
          winner: ["", "", ""],
          isClosed: false,
          teamSize: parseInt(event_details["teamSize"]),
          shortDesc: event_details["shortDesc"],
        });
        res
          .status(200)
          .json({ status: "success", message: "Event created successfully" });
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
