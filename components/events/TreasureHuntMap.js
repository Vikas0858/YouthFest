import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import styles from "/styles/Events/ExploreEvent.module.css";

function TreasureHuntMap({ map }) {
  return (
    <div>
      <Button variant="contained">
        <a
          href={map}
          download
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Download image
        </a>
      </Button>

      <Box sx={{ position: "relative", width: "90vw" }}>
        <img
          className={styles.event_img}
          src={map}
          style={{ height: "90vh", width: "100%" }}
        />
      </Box>
    </div>
  );
}

export default TreasureHuntMap;
