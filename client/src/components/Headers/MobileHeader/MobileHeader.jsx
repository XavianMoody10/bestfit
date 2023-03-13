import React from "react";
import styles from "./MobileHeader.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import logo from "../../../assets/logo.png";

export const MobileHeader = ({ open, handler }) => {
  return (
    <motion.header
      className={styles.mobileHeader}
      initial={{ y: "-100%" }}
      animate={{ y: open ? 0 : "-100%" }}
      transition={{ stiffness: 0 }}
    >
      <img src={logo} alt="logo" />

      <ul>
        <Link to={"/"} className={styles.link}>
          Home
        </Link>
        <Link to={"/shop"} className={styles.link}>
          Shop
        </Link>
        <Link to={"/about"} className={styles.link}>
          About
        </Link>
      </ul>

      <RxCross2
        className={styles.mobileCloseIcon}
        onClick={() => handler(false)}
      ></RxCross2>
    </motion.header>
  );
};
