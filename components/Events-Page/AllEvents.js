import React, { useContext } from "react";
import Style from "../../styles/Events.module.css";
import Grid from "@mui/material/Grid";
import EventContext from "/context/EventContext";
import EventCard from "../events/EventCard";

function AllEvents({ userCoins }) {
  const { allEvents, registerInEvent } = useContext(EventContext);

  return (
    <div>
      <Grid
        container
        spacing={4}
        // spacing={{ xs: 2, md: 3 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
        // rowSpacing={8} columnSpacing={6}
      >
        {allEvents &&
          allEvents.map((items, key) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <EventCard
                registerInEvent={registerInEvent}
                event={items}
                userCoins={userCoins}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default AllEvents;
