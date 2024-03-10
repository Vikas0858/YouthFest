import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import styles from "/styles/Events/RegistrationForm.module.css";
import EventContext from "../../context/EventContext";

const labelStyles = {
  fontFamily: "Proxima Nova",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "18px",
  lineHeight: "18px",
  color: "#FFFFFF",
};

function RegistrationForm({ event, closeModal }) {
  const { registerInEvent} = useContext(EventContext);
  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [leaderContact, setLeaderContact] = useState("");
  const [leaderID, setLeaderID] = useState("");
  //   const [memeberIDs, setMemeberIDs] = useState([]);
  //   const [memeberID, setMemeberID] = useState("");
  //   let tmemberIDs = [];
  const [memberIDs, setMemberIDs] = useState({});

  const handleMember = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name, value);
    setMemberIDs((values) => ({ ...values, [name]: value }));
  };
  
  // const closeRegistration = (e) => {
  //   if(e.registrations.length() == )
  // }

  const handleSubmitReg = (e) => {
    e.preventDefault();
  
    const teamDetails = {
      teamName: teamName,
      leaderName: leaderName,
      leaderContact: leaderContact,
      leaderID: leaderID,
      teamMemberIDs: memberIDs,
    };
  
    // Register the team
    registerInEvent(event.eventID, event.price, event.name, teamDetails);
    closeModal();
  };


  return (
    <div className={styles.registerForm}>
      <form onSubmit={handleSubmitReg}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={12}>
            <p className={styles.regForm_heading}>Fill the registration form</p>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container spacing={2} alignItems="center">
              {event.teamSize > 1 && (
                <Grid item xs={12} md={12}>
                  <TextField
                    sx={{
                      input: { color: "white", backgroundColor: "#261428" },
                    }}
                    InputLabelProps={{
                      style: labelStyles,
                    }}
                    id="outlined-basic"
                    label="Team Name"
                    variant="filled"
                    value={teamName}
                    fullWidth
                    onChange={(e) => {
                      setTeamName(e.target.value);
                    }}
                    required
                  />
                </Grid>
              )}
              <Grid item xs={12} md={12} textAlign="center">
                <TextField
                  sx={{ input: { color: "white", backgroundColor: "#261428" } }}
                  InputLabelProps={{
                    style: labelStyles,
                  }}
                  id="outlined-basic"
                  label="Leader Name"
                  variant="filled"
                  fullWidth
                  value={leaderName}
                  onChange={(e) => {
                    setLeaderName(e.target.value);
                  }}
                  required
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  sx={{ input: { color: "white", backgroundColor: "#261428" } }}
                  InputLabelProps={{
                    style: labelStyles,
                  }}
                  type="number"
                  id="outlined-basic"
                  label="Leader Contact Details"
                  variant="filled"
                  fullWidth
                  value={leaderContact}
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 10);
                  }}
                  onChange={(e) => {
                    setLeaderContact(e.target.value);
                  }}
                  required
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  sx={{ input: { color: "white", backgroundColor: "#261428" } }}
                  InputLabelProps={{
                    style: labelStyles,
                  }}
                  type="email"
                  id="outlined-basic"
                  label="Leader College Email ID"
                  variant="filled"
                  fullWidth
                  value={leaderID}
                  onChange={(e) => {
                    setLeaderID(e.target.value);
                  }}
                  required
                />
              </Grid>
              {event.teamSize > 1 &&
                [...Array(event.teamSize - 1)].map((x, i) => (
                  <Grid item xs={12} md={12} key={i}>
                    <TextField
                      sx={{
                        input: { color: "white", backgroundColor: "#261428" },
                      }}
                      InputLabelProps={{
                        style: labelStyles,
                      }}
                      id="outlined-basic"
                      label={`Member ${i + 1} College ID`}
                      variant="filled"
                      fullWidth
                      name={`member${i + 1}`}
                      value={memberIDs[`member${i + 1}`] || ""}
                      onChange={handleMember}
                      required
                    />
                  </Grid>
                ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} textAlign="center">
            <div className={styles.register_btn_bg}>
              <button className={styles.register_btn} type="submit">
                Submit Registration
              </button>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default RegistrationForm;
