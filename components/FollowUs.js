import React from "react";
import {useRouter} from "next/router";

import styles from "../styles/VivekCard.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";



function FollowUs() {

  const router = useRouter();

  const handleFacebook = () =>{
    router.push('https://www.facebook.com/thinkindiaofficial/');
  }

  const handleInsta = () =>{
    router.push('https://www.instagram.com/thinkindiamnit/');
  }

  const handleYoutube = () =>{
    router.push('https://www.youtube.com/c/ThinkIndiaorg');
  }

  const handleLinkedin = () => {
    router.push('https://www.linkedin.com/company/thinkindiaorg/about/');
  }
 
  const handleTwitter = () => {
    router.push('https://twitter.com/thinkindiaorg');
  }

  return (
    <div className={styles.follow}>
      <h1 className={styles.followhead}>Follow us</h1>
      <div className={styles.icons}>
        <FaFacebook color=" #FFAE42" size={45} onClick={handleFacebook} className={styles.iconItems} />
        <FaInstagram size={45} color="#AA336A" onClick={handleInsta} className={styles.iconItems} />
        <FaLinkedin size={45} color="#0000b2"  onClick={handleLinkedin} className={styles.iconItems} />
        <FaYoutube size={45} color=" #FFA500" onClick={handleYoutube} className={styles.iconItems} />
        <FaTwitter color="#1DA1F2" size={45} onClick={handleTwitter} className={styles.iconItems} />
      </div>
    </div>
  );
}

export default FollowUs;
