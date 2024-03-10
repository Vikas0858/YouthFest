import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import verifyToken from "../../middleware/authCheck";
const handler = async (req, res) => {
  const isVerified = await verifyToken(req, res);
  if (!isVerified) return res.status(200).json({ message: "Not authorized" });
  const { email, event_name, val, eid, team } = JSON.parse(req.body);
  if (req.method == "POST") {
    const docRef = doc(db, "registration", email);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(docRef, {
        coins: 0,
        "event-map": {},
        events: [{}],
      });
    }
    const evenDocRef = doc(db, "events", eid);
    const evenDocSnap = await getDoc(evenDocRef);
    if (evenDocSnap.exists()) {
      if (docSnap.exists()) {
        const data_fetched = docSnap.data();
        const coin = data_fetched["coins"];
        if (coin >= val) {
          if (data_fetched["events"]) {
            await setDoc(docRef, {
              coins: coin - val,
              "event-map": {
                ...data_fetched["event-map"],
                [event_name]: false,
              },
              events: [
                ...data_fetched["events"],
                {
                  eventName: event_name,
                  eventID: eid,
                  team: team,
                },
              ],
            });
          } else {
            await setDoc(docRef, {
              coins: coin - val,
              "event-map": {
                ...data_fetched["event-map"],
                [event_name]: false,
              },
              events: [
                {
                  eventName: event_name,
                  eventID: eid,
                  team: team,
                },
              ],
            });
          }

          const eventDetails = evenDocSnap.data();
          let regInfo = {
            ...team,
            name: team.leaderName,
            email: email,
          };
          // if (eventDetails.registrations) {
          await updateDoc(evenDocRef, {
            registrations: [...eventDetails.registrations, regInfo],
          });

          res
            .status(200)
            .json({ status: "success", message: "Registered Successfully" });
        } else {
          res.status(200).json({ message: "Not enough coins" });
        }
      } else {
        res.status(200).json({ message: "User not found" });
      }
    } else {
      res.status(200).json({ message: "Event not found" });
    }
  } else {
    res.status(200).json({ message: "Wrong method" });
  }
};

export default handler;
