import Link from "next/link";
import "./_navstyles.scss";
import Hamburger from "@/../public/hamburger.svg";
import Image from "next/image";


export default function NewNavbar(){
    return(
        <div>
        <button className="menu-button">
            <Image src={Hamburger} alt="Hamburger" width={40} height={24}></Image>
        </button>
        <nav className="main-nav">
        <ul className="main-nav__list">
        <li className="main-nav__item"> <Link href="/" className="main-nav__link"> Home</Link> </li>
        <li className="main-nav__item"> <Link href="/" className="main-nav__link"> About</Link> </li>
        <li className="main-nav__item"> <Link href="/" className="main-nav__link">Shop</Link></li>
        
        
        
        </ul>
        </nav>
        </div>
    );
}