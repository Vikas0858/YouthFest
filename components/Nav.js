import React, { useContext, useEffect, useState } from "react";
import styles from "/styles/Navbar.module.css";
import CreateEvent from "./events/CreateEvent";
import Image from "next/image";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import { FaBars } from "react-icons/fa";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import ModalContext from "../context/ModalContext";
import { useAuth } from "/context/AuthContext";
import EventContext from "../context/EventContext";
import yflogo from "../public/yf2024.png";

const drawerWidth = 240;

export default function Nav(props) {
  const { isAdmin, currentUser, signUp, logout, idToken } = useAuth();
  const { makePayment } = useContext(EventContext);

  const { openModal, closeModal } = useContext(ModalContext);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // useEffect(() => {
  //   (async () => {
  //     const cookies = parseCookies();
  //     const coins = await apiCall(
  //       "/api/getCredits?email=" + cookies.email,
  //       "GET",
  //       {},
  //       cookies.token
  //     );
  //     // console.log(cookies);
  //     if (coins.status === 200) {
  //       setUserCoins(coins.data.message);
  //       console.log(coins);
  //     }
  //   })();
  // }, []);

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", marginTop: "30px" }}
    >
      <List>
        <Link href="/" passHref className={styles.nav_item}>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/events" passHref className={styles.nav_item}>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Events"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/teams" passHref className={styles.nav_item}>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Teams"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/Help" passHref className={styles.nav_item}>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Help"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <button
              className={styles.login_btn}
              style={{ margin: "auto" }}
              onClick={() => {
                if (currentUser) {
                  logout();
                } else {
                  signUp();
                }
              }}
            >
              {currentUser ? "Logout" : "Login"}
            </button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div className={styles.navbar_container}>
      {/* <h1>{"hell"+isAdmin}</h1> */}
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={6} sm={4} md={4} textAlign="center">
          <Link href="/" passHref>
            <Image src={yflogo} height={120} width={140} />
          </Link>
        </Grid>
        <Grid item md={8} sm={8} xs={6} textAlign="center">
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={6} sm={6} md={6}>
                <Grid container spacing={6}>
                  <Grid item xs={12} sm={3} md={3} textAlign="center">
                    <Link href="/" passHref className={styles.nav_item}>
                      Home
                    </Link>
                  </Grid>
                  <Grid item xs={12} sm={3} md={3} textAlign="center">
                    <Link href="/events" passHref className={styles.nav_item}>
                      Events
                    </Link>
                  </Grid>
                  <Grid item xs={12} sm={3} md={3} textAlign="center">
                    <Link href="/teams" passHref className={styles.nav_item}>
                      Teams
                    </Link>
                  </Grid>
                  <Grid item xs={12} sm={3} md={3} textAlign="center">
                    <Link href="/Help" passHref className={styles.nav_item}>
                      Help
                    </Link>
                  </Grid>
                </Grid>
              </Grid>

              {/* <Grid item xs={6} sm={6} md={4} textAlign="center"> */}

              {/* </Grid> */}
              <Grid item xs={6} sm={6} md={6} textAlign="center">
                {currentUser && (
                  <div>
                    <p style={{ color: "white", margin: 0 }}>
                      Hello, {currentUser.email}
                    </p>
                  </div>
                )}
                <button
                  className={styles.login_btn}
                  onClick={() => {
                    if (currentUser) {
                      logout();
                    } else {
                      signUp();
                    }
                  }}
                >
                  {currentUser ? "Logout" : "Login"}
                </button>
                {isAdmin && (
                  <div
                    style={{
                      position: "absolute",
                      cursor: "pointer",
                      top: "6%",
                    }}
                    onClick={() =>
                      openModal(
                        <CreateEvent closeModal={closeModal} initData={null} />
                      )
                    }
                  >
                    Create Event
                  </div>
                )}
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <FaBars />
            </IconButton>
            <Drawer
              anchor="right"
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  backgroundColor: "#03020a;",
                  opacity: 0.8,
                  color: "whitesmoke",
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
