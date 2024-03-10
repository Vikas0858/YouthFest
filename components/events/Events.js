import React, { useState } from "react";
import Link from "next/link";
import EventCarousel from "./EventCarousel";
import { FiArrowRight } from "react-icons/fi";

function Events() {
  const [selectedCategory, setSelectedCategory] = useState("Sports");
  return (
    <div className="container eve">
      <div className="container1">
        <div className="evenav">
          {/* <h1>Events</h1> */}
          <p className="section-heading">Events</p>
          <div className="eve-view">
            <div className="evenavitem">
              <a
                className="evenavpad"
                onClick={() => setSelectedCategory("Cultural")}
              >
                Cultural
              </a>
              <p className="evenavpad">|</p>
              <a
                className="evenavpad"
                onClick={() => setSelectedCategory("Literary")}
              >
                Literary
              </a>
              <p className="evenavpad">|</p>
              <a
                className="evenavpad"
                onClick={() => setSelectedCategory("Sports")}
              >
                Sports
              </a>
            </div>
            <Link href="/events" passHref>
              <button className="arrowbtn">
                <FiArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <EventCarousel selectedCategory={selectedCategory} />
      {/* <div className="eventsh">
        <img src="img/eventsBg.png" className="eventsbgi" />
        <div className="eventstxt">
          <p>Date</p>
          <p>Time</p>
        </div>
        <h2>Heading</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <button>Register &gt;</button>
      </div> */}
    </div>
  );
}

export default Events;
