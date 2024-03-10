import React from "react";
import Style from "/styles/Teams.module.css";
import Grid from "@mui/material/Grid";
import TeamCard from "./TeamCard";

function TeamSection({ header, members }) {
  return (
    <div>
      <p className={Style.teamName}>{header}</p>
      <Grid item xs={12} sm={6} md={4}>
        <Grid container rowSpacing={1} spacing={9} columnSpacing={{ sm: 5 }}>
          {members.map((mem) => (
            <Grid
              key={mem.name}
              item
              xs={12}
              sm={6}
              md={4}
              textAlign="center"
              className={Style.main}
            >
              <TeamCard name={mem.name} image={mem.image} mobile={mem.mobile} role={mem.role}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default TeamSection;
