import Head from "next/head";
import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles1 from "/styles/Responcive.module.css";
import styles from "../styles/VivekCard.module.css";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import FollowUs from "./FollowUs";

// const inter = Inter({ subsets: ["latin"] });

export default function VivekCard() {
  return (
    <>
      <div className={`${styles.wrapper} container`}>
        {/* <div className="container1"> */}
        {/* <div className={`${styles.container2}`}>
            <Image
              className={styles.image}
              src="/Image 28.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <div className={styles.header}>
              <h1>Swami Vivekanand</h1>
            </div>

            <p className={`${styles.text} ${styles1.txt}`}>
              “Arise! Awake! And stop not until the goal is reached.” The
              powerful words of Swami Vivekanada for the youth made him the
              greatest youth icon of the nation. A man with principles whose
              ideals are acknowledged even today by eminent figures such as
              Narendra Modi, the Prime Minister of India. Swami Vivekananda’s
              huge emphasis on rising youth power and its utilization for the
              development of the nation were unique in his period. He focussed
              on human development. He exerted a lot over the character building
              education of men and women. <br />
              For him, education was not just the learning of facts but gaining
              self confidence and self respect. A noteworthy figure who earned
              respect for the Indian cultural beliefs in the west. Amazed by his
              profound thoughts, Americans reported him as “the cyclonic monk
              from India”. Spreading his words of wisdom and strongly believing
              in “Vasudhaiva Kutumbakam” Vivekananda ji adhered to working
              unitedly for the upliftment of every individual. His devotion
              towards working for mankind merged with the scientific venture
              into philosophy excelled him as an individual. His speeches
              brought new consciousness and enthusiasm in youth. “ My hope for
              the future lies in the youth of character, intelligent, renouncing
              all for the service of others, and obedient - good to themselves
              and the country at large.”
            </p>
          </div> */}
        {/* <div className={styles.container2}> */}
        {/* <Container> */}
        <Grid
          container
          spacing={2}
          className={styles.container2}
          alignItems="center"
        >
          <Grid item xs={12} md={5} sm={5}>
            <div
            // style={{ position: "relative", width: "100%", height: "500px" }}
            >
              {/* <Image src="/Image 28.png" fill sizes="100vw" /> */}
              <img
                src="/Image 28.png"
                style={{ height: "100%", width: "100%", inset: "0px" }}
              />
            </div>
            {/* <Image
              // className={styles.image}
              src="/Image 28.png"
              alt="Picture of the author"
              width={500}
              height={500}
            /> */}
          </Grid>
          <Grid item xs={12} md={7} sm={7}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={12}>
                {/* <h1 className={styles.swami_name}>Swami Vivekanand</h1> */}
                <Typography className={styles.swami_name} variant="h4">
                  Swami Vivekanand
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography
                  variant="body1"
                  // className={`${styles.text} ${styles1.txt}`}
                >
                  “Arise! Awake! And stop not until the goal is reached.” The
                  powerful words of Swami Vivekanada for the youth made him the
                  greatest youth icon of the nation. A man with principles whose
                  ideals are acknowledged even today by eminent figures such as
                  Narendra Modi, the Prime Minister of India. Swami
                  Vivekananda’s huge emphasis on rising youth power and its
                  utilization for the development of the nation were unique in
                  his period. He focussed on human development. He exerted a lot
                  over the character building education of men and women. <br />
                  For him, education was not just the learning of facts but
                  gaining self confidence and self respect. A noteworthy figure
                  who earned respect for the Indian cultural beliefs in the
                  west. Amazed by his profound thoughts, Americans reported him
                  as “the cyclonic monk from India”. Spreading his words of
                  wisdom and strongly believing in “Vasudhaiva Kutumbakam”
                  Vivekananda ji adhered to working unitedly for the upliftment
                  of every individual. His devotion towards working for mankind
                  merged with the scientific venture into philosophy excelled
                  him as an individual. His speeches brought new consciousness
                  and enthusiasm in youth. “ My hope for the future lies in the
                  youth of character, intelligent, renouncing all for the
                  service of others, and obedient - good to themselves and the
                  country at large.”
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* </Container> */}
        {/* </div> */}
        {/* </div> */}
      </div>
      <FollowUs />
    </>
  );
}
