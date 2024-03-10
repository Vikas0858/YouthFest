import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
import nookies from "nookies";
import apiCall from "../helper/apiCall";
import EventContext from "/context/EventContext";
import { useAuth } from "/context/AuthContext";
import EventPageTop from "../components/Events-Page/EventPageTop";
import Cultural from "../components/Events-Page/cultural_card";
import Literary from "../components/Events-Page/literary_card";
import Sports from "../components/Events-Page/sports_card";
import AllEvents from "../components/Events-Page/AllEvents";
import FollowUs from "../components/FollowUs";
import Footer from "../components/Footer";

import CoinIcon from "../components/CoinIcon";
import Style from "../styles/Events.module.css";

export default function Events({ userCoins }) {
  const categories = ["All", "Sports", "Cultural", "Literary"];

  const [eventCateg, setEventCateg] = useState("All");

  const { allEvents } = useContext(EventContext);
  const { isAdmin } = useAuth();
  let totalReg = 0;

  if (isAdmin && allEvents) {
    allEvents.map((event) => {
      totalReg += event.registrations.length;
    });
  }

  const handleEventCategoryClick = (cat) => {
    setEventCateg(cat);
    categories.map((categ) => {
      document.getElementById(categ).style.color = "#fff";
    });
    document.getElementById(cat).style.color = "#F2BC56";
  };

  return (
    <div id="root">
      <Head>
        <title>YouthFest 2024 - Events</title>
      </Head>
      <EventPageTop />

      <div className={`eve-view ${Style.eve_nav}`}>
        <div className={`evenavitem ${Style.evenav_items}`}>
          <a
            id="All"
            className={`evenavpad ${Style.evenavpad} ${Style.event_nav_item}`}
            style={{ color: "#F2BC56" }}
            onClick={() => {
              handleEventCategoryClick("All");
            }}
          >
            All
          </a>
          <p className={`evenavpad ${Style.evenavpad}`}>|</p>
          <a
            id="Cultural"
            className={`evenavpad ${Style.evenavpad} ${Style.event_nav_item}`}
            onClick={() => handleEventCategoryClick("Cultural")}
          >
            Cultural
          </a>
          <p className={`evenavpad ${Style.evenavpad}`}>|</p>
          <a
            id="Literary"
            className={`evenavpad ${Style.evenavpad} ${Style.event_nav_item}`}
            onClick={() => handleEventCategoryClick("Literary")}
            // href="./events/literary"
          >
            Literary
          </a>
          <p className={`evenavpad ${Style.evenavpad}`}>|</p>
          <a
            id="Sports"
            className={`evenavpad ${Style.evenavpad} ${Style.event_nav_item}`}
            onClick={() => handleEventCategoryClick("Sports")}
            // href="./events/sports"
          >
            Sports
          </a>

          {isAdmin && <p className={`evenavpad ${Style.evenavpad}`}>|</p>}
          {isAdmin && <p>Total Registrations: {totalReg}</p>}
        </div>
      </div>

      <CoinIcon userCoins={userCoins ? userCoins : 1} />
      <Container sx={{ marginBottom: "100px" }}>
        {eventCateg === "Sports" ? (
          <Sports userCoins={userCoins ? userCoins : 1} />
        ) : eventCateg === "Cultural" ? (
          <Cultural userCoins={userCoins ? userCoins : 1} />
        ) : eventCateg === "Literary" ? (
          <Literary userCoins={userCoins ? userCoins : 1} />
        ) : (
          <AllEvents userCoins={userCoins ? userCoins : 1} />
        )}
      </Container>
      <FollowUs />
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
