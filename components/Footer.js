import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Image from "next/image";
import Link from "next/link";

import YFicon from "../public/Youthfest.svg";
import yearicon from "../public/2023.svg";
import mhrd from "../public/mhrdlogo.svg";
import yflogo from "../public/yf2024.png";
import mnitlogo from "../public/mnit logo.svg";
import thinkindialogo from "../public/thinkindialogo.svg";

export default function Footer() {
  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
  };
  return (
    <div>
      <div
        style={{
          height: "1px",
          maxWidth: "80%",
          opacity: "0.28",
          margin: "50px auto",
          background: "#fff",
          backgroundColor:
            "linear-gradient(63.43deg, #FFFFFF 0%, #E0E0E0 43.92%, #FFFFFF 83.33%)",
        }}
      ></div>
      <Grid
        className="container"
        container
        spacing={6}
        sx={
          {
            //   paddingBottom: "50px",
            //   borderTop: "0.5px solid #fff",
            //   width: "80%",
            //   margin: "0 auto",
          }
        }
      >
        <Grid item xs={12} md={12}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4} textAlign="center">
              <Image src={mnitlogo} width={200} height={170} />
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <Image src={yflogo} width={200} height={190} />
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <Image src={thinkindialogo} width={200} height={170} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={12}>
          <div
            className="footer_image"
            style={{
              display: "grid",
              margin: "auto",
              marginTop: "50px",
            }}
          >
            <Image
              className="youthfest_image"
              src={YFicon}
              height={100}
              width={630}
              alt="youthfest_image"
            />
            {/* <Image
              className="A2023_image"
              src={yearicon}
              height={120}
              width={630}
              alt="2023_image"
            /> */}
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          <div style={{ width: "30%", margin: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6} md={3} textAlign="center">
                <Link style={linkStyle} href="/">
                  Home
                </Link>
              </Grid>
              <Grid item xs={6} sm={6} md={3} textAlign="center">
                <Link style={linkStyle} href="/events">
                  Events
                </Link>
              </Grid>
              <Grid item xs={6} sm={6} md={3} textAlign="center">
                <Link style={linkStyle} href="/teams">
                  About
                </Link>
              </Grid>
              <Grid item xs={6} sm={6} md={3} textAlign="center">
                <Link style={linkStyle} href="/Help">
                  Help
                </Link>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={12} md={12}>
          <div style={{ width: "30%", margin: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6} md={3} textAlign="center">
                <a style={linkStyle} href="/terms-conditions" target="_blank">
                  Terms & Conditions
                </a>
              </Grid>
              <Grid item xs={6} sm={6} md={3} textAlign="center">
                <a style={linkStyle} href="/privacy-policy" target="_blank">
                  Privacy Policy
                </a>
              </Grid>
              <Grid item xs={6} sm={6} md={3} textAlign="center">
                <a style={linkStyle} href="/return-policy" target="_blank">
                  Return Policy
                </a>
                
              </Grid>
              <Grid item xs={6} sm={6} md={3} textAlign="center">
                <a style={linkStyle} href="/contactUs" target="_blank">
                  Contact Us
                </a>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={12} md={12}>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ marginTop: "0px" }}
          >
            © Copyright 2024 MNIT Youthfest.. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
