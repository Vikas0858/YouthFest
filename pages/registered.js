import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import nookies from "nookies";
import apiCall from "../helper/apiCall";
import { useAuth } from "../context/AuthContext";
import { firebaseAdmin } from "../config/firebaseAdmin";
export default function RegisteredEvents(props) {
  const { currentUser, logout, error, idToken, signUp } = useAuth();
  const [about_list, setAboutList] = useState(props.about_list);
  return (
    <div>
      <button onClick={signUp}>Sign Up</button>
      <button onClick={logout}>Logout</button>
      <h1>Registered Events</h1>
      <h1>{currentUser?.email}</h1>
      <div>
        {about_list.map((ev) => (
          <div key={ev.name}>
            <h1>{ev.name}</h1>
            <h1>{ev.about}</h1>
            <h2>{ev.price}</h2>
            <h2>{ev.date}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    console.log(cookies.token);
    const { uid, email } = token;
    const res = await apiCall(
      `${process.env.REGISTRATION_API}?email=` + email,
      "GET",
      {},
      cookies.token
    );
    const data = await res.data;
    if (data.message == "Not authorized") {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    return {
      props: {
        about_list: data.about_list,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}
