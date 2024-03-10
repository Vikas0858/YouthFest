import React from "react";
import Navbar from "../../components/Navbar";
import Cultural from "../../components/Events-Page/cultural_card";
import Literary from "../../components/Events-Page/literary_card";
import Sports from "../../components/Events-Page/sports_card";
import EventPageTop from "../../components/Events-Page/EventPageTop";
import FollowUs from "../../components/FollowUs";
import Footer from "../../components/Footer";
import Style from "../../styles/Events.module.css";

const all = () => {
  return (
    <>
      {/* <Navbar/> */}
      <EventPageTop />
      <div className={`eve-view ${Style.eve_nav}`}>
        <div className={`evenavitem ${Style.evenav_items}`}>
          <a
            className={`evenavpad ${Style.evenavpad}`}
            style={{ color: "#F2BC56", cursor: "context-menu" }}
            href=""
          >
            All
          </a>
          <p className={`evenavpad ${Style.evenavpad}`}>|</p>
          <a className={`evenavpad ${Style.evenavpad}`} href="./cultural">
            Cultural
          </a>
          <p className={`evenavpad ${Style.evenavpad}`}>|</p>
          <a className={`evenavpad ${Style.evenavpad}`} href="./literary">
            Literary
          </a>
          <p className={`evenavpad ${Style.evenavpad}`}>|</p>
          <a className={`evenavpad ${Style.evenavpad}`} href="./sports">
            Sports
          </a>
        </div>
      </div>
      <div className={Style.sports_card_page}>
        <Sports />
      </div>
      <div className={Style.cultural_card_page}>
        <Cultural />
      </div>
      <div className={Style.literary_card_page}>
        <Literary />
      </div>
      <FollowUs />
      <Footer />
    </>
  );
};

export default all;
