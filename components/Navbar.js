// import React, { useContext } from "react";

// import Image from "next/image";
// import Link from "next/link";

// import styles from "/styles/Navbar.module.css";
// import CreateEvent from "./events/CreateEvent";
// import DrawerAppBar from "./DrawerAppBar";

// import ModalContext from "../context/ModalContext";
// import { useAuth } from "/context/AuthContext";

// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// // import MenuIcon from "@mui/icons-material/MenuIcon";
// import { FaBars } from "react-icons/fa";
// import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";

// import YFNavicon from "../public/events/yf_nav_icon.svg";

// const drawerWidth = 240;
// const navItems = ["Home", "Events", "About", "Help"];

// function Navbar(props) {
//   const { isAdmin } = useAuth();
//   const { openModal, closeModal } = useContext(ModalContext);
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: "center" }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;
//   return (
//     <div className={styles.navbar_container}>
//       <Grid container spacing={6} alignItems="center">
//         <Grid item xs={4} md={4} textAlign="center">
//           <Link href="/" passHref>
//             <Image src={YFNavicon} height={60} width={130} />
//           </Link>
//         </Grid>
//         <Grid item xs={8} md={8}>
//           {/* <AppBar component="nav"> */}
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ mr: 2, display: { sm: "none" } }}
//             >
//               {/* <MenuIcon /> */}
//               <FaBars />
//             </IconButton>
//             <Box sx={{ display: { xs: "none", sm: "block" } }}>
//               <Grid container spacing={6}>
//                 <Grid item xs={6} md={6}>
//                   <Grid container spacing={6}>
//                     <Grid item xs={12} sm={3} md={3} textAlign="center">
//                       <Link href="/" passHref className={styles.nav_item}>
//                         Home
//                       </Link>
//                     </Grid>
//                     <Grid item xs={12} sm={3} md={3} textAlign="center">
//                       <Link href="/events" passHref className={styles.nav_item}>
//                         Events
//                       </Link>
//                     </Grid>
//                     <Grid item xs={12} sm={3} md={3} textAlign="center">
//                       <Link href="/teams" passHref className={styles.nav_item}>
//                         About
//                       </Link>
//                     </Grid>
//                     <Grid item xs={12} sm={3} md={3} textAlign="center">
//                       <Link href="/Help" passHref className={styles.nav_item}>
//                         Help
//                       </Link>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//                 <Grid item xs={6} md={6}>
//                   <button className={styles.login_btn}>Login</button>
//                   {isAdmin && (
//                     <div
//                       style={{
//                         position: "absolute",
//                         cursor: "pointer",
//                         top: "6%",
//                       }}
//                       onClick={() =>
//                         openModal(
//                           <CreateEvent
//                             closeModal={closeModal}
//                             initData={null}
//                           />
//                         )
//                       }
//                     >
//                       Create Event
//                     </div>
//                   )}
//                 </Grid>
//               </Grid>
//             </Box>
//           </Toolbar>
//           {/* </AppBar> */}
//           <Box component="nav">
//             <Drawer
//               container={container}
//               variant="temporary"
//               open={mobileOpen}
//               onClose={handleDrawerToggle}
//               ModalProps={{
//                 keepMounted: true, // Better open performance on mobile.
//               }}
//               sx={{
//                 display: { xs: "block", sm: "none" },
//                 "& .MuiDrawer-paper": {
//                   boxSizing: "border-box",
//                   width: drawerWidth,
//                 },
//               }}
//             >
//               {drawer}
//             </Drawer>
//           </Box>
//         </Grid>
//         {/* <Grid item xs={12} md={4} textAlign="center">
//           <Grid container spacing={6}>
//             <Grid item xs={12} md={3} textAlign="center">
//               <Link href="/" passHref className={styles.nav_item}>
//                 Home
//               </Link>
//             </Grid>
//             <Grid item xs={12} md={3} textAlign="center">
//               <Link href="/events" passHref className={styles.nav_item}>
//                 Events
//               </Link>
//             </Grid>
//             <Grid item xs={12} md={3} textAlign="center">
//               <Link href="/teams" passHref className={styles.nav_item}>
//                 About
//               </Link>
//             </Grid>
//             <Grid item xs={12} md={3} textAlign="center">
//               <Link href="/Help" passHref className={styles.nav_item}>
//                 Help
//               </Link>
//             </Grid>
//           </Grid>
//         </Grid> */}

//         {/* <Grid item xs={12} md={4} textAlign="center">
//           <Button variant="contained">Login</Button>
//           <button className={styles.login_btn}>Login</button>
//           <button id="login-button">Login</button>
//           {isAdmin && (
//             <div
//               style={{ position: "absolute", cursor: "pointer", top: "6%" }}
//               onClick={() =>
//                 openModal(
//                   <CreateEvent closeModal={closeModal} initData={null} />
//                 )
//               }
//             >
//               Create Event
//             </div>
//           )}
//         </Grid> */}
//       </Grid>
//     </div>
//   );
// }

// export default Navbar;
