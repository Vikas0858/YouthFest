import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import styles from "/styles/Events/RegistrationForm.module.css";
import EventContext from "/context/EventContext";
import { useAuth } from "/context/AuthContext";
import useToast from "/Hooks/useToast";
import LoaderContext from "../context/LoaderContext";

const labelStyles = {
  fontFamily: "Proxima Nova",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "18px",
  lineHeight: "18px",
  color: "#FFFFFF",
};

function CoinPopup({ closeModal }) {
  const [amount, setAmount] = useState();
  const { fetchMyCoins } = useContext(EventContext);
  const { setIsLoading } = useContext(LoaderContext);

  const { currentUser } = useAuth();
  const notify = useToast();

  const { makePayment } = useContext(EventContext);
  const handleSubmitReg = async (e) => {
    e.preventDefault();

    if (amount >= 10) {
      const addCoinCallback = async () => {
        setIsLoading(true);
        const res = await fetch("/api/addCredits", {
          method: "POST",
          headers: {
            Authorization: currentUser.accessToken,
          },
          body: JSON.stringify({
            email: currentUser.email,
            credits: amount,
          }),
        });
        const resjson = await res.json();
        if (resjson.status === "success") {
          fetchMyCoins();
          setIsLoading(false);
          notify("success", resjson.message);

          closeModal();
        } else {
          setIsLoading(false);
          notify("error", resjson.message);
        }
      };

      makePayment(
        amount,
        currentUser.email,
        currentUser.displayName,
        addCoinCallback
      );
      //   addCoinCallback();
      //   registerInEvent(event.eventID, event.price, event.name, teamDetails);
      //   closeModal();
    } else {
      notify("error", "Minimum amount of coins should be 10");
    }
  };
  return (
    <div className={styles.registerForm}>
      <form onSubmit={handleSubmitReg}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={12}>
            <p className={styles.regForm_heading}>Add Coins</p>
          </Grid>
          <Grid item xs={12} md={12}>
            <p className={styles.regForm_heading}> ₹ 1 = 1 coin </p>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={12} textAlign="center">
                <TextField
                  sx={{ input: { color: "white", backgroundColor: "#261428" } }}
                  InputLabelProps={{
                    style: labelStyles,
                  }}
                  id="outlined-basic"
                  label="Enter Amount of Coins"
                  variant="filled"
                  fullWidth
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  required
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} textAlign="center">
            <div className={styles.register_btn_bg}>
              <button className={styles.register_btn} type="submit">
                Add Coins
              </button>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default CoinPopup;
