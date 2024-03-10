import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import verifyToken from "../../middleware/authCheck";

async function handler(req, res) {
  const isVerified = await verifyToken(req, res);
  if (!isVerified) return res.status(200).json({ message: "Not authorized" });

  const { email, event_name, name } = JSON.parse(req.body);
  if (req.method === "POST") {
    const eventDocRef = doc(db, "events", event_name);

    const eventDocSnap = await getDoc(eventDocRef);

    if (eventDocSnap.exists()) {
      const eventDetails = eventDocSnap.data();
      let regInfo = {
        name: name,
        email: email,
      };

      if (eventDetails.registrations) {
        await updateDoc(eventDocRef, {
          registrations: [...eventDetails.registrations, regInfo],
        });
      } else {
        await updateDoc(eventDocRef, {
          registrations: [...eventDetails.registrations, regInfo],
        });
      }
      const regDocRef = doc(db, "registration", email);
      const regDocSnap = await getDoc(regDocRef);
      let eventInfo = {
        eventName: event_name,
        eventVenue: eventDetails.venue,
        // eventPrice: eventDetails.price,
      };
      // if (regDocSnap.exists()) {
      const regData = regDocSnap.data();
      if (regData.events) {
        await updateDoc(regDocRef, {
          events: [...regData.events, eventInfo],
          name: name,
        });
      } else {
        await updateDoc(regDocRef, {
          events: [eventInfo],
          name: name,
        });
      }

      // } else {
      //   await setDoc(regDocRef, {
      //     events: [eventInfo],
      //     name: name,
      //   });
      // }

      res
        .status(200)
        .json({ message: "Registered Successfully", status: "success" });
    } else {
      res.status(200).json({ message: "Event not found" });
    }
  } else {
    res.status(200).json({ message: "Incorrect HTTP method" });
  }
}

export default handler;
