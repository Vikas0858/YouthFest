import React from "react";

import Image from "next/image";
import styles from "/styles/PageTop.module.css";
import Navbar from "../../components/Navbar";
import Nav from "../Nav";
import Faq from "../../public/Faq img.png";
import BGImg from "../../public/bg.jpeg";

function EventPageTop() {
  return (
    <div className="event-cont">
      <style jsx>{`
        .event-cont {
          background-repeat: no-repeat;
          background-image: url(/bg.jpeg);
          background-size: cover;
          box-shadow: rgb(0 0 0 / 55%) 0px 0px 0px 2000px inset;
        }
        .event_heading {
          width: 300px;
          padding-top: 10%;
          margin: auto;
          padding-bottom: 14%;
        }

        .event_img_container {
          position: relative;
          width: 100%;
          height: 130px;
        }
        @media (max-width: 410px) {
          .event_img_container {
            width: 80vw;
            margin: auto;
          }
        }
      `}</style>
      {/* <Navbar /> */}
      <Nav />
      <div className={styles.event_heading}>
        <div className={styles.event_img_container} style={{}}>
          <Image className={styles.team_img} src={Faq} fill />
        </div>
        {/* <Image src={EventHeadig} width={400} height={130} /> */}
      </div>
    </div>
  );
}

export default EventPageTop;
