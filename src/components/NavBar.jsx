"use client";
import Link from "next/link";
import "./_topnav.scss";
import Image from "next/image";
import close from "@/../public/close.svg";
import open from "@/../public/hamburger.svg";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(true);
  function hamburger() {
    setShowMenu(!showMenu);
  }

  return (
    <nav>
      <span id="nav-label" hidden>
        Navigation
      </span>

      <button
        onClick={hamburger}
        id="btnOpen"
        className="topnav__open"
        aria-expanded="false"
        aria-labelledby="nav-label"
      >
        <Image src={open} alt="open" width={40} height={24} />
      </button>

      {showMenu ? (
        <div className="topnav__menu" aria-labelledby="nav-label">
          <button className="topnav__close">
            <Image src={close} alt="close" width={28} height={27} />
          </button>
          <ul className="topnav__links">
            <li className="topnav__item">
              <Link className="topnav__link" href="#">
                Nyancat
              </Link>
            </li>
            <li className="topnav__item">
              <Link className="topnav__link" href="#">
                Catra
              </Link>
            </li>
            <li className="topnav__item">
              <Link className="topnav__link" href="#">
                Garfield
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
}
