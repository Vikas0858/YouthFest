import { firebaseAdmin } from "../config/firebaseAdmin";

const verifyIdToken = async (idToken) => {
  try {
    if (idToken) {
      // console.log(idToken);
      const result = await firebaseAdmin.auth().verifyIdToken(idToken);
      // console.log(result);
      return result;
    } else {
      return "Invalid token";
    }
  } catch (error) {
    console.log(error);
  }
};
const verifyToken = async (req, res) => {
  try {
    const idToken = req.headers["authorization"];
    const result = await verifyIdToken(idToken);
    // console.log(result);
    if (result !== "Invalid token") {
      // console.log("hell");
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export default verifyToken;
