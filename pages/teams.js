import React from "react";
import Image from "next/image";
import yash from "../public/Youthfest.svg";
import Style from "../styles/Teams.module.css";
import TeamPageTop from "/components/Teams/TeamPageTop";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import FollowUs from "/components/FollowUs";
import Footer from "/components/Footer";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import TeamCard from "../components/Teams/TeamCard";
import data from "/components/Teams/data";
import TeamSection from "../components/Teams/TeamSection";

function Teams() {
  return (
    <>
      <TeamPageTop />
      <div className="container">
        <div className="container1">
          {data &&
            data.map((data) => (
              <TeamSection
                key={data.header}
                header={data.header}
                members={data.members}
              />
            ))}
        </div>
      </div>
      <FollowUs />
      <Footer />
    </>
  );
}

export default Teams;
