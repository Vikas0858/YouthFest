import React, { useContext } from "react";
import LoaderContext from "../context/LoaderContext";
import EventContext from "../context/EventContext";

function Load() {
  const { isLoading, setIsLoading } = useContext(LoaderContext);
  const { allEvents } = useContext(EventContext);
  return (
    <div>
      <button
        onClick={() => {
          setIsLoading(true);
          function random() {
            console.log("some random funcion");
            // setIsLoading(false);
          }
          setTimeout(random, 2000);

          //   random();
        }}
      >
        start loader
      </button>
      <button onClick={() => setIsLoading(false)}>pause loader</button>
    </div>
  );
}

export default Load;
