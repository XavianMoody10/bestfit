import React from "react";
import styles from "./SearchHeader.module.css";
import { HiOutlineSearch } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import logo from "../../../assets/logo.png";

export const SearchHeader = ({ open, handler }) => {
  return (
    <motion.header
      className={styles.searchHeader}
      initial={{ y: "-100%" }}
      animate={{ y: open ? 0 : "-100%" }}
      transition={{ stiffness: 0 }}
    >
      <img src={logo} alt="logo" />

      <div className={styles.searchBar}>
        <input placeholder="Search Items" />
        <HiOutlineSearch className={styles.searchIcon} />
      </div>

      <RxCross2
        className={styles.searchCloseIcon}
        onClick={() => handler(false)}
      ></RxCross2>
    </motion.header>
  );
};
