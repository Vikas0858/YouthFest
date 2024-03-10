import React, { useState, useEffect, useContext } from "react";
import { auth, db } from "../config/FirebaseConfig";
const { doc, getDoc, setDoc } = require("firebase/firestore");
import nookies from "nookies";
const AuthContext = React.createContext();
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { set } from "firebase/database";
import validateMnit from "../helper/validateMnit";
export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [idToken, setIdToken] = useState(null);

  const userIsAdmin = async (user) => {
    // console.log(user)
    var userRef = doc(db, "admin", user.email);
    // console.log(user.email);
    const docu = await getDoc(userRef);
    if (docu.exists()) {
      return true;
    }
    return false;
  };

  // phone number authentication

  // const authStateChanged = async (authState) => {
  //   if (!authState) {
  //     setUser();
  //     setLoading(false);
  //     return;
  //   }

  //   setLoading(true);
  //   var formattedUser = formatAuthUser(authState);
  //   setUser(formattedUser);
  //   let res = await userIsAdmin(formattedUser);
  //   setIsAdmin(res);
  //   setLoading(false);
  // };

  // const clear = () => {
  //   setAuthUser(null);
  //   setLoading(true);
  // };

  // const signOut = () => auth.signOut().then(clear);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(authStateChanged);
  //   return () => unsubscribe();
  // }, []);

  //google authentication

  useEffect(() => {
    auth.onIdTokenChanged(async (user) => {
      setLoading(false);
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", { path: "/" });
        nookies.set(undefined, "email", "", { path: "/" });
      } else {
        const token = await user.getIdToken();
        setUser(user);
        let res = await userIsAdmin(user);
        // console.log(res);
        setIsAdmin(res);
        nookies.set(undefined, "token", token, { path: "/" });
        nookies.set(undefined, "email", user.email, { path: "/" });
      }
    });
  }, []);
  useEffect(() => {
    const handle = setInterval(async () => {
      const user = auth.currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);
    return () => clearInterval(handle);
  }, []);

  const signUp = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        "sign-in-hint": "use institute email",
      });

      const res = await signInWithPopup(auth, provider);
      // if (
      //   process.env.NODE_ENV === "production" &&
      //   !validateMnit(res.user.email)
      // ) {
      //   await signOut(auth);
      //   return;
      // }
      const token = await res.user.getIdToken();
      setIdToken(token);
      if (token !== null) {
        const docRef = doc(db, "registration", res.user.email);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
          await setDoc(docRef, {
            coins: 0,
            "event-map": {},
            events: [{}],
          });
        }
      }
      return res;
    } catch (error) {
      setError(error);
      return error;
    }
  };

  const logout = async () => {
    try {
      const res = await signOut(auth);
      setUser(null);
      setIdToken(null);
      setIsAdmin(false);
      return res;
    } catch (error) {
      setError(error);
      return error;
    }
  };

  const value = {
    currentUser, // current user
    logout, // sign out
    error, // error
    idToken, // id token
    signUp, // sign up
    isAdmin, //admin check
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
