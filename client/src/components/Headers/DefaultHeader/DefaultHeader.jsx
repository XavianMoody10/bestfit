import React from "react";
import styles from "./DefaultHeader.module.css";
import { HiOutlineSearch } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

export const DefaultHeader = ({ handler }) => {
  return (
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
        <HiOutlineSearch onClick={() => handler(true)} />
        <BsPerson />
        <IoCartOutline />
      </div>

      <AiOutlineMenu
        className={styles.mobileIcon}
        onClick={() => handler(true)}
      />
    </header>
  );
};
