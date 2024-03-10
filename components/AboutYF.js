import React from "react";
import Typography from "@mui/material/Typography";
import styles from "/styles/AboutYF.module.css";
import Script from "next/script";

function AboutYF() {
  return (
    <>
      <div className="container px-4">
        {/* Container1 has same property just like container but it only work when windows screen width is greator than 900px */}
        <div className="container1">
          <div className={styles.abtYF}>
            <img src="/abt_yf_bg2.svg" className={styles.abtBGimg} />
            <div className={styles.abtYFtxt}>
              <Typography variant="h2" className={styles.abt_yf_heading}>
                About Youthfest
              </Typography>
              <p className={styles.about_yf_txt}>
                Youth Fest is an annual gathering of youth with various
                activities including competitive events in the fields of
                sports,culture & literature, including quizzes, talks, debates,
                Kavyanjali Yoga and many more. Organised by Think India MNIT
                Jaipur, it is celebrated to commemorate the birth anniversary of
                youth icon Swami Vivekananda Ji.
              </p>
              <p className={styles.about_yf_txt}>
                This is a four day long fest(including celebration of National
                Youth Day) to provide a stage for you all to showcase and
                enhance talents of different sorts. Through Youth Fest, we
                aspire to educate and inspire the youth about Swami Vivekanandas
                message of unity, spirituality, personal development, and how
                his ideals would benefit them in this era.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutYF;
