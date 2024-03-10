import React from "react";
import youthfestmain from "../public/youthfestmain.png";
import YFicon from "../public/Youthfest.svg";
import mnitlogo from "../public/mnit logo.svg";
import Image from "next/image";
import Navbar from "./Navbar";
import Nav from "./Nav";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import styles from "/styles/HomeS.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function HomeS({ userCoins }) {

  const router = useRouter();

  const HandleClick = () => {
    router.push('/events');
  };

  return (
    <div className={styles.home_sc_cont}>
      <Nav userCoins={userCoins} />
      {/* <Navbar /> */}
      <section className="main-section">
        <div className={styles.front_screen_cont}>
          <div style={{ position: "relative", width: "90vw", height: "100px" }}>
            <Image src={YFicon} fill alt="youthfest_image" />
          </div>

          <p className={styles.front_text}>
            To the heroes of tomorrow, to the energies that will define the
            future
          </p>
          <Link href="/events" passHref className={styles.register_btn}>
            Register for events
          </Link>
        </div>

        <Container className={styles.containerca}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4} sm={6}>
              {/* <div className={styles.box} /> */}
              <div className={`${styles.box} ${styles.box1}`} onClick={HandleClick}/>
            </Grid>
            <Grid item xs={12} md={4} sm={6}>
              {/* <div className={styles.box} /> */}
              <div className={`${styles.box} ${styles.box2}`} onClick={HandleClick}/>
            </Grid>
            <Grid item xs={12} md={4} sm={6}>
              {/* <div className={styles.box} /> */}
              <div className={`${styles.box} ${styles.box3}`} onClick={HandleClick}/>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
}

export default HomeS;
