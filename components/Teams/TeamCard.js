import React from "react";
import Image from "next/image";
import Style from "/styles/Teams.module.css";
import yash from "/public/Youthfest.svg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";


export default function TeamCard({ name, image, mobile,role }) {
  
  return (
    <>
      <div className={Style.profile}>
        <Image
          className={Style.img}
          src={image}
          alt="yash"
          width={206}
          height={289}
          style={{ borderRadius: 12 }}
        />
      </div>
      <div className={Style.social}>
        <div className={Style.profileName} style={{ color: "#F2BC56" ,fontSize:22}} >
          {name} 
        </div>
        
        {mobile && (
          <div className={Style.mobileNumber} style={{ color: "white" ,fontSize:14,marginLeft:5}} >
            ({mobile})
          </div>
        )}
        <div style={{marginLeft:10}}>
        {role}
       </div> 

      </div>
    </>
  );
}
