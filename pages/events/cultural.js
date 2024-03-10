import React from "react";
import Cultural from "../../components/Events-Page/cultural_card";
import EventPageTop from "../../components/Events-Page/EventPageTop";
import FollowUs from "../../components/FollowUs";
import Footer from "../../components/Footer";
import Style from "../../styles/Events.module.css";
const sportsPage = () => {
  return (
    <div>
      <EventPageTop />
      <div className={`eve-view ${Style.eve_nav}`}>
        <div className={`evenavitem ${Style.evenav_items}`}>
          <a className={`evenavpad ${Style.evenavpad}`} href="./all">
            All
          </a>
          <p className={`evenavpad ${Style.evenavpad}`}>|</p>
          <a
            className={`evenavpad ${Style.evenavpad}`}
            style={{ color: "#F2BC56", cursor: "context-menu" }}
            href=""
          >
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
      <div className={Style.cultural_card_page}>
        <Cultural />
      </div>
      <FollowUs />
      <Footer />
    </div>
  );
};

export default sportsPage;
