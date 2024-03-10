import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import EventCard from "../events/EventCard";
import EventContext from "/context/EventContext";

const Sports = () => {
  const { allEvents, registerInEvent } = useContext(EventContext);
  // const filteredEvents = allEvents.filter(
  //   (event) => event.category.toLowerCase() === "sports"
  // );
  // console.log(filteredEvents);
  let filteredEvents = [];
  allEvents.map((event) => {
    if (event && event.category) {
      if (event.category.toLowerCase() === "sports") {
        filteredEvents.push(event);
      }
    }
  });
  return (
    <div>
      <Grid
        container
        spacing={4}
        // spacing={{ xs: 2, md: 3 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
        // rowSpacing={8} columnSpacing={6}
      >
        {filteredEvents.map((items, key) => (
          <Grid item xs={12} sm={6} md={4} key={key}>
            <EventCard registerInEvent={registerInEvent} event={items} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Sports;
