import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventContext from "../../context/EventContext";
import EventCard from "./EventCard";

function EventCarousel({ selectedCategory }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { allEvents, registerInEvent } = useContext(EventContext);
  let filteredEvents = [];

  if (selectedCategory) {
    allEvents.map((event) => {
      if (event && event.category) {
        if (event.category.toLowerCase() === selectedCategory.toLowerCase()) {
          filteredEvents.push(event);
        }
      }
    });
  }

  return (
    <div>
      <Slider {...settings}>
        {filteredEvents &&
          filteredEvents.map((items, key) => (
            // <Grid item xs={12} sm={6} md={4} key={key}>
            <div key={key} style={{ margin: "auto", width: "90%" }}>
              <div className="event_carousel_card" style={{ margin: "10px" }}>
                <EventCard
                  registerInEvent={registerInEvent}
                  event={items}
                  style={{ margin: "auto 10px !important", padding: "5px" }}
                />
              </div>
            </div>

            // </Grid>
          ))}
      </Slider>
    </div>
  );
}

export default EventCarousel;
