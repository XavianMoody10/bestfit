import React, { useState } from "react";
import styles from "./Home.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

export const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Mobile Header */}
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
          onClick={() => setOpen(false)}
        ></RxCross2>
      </motion.header>

      {/* Search Header */}
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
          onClick={() => setOpen(false)}
        ></RxCross2>
      </motion.header>

      {/* Default Header */}
      <header className={styles.header}>
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

        <img src={logo} alt="logo" />

        <div className={styles.icons}>
          <HiOutlineSearch onClick={() => setOpen(true)} />
          <BsPerson />
          <IoCartOutline />
        </div>

        <AiOutlineMenu
          className={styles.mobileIcon}
          onClick={() => setOpen(true)}
        />
      </header>
    </div>
  );
};
