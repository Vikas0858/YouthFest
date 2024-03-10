// next imports
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";

import styles from "../styles/Home.module.css";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import nookies from "nookies";
import apiCall from "../helper/apiCall";

// components import
import HomeS from "../components/HomeS";
import AboutYF from "../components/AboutYF";
import Events from "../components/events/Events";
import OurPartners from "../components/OurPartners";
import Gallery from "../components/Gallery";
import VivekCard from "../components/VivekCard";
import Footer from "../components/Footer";
import CoinIcon from "../components/CoinIcon";

export default function Home({ userCoins }) {
  const { currentUser, logout, error, idToken, signUp } = useAuth();
  return (
    <div>
      {/* {console.log(userCoins)} */}
      <Head>
        <title>YouthFest 2024</title>
      </Head>
      <HomeS userCoins={userCoins} />
      <CoinIcon userCoins={userCoins ? userCoins : 1} />
      <AboutYF />
      <Events />
      {/* <OurPartners /> */}
      <Gallery />
      <VivekCard />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const coins = await apiCall(
      `${process.env.BASE_URL}/getCredits?email=${cookies.email}`,
      "GET",
      {},
      cookies.token
    );
    const data = coins.data;
    return {
      props: {
        userCoins: data.message,
      },
    };
    // if(cookies){
    // const res = await fetch("/api/getCoins", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: cookies.email,
    //   }),
    //   headers: {
    //     Authorization: cookies.token,
    //   },
    // });
    // const resjson = await res.json();
    // return {
    //   props: {
    //     userCoins: resjson.message,
    //   },
    // };
    // }
  } catch (err) {
    console.log(err);
    return {
      props: {
        userCoins: 1,
      },
    };
  }
}
