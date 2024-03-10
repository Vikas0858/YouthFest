import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import next from "next";
import { db } from "../../config/FirebaseConfig";
import verifyToken from "../../middleware/authCheck";
const handler = async (req, res) => {
  try {
    const isVerified = await verifyToken(req, res);
    if (isVerified) {
      if (req.method == "GET") {
        const { email } = req.query;
        const docRef = doc(db, "registration", email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const events = docSnap.data();
          const event_list = [];
          for (const [key, value] of Object.entries(events["event-map"])) {
            event_list.push(key);
          }
          const about_list = [];
          for (const ev in event_list) {
            const docRef = doc(db, "events", event_list[ev]);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
              const res = docSnap.data();
              res["date"] = res["date"].toDate();
              about_list.push(res);
            }
          }
          res.status(200).json({ about_list });
        } else {
          res.status(200).json({});
        }
      }
    } else {
      res.status(200).json({ message: "Not authorized" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export default handler;
