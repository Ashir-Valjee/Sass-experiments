// import "./home.modules.scss";

import Image from "next/image";
import myBackground from "@/../public/myBackground.png";
import "./_homeStyles.scss";
import styles from "./style.module.css";

export default function HomePage() {
  return (
    <div>
      <Image
        alt="background image"
        src={myBackground}
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.backgroundImage}
      />
      <div>
        {/* <NewNavbar /> */}
        <div className="homeContent">
          <h1 className="homeContent__title"> Home Page</h1>
          <p className="homeContent__text"> This is a week 10 project week.</p>
        </div>
      </div>
    </div>
  );
}
