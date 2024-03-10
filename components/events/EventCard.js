import React, { useContext } from "react";
import Style from "../../styles/Events.module.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BiChevronRight } from "react-icons/bi";

import ExploreEvent from "./ExploreEvent";

import { useAuth } from "../../context/AuthContext";
import ModalContext from "../../context/ModalContext";

function EventCard(props) {
  const { event, registerInEvent, userCoins } = props;
  const { openModal, closeModal } = useContext(ModalContext);
  const { currentUser } = useAuth();

  let isRegistered = false;
  if (event && event.registrations && currentUser) {
    isRegistered = event.registrations.some(
      (reg) => reg.email === currentUser.email
    );
  }

  return (
    <div className={`${Style.card} card rounded`}onClick={() => {
            openModal(
              <ExploreEvent
                eventDetail={event}
                isRegistered={isRegistered}
                registerInEvent={registerInEvent}
                userCoins={userCoins}
              />
            );
          }}>
      <div className="">
        <img
          className={`${Style.card_image} card-img-top mt-3 rounded`}
          src={event.eventImageURL}
          alt="Card image cap"
        />
      </div>
      <div className={`card-body ${Style.card_body}`}>
        <h5
          className={`card-title ${Style.card_title} font-semibold`}
          style={{ color: "#787EFA" }}
        >
          {event.name}
        </h5>
        <p className={` card-text ${Style.card_text} mb-4 text-white`}>
          {event.shortDesc && event.shortDesc}
        </p>
        {/* {isRegistered ? (
          <a className={Style.register_btn}>Registered</a>
        ) : ( */}
        <div className={`${Style.card_date_time}`}>
          <div>
            On {event.date &&
              event.date.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
              })}
          </div>
        </div>
        <p
          className={` card-text ${Style.card_price_text} mb-4`}
          style={{ color: "#787EFA" }}
        >
          Price: ₹{event?.price}
        </p>
        <div
          className={Style.toggle_register}
          
        >
          <a className={Style.register_btn}>Explore</a>
          <BiChevronRight
            height={20}
            width={20}
            className="position-absolute"
            color=" #FFAE42"
          />
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default EventCard;
