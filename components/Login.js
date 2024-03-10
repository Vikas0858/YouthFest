// import { Container } from "@mui/material";
// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardContent from "@mui/material/CardContent";
// import useToast from "/Hooks/useToast";
// import Grid from "@mui/material/Grid";
// import styles from "/styles/Login.module.css";
// import { signInWithPhoneNumber } from "firebase/auth";
// import { auth, generateCaptcha, resetCaptcha } from "/config/FirebaseConfig";

// function Login() {
//   const notify = useToast();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNum, setPhoneNum] = useState("");

//   const [otp, setOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otpResult, setOtpResult] = useState(null);
//   const handleSignup = (e) => {
//     e.preventDefault();
//     console.log(name, email, phoneNum);
//     if (name && email && phoneNum.length === 10) {
//       sendOTP();
//     } else {
//       notify("error", "Phone Number must be of exactly 10 digits");
//     }
//   };

//   const sendOTP = () => {
//     generateCaptcha();

//     signInWithPhoneNumber(auth, "+91" + phoneNum, window.recaptchaVerifier)
//       .then((confirmationResult) => {
//         setOtpResult(confirmationResult);
//         setOtpSent(true);
//       })
//       .catch((error) => {
//         console.error("som error", error);
//         setOtpResult(null);
//         // resetCaptcha();
//       });
//   };
//   const login = () => {
//     otpResult
//       .confirm(Number(otp))
//       .then((authUser) => {
//         console.log("Success. The user is created in Firebase", authUser);
//         setOtp(null);

//         // if (invalidOtp) {
//         //   setInvalidOtp(null);
//         // }
//         // props.closeModal();
//         // props.modalFunction();
//       })
//       .catch((error) => {
//         // setInvalidOtp(error);
//         console.error(error);
//       });

//     // if (!invalidOtp) {
//     //   props.modalFunction();
//     // }
//   };
//   return (
//     <>
//       <div id="recaptcha-container"></div>

//       <Container
//         sx={{
//           width: { md: "40vw", sm: "60vw", xs: "80vw" },
//         }}
//         className={styles.login_container}
//       >
//         {/* <Card>
//           <CardHeader
//             title="Sign Up"
//             titleTypographyProps={{ variant: "h6" }}
//           />
//           <CardContent> */}
//         <form onSubmit={handleSignup}>
//           <Grid container spacing={6}>
//             <Grid item xs={12} md={12}>
//               <TextField
//                 sx={{ input: { color: "white", backgroundColor: "black" } }}
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 id="outlined-basic"
//                 label="Name"
//                 variant="filled"
//                 value={name}
//                 onChange={(e) => {
//                   setName(e.target.value);
//                 }}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} md={12}>
//               <TextField
//                 id="outlined-basic"
//                 sx={{ input: { color: "white", backgroundColor: "black" } }}
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 label="Email"
//                 type="email"
//                 variant="outlined"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} md={12}>
//               {!otpSent && (
//                 <TextField
//                   id="outlined-basic"
//                   sx={{ input: { color: "white", backgroundColor: "black" } }}
//                   InputLabelProps={{
//                     style: { color: "white" },
//                   }}
//                   label="Phone Number"
//                   type="number"
//                   variant="outlined"
//                   value={phoneNum}
//                   onChange={(e) => {
//                     setPhoneNum(e.target.value);
//                   }}
//                   required
//                   inputProps={{ minLength: 12 }}
//                   onInput={(e) => {
//                     e.target.value = Math.max(0, parseInt(e.target.value))
//                       .toString()
//                       .slice(0, 10);
//                   }}
//                 />
//               )}
//             </Grid>
//             <Grid item xs={12} md={12}>
//               <Button variant="contained" type="submit">
//                 Send OTP
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//         {/* </CardContent>
//         </Card> */}
//         {/* <form onSubmit={handleSignup}>
//           <TextField
//             id="outlined-basic"
//             label="Name"
//             variant="outlined"
//             value={name}
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//           />
//           <TextField
//             id="outlined-basic"
//             label="Email"
//             type="email"
//             variant="outlined"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//           {!otpSent && (
//             <TextField
//               id="outlined-basic"
//               label="Phone Number"
//               type="tel"
//               variant="outlined"
//               value={phoneNum}
//               onChange={(e) => {
//                 setPhoneNum(e.target.value);
//               }}
//             />
//           )}
//           <Button variant="contained" onClick={sendOTP}>
//             sendOTP
//           </Button>

//           {otpSent && (
//             <TextField
//               id="outlined-basic"
//               label="OTP"
//               type="otp"
//               variant="outlined"
//               value={otp}
//               onChange={(e) => {
//                 setOtp(e.target.value);
//               }}
//             />
//           )}
//           <Button variant="contained" onClick={login}>
//             Login
//           </Button>
//         </form> */}
//       </Container>
//     </>
//   );
// }

// export default Login;
