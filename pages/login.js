import React from "react";

import { useAuth } from "../context/AuthContext";


function Login() {
  const { currentUser, logout, error, idToken, signUp } = useAuth();
  return (
    <div>
      <button onClick={signUp}>Sign Up</button>
      <button onClick={logout}>Logout</button>

      {console.log(currentUser)}
      {console.log("id token", idToken)}
      <h1>{currentUser?.email}</h1>
    </div>
  );
}

export default Login;
