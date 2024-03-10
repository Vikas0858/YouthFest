import React from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "/styles/Responcive.module.css";
import Image from "next/image";

import brandlogo1 from "../public/brandlogo1.svg";
import brandlogo2 from "../public/brandlogo2.svg";

function OurPartners() {
  return (
    <div className="container">
      <div className="">
        {/* <h1>Our Partners</h1> */}
        <p className="section-heading">Our partners</p>
      </div>

      <Grid container spacing={{ md: 6, sm: 4, xs: 4 }}>
        <Grid item xs={12} md={3} sm={6}>
          {/* <Image src={brandlogo1} fill sizes="100vw" /> */}
          <div style={{ position: "relative", width: "100%", height: "100px" }}>
            <Image src={brandlogo1} fill sizes="100vw" />
          </div>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          {/* <Image src={brandlogo2} fill sizes="100vw" /> */}
          <div style={{ position: "relative", width: "100%", height: "100px" }}>
            <Image src={brandlogo2} fill sizes="100vw" />
          </div>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          {/* <Image src={brandlogo1} fill sizes="100vw" /> */}
          <div style={{ position: "relative", width: "100%", height: "100px" }}>
            <Image src={brandlogo1} fill sizes="100vw" />
          </div>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          {/* <Image src={brandlogo2} fill sizes="100vw" /> */}
          <div style={{ position: "relative", width: "100%", height: "100px" }}>
            <Image src={brandlogo2} fill sizes="100vw" />
          </div>
        </Grid>
      </Grid>
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Image
          className={styles.brands}
          src={brandlogo2}
          width={200}
          height={60}
        />
        <Image
          className={styles.brands}
          src={brandlogo1}
          width={200}
          height={60}
        />
        <Image
          className={styles.brands}
          id={styles.unvisible_brand1}
          src={brandlogo2}
          width={200}
          height={60}
        />
        <Image
          className={styles.brands}
          id={styles.unvisible_brand2}
          src={brandlogo1}
          width={200}
          height={60}
        />
      </div> */}
    </div>
  );
}

export default OurPartners;
