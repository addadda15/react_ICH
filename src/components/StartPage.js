import { useState } from "react";
import Layout from "./Layout";
import img from '../image/backg.png'
import "./StartPage.css";

export default function StartPage() {
  const [openLayout, setOpenLayout] = useState(false);

  const hanlder = (e) => {
    setOpenLayout(true);
  };

  const backgroundImage = openLayout ? 'none' : img ;

  return (
    <div className="start-page" style={{backgroundImage}}>
      {!openLayout && <div class="button-1" onClick={hanlder}>
        <div class="eff-1"></div>
        <a> Start </a>
      </div>}
      {openLayout && <Layout />}
    </div>
  );
}
