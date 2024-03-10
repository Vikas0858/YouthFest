import { firebaseAdmin } from "../config/firebaseAdmin";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/FirebaseConfig";
const verifyIdToken = async (idToken) => {
  if (idToken) {
    const user = await firebaseAdmin.auth().verifyIdToken(idToken);
    return user;
  } else {
    return "Invalid token";
  }
};

const userIsAdmin = async (user) => {
  // var userRef = db.collection("admin").doc(user.email);
  var userRef = doc(db, "admin", user.email);
  const docu = await getDoc(userRef);
  if (docu.exists()) {
    return true;
  }
  return false;
};

var verifyAdmin = async (req, res) => {
  try {
    const idToken = req.headers["authorization"];
    if (idToken) {
      const status = await verifyIdToken(idToken);
      if (status === "Invalid token") {
        return false;
      }
      var userRef = await userIsAdmin(status);
      if (userRef === true) {
        return true;
      }
    }
    return false;
  } catch (error) {
    return error;
  }
};

export default verifyAdmin;
