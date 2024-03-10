import {
  bounce,
  fadeIn,
  fadeOut,
  flipInX,
  flipInY,
  slideInLeft,
  slideInRight,
  slideInDown,
  slideInUp,
  fadeInDownBig,
  lightSpeedIn,
} from "react-animations";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  bounce: {
    animationName: bounce,
    animationDuration: "1s",
  },
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "1s",
  },
  fadeOut: {
    animationName: fadeOut,
    animationDuration: "1s",
  },
  flipInX: {
    animationName: flipInX,
    animationDuration: "1s",
  },
  flipInY: {
    animationName: flipInY,
    animationDuration: "1s",
  },
  slideInLeft: {
    animationName: slideInLeft,
    animationDuration: "0.5s",
  },
  slideInRight: {
    animationName: slideInRight,
    animationDuration: "0.5s",
  },
  slideInDown: {
    animationName: slideInDown,
    animationDuration: "0.5s",
  },
  slideInUp: {
    animationName: slideInUp,
    animationDuration: "0.5s",
  },
  fadeInDownBig: {
    animationName: fadeInDownBig,
    animationDuration: "0.5s",
  },
  lightSpeedIn: {
    animationName: lightSpeedIn,
    animationDuration: "1s",
  },
});

export { styles, css };
