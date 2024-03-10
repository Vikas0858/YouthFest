import React, { useContext } from "react";

import Image from "next/image";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useAuth } from "/context/AuthContext";
import useToast from "/Hooks/useToast";
import EventContext from "../../context/EventContext";
import ModalContext from "../../context/ModalContext";

import Participants from "./Participants";
import TreasureHuntMap from "./TreasureHuntMap";
import RegistrationForm from "./RegistrationForm";
import { FaUserFriends } from "react-icons/fa";
import styles from "/styles/Events/ExploreEvent.module.css";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
// const ReactQuill = dynamic(import("react-quill"), { ssr: false });

const Dynamic = dynamic(
  () => import("react-quill"),
  { ssr: false } // <-- not including this component on server-side
);

export default function ExploreEvent({ eventDetail, isRegistered, userCoins }) {
  const { registerInEvent, closeRegistration, myCoins } =
    useContext(EventContext);
  const eventdate = new Date(eventDetail.date);
  const { currentUser, isAdmin } = useAuth();
  const { openModal, closeModal } = useContext(ModalContext);

  const notify = useToast();

  const modules = {
    toolbar: false,
  };
  const aboutArr = eventDetail.about;
  let aboutArr_parsed;
  console.log(eventDetail.price);
  try {
    aboutArr_parsed = { ops: JSON.parse(eventDetail.about) };
  } catch (err) {
    // report error
  }
  console.log(eventDetail);
  const quillStyle = {
    fontSize: "20px",
  };
  const sampleImg =
    "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png";

  return (
    // <div className={styles.explore_evnt_container}>
    <Container
      sx={{
        width: { md: "40vw", sm: "60vw", xs: "80vw" },
      }}
      className={styles.explore_evnt_container}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <div style={{ position: "relative", width: "100%" }}>
                {/* <Image src={eventDetail.eventImageURL} fill sizes="100vw" /> */}
                <img
                  className={styles.event_img}
                  src={eventDetail.eventImageURL}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              {eventDetail.map && (
                <Button
                  onClick={() =>
                    openModal(<TreasureHuntMap map={eventDetail.map} />)
                  }
                >
                  Show Map
                </Button>
              )}
            </Grid>
            <Grid item xs={12} md={12}>
              <Box className={styles.event_date_time_box}>
                <Typography className={styles.event_date_time}>
                  {/* {eventdate &&
                    `${eventdate.toLocaleString("default", {
                      month: "short",
                    })} ${eventdate.toLocaleString("default", {
                      day: "numeric",
                    })}, ${eventdate.toLocaleString("default", {
                      year: "numeric",
                    })}`} */}
                  {eventDetail.date}
                </Typography>
                <Typography className={styles.event_date_time}>
                  {eventDetail.venue}
                </Typography>
                {/* <Typography className={styles.event_date_time}>
                  {eventdate.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Typography> */}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography className={styles.event_name} variant="h4">
                {eventDetail.name}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Dynamic
                value={eventDetail.about}
                readOnly={true}
                modules={modules}
                style={quillStyle}
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <div className={styles.register_btn_bg}>
                {isRegistered ? (
                  eventDetail.isClosed ? (
                    <button
                      style={{ cursor: "not-allowed" }}
                      className={styles.register_btn}
                    >
                      Closed
                    </button>
                  ) : (
                    <button
                      style={{ cursor: "not-allowed" }}
                      className={styles.register_btn}
                    >
                      Registered
                    </button>
                  )
                ) : eventDetail.isClosed ? (
                  <button
                    style={{ cursor: "not-allowed" }}
                    className={styles.register_btn}
                  >
                    Closed
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (currentUser) {
                        if (eventDetail.price > myCoins) {
                          notify("error", "Not Enough Coins");
                        } else {
                          openModal(
                            <RegistrationForm
                              event={eventDetail}
                              registerInEvent={registerInEvent}
                              closeModal={closeModal}
                            />
                          );
                        }
                      } else {
                        notify("error", "Please Login first");
                      }
                    }}
                    className={styles.register_btn}
                  >{`Register for ${
                    eventDetail.price ? eventDetail.price : 0
                  } Coin`}</button>
                )}
              </div>
              <div className={styles.register_admin}>
                {isAdmin && (
                  <Button
                    onClick={() => {
                      closeRegistration(eventDetail.eventID);
                      closeModal();
                    }}
                    variant="contained"
                  >
                    Close Registration
                  </Button>
                )}

                {isAdmin && (
                  <button
                    onClick={() => {
                      openModal(
                        <Participants
                          eventRegistrations={eventDetail.registrations}
                          eventName={eventDetail.name}
                        />
                      );
                    }}
                  >
                    View Registrations <FaUserFriends />
                  </button>
                )}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    // {/* </div> */}
  );
}
