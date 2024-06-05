"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./authLinks.module.css";

function AuthLinks() {
  const status = true;
  const [open, setOpen] = useState(false);
  return (
    <>
      {status == true ? (
        <>
          <Link href={"/write"} className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      ) : (
        <Link href={"/login"} className={styles.link}>
          Login
        </Link>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
          {status == true ? (
            <>
              <Link href={"/write"}>
                Write
              </Link>
              <span>Logout</span>
            </>
          ) : (
            <Link href={"/login"}>
              Login
            </Link>
          )}
        </div>
      )}
    </>
  );
}
export default AuthLinks;
