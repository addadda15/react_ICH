import { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

function Navigation() {
  const [firstMenuOpen, setFirstMenuOpen] = useState(false);
  const [secondMenuOpen, setSecondMenuOpen] = useState(false);
  const [thirdMenuOpen, setThirdMenuOpen] = useState(false);
  const [fourthMenuOpen, setFourthMenuOpen] = useState(false);
  const [fifthMenuOpen, setFifthMenuOpen] = useState(false);
  // const [sixthMenuOpen, setSixthMenuOpen] = useState(false);
  const [seventhMenuOpen, setSeventhMenuOpen] = useState(false);
  const [mainMenuOpen, setMainMenuOpen] = useState(false);

  function MainMenuOpenHandler() {
    setMainMenuOpen((prevState) => !prevState);
    setFirstMenuOpen(false);
    setSecondMenuOpen(false);
    setThirdMenuOpen(false);
    setFourthMenuOpen(false);
    setFifthMenuOpen(false);
    // setSixthMenuOpen(false);
    setSeventhMenuOpen(false);
  }

  function FirstMenuOpenHandler() {
    setFirstMenuOpen((prevState) => !prevState);
    setSecondMenuOpen(false);
    setThirdMenuOpen(false);
    setFourthMenuOpen(false);
    setFifthMenuOpen(false);
    // setSixthMenuOpen(false);
    setSeventhMenuOpen(false);
    setMainMenuOpen(false);
  }

  function SecondMenuOpenHandler() {
    setSecondMenuOpen((prevState) => !prevState);
    setFirstMenuOpen(false);
    setThirdMenuOpen(false);
    setFourthMenuOpen(false);
    setFifthMenuOpen(false);
    // setSixthMenuOpen(false);
    setSeventhMenuOpen(false);
    setMainMenuOpen(false);
  }
  function ThirdMenuOpenHandler() {
    setThirdMenuOpen((prevState) => !prevState);
    setSecondMenuOpen(false);
    setFirstMenuOpen(false);
    setFourthMenuOpen(false);
    setFifthMenuOpen(false);
    // setSixthMenuOpen(false);
    setSeventhMenuOpen(false);
    setMainMenuOpen(false);
  }
  function FourthMenuOpenHandler() {
    setFourthMenuOpen((prevState) => !prevState);
    setSecondMenuOpen(false);
    setThirdMenuOpen(false);
    setFirstMenuOpen(false);
    setFifthMenuOpen(false);
    // setSixthMenuOpen(false);
    setSeventhMenuOpen(false);
    setMainMenuOpen(false);
  }
  function FifthMenuOpenHandler() {
    setFifthMenuOpen((prevState) => !prevState);
    setSecondMenuOpen(false);
    setThirdMenuOpen(false);
    setFourthMenuOpen(false);
    setFirstMenuOpen(false);
    // setSixthMenuOpen(false);
    setSeventhMenuOpen(false);
    setMainMenuOpen(false);
  }
  // function SixthMenuOpenHandler() {
  //   setSixthMenuOpen((prevState) => !prevState);
  //   setSecondMenuOpen(false);
  //   setThirdMenuOpen(false);
  //   setFourthMenuOpen(false);
  //   setFifthMenuOpen(false);
  //   setFirstMenuOpen(false);
  //   setSeventhMenuOpen(false);
  //   setMainMenuOpen(false);
  // }
  function SeventhMenuOpenHandler() {
    setSeventhMenuOpen((prevState) => !prevState);
    setSecondMenuOpen(false);
    setThirdMenuOpen(false);
    setFourthMenuOpen(false);
    setFifthMenuOpen(false);
    // setSixthMenuOpen(false);
    setFirstMenuOpen(false);
    setMainMenuOpen(false);
  }

  return (
    <div className={classes.nav}>
      <Link to="/" className={classes.mainItem}>
        HOME
      </Link>
      <nav className={classes.item} onClick={MainMenuOpenHandler}>
        <div>???????????????</div>
        {mainMenuOpen ? <BiUpArrow /> : <BiDownArrow />}
      </nav>
      {mainMenuOpen && (
        <div className={classes.sideNav}>
          <Link to="/all1" className={classes.sideItem}>
            ????????????
          </Link>
          <Link to="/all2" className={classes.sideItem}>
            ??????
          </Link>
        </div>
      )}
      <nav className={classes.item} onClick={FirstMenuOpenHandler}>
        <div>????????????</div>
        {firstMenuOpen ? <BiUpArrow /> : <BiDownArrow />}
      </nav>
      {firstMenuOpen && (
        <div className={classes.sideNav}>
          <Link to="/ulsan1" className={classes.sideItem}>
            ????????????
          </Link>
          <Link to="/ulsan2" className={classes.sideItem}>
            ??????
          </Link>
        </div>
      )}
      <nav className={classes.item} onClick={SecondMenuOpenHandler}>
        <div>??????</div>
        {secondMenuOpen ? <BiUpArrow /> : <BiDownArrow />}
      </nav>
      {secondMenuOpen && (
        <div className={classes.sideNav}>
          <Link to="/yeosu1" className={classes.sideItem}>
            ????????????
          </Link>
          <Link to="/yeosu2" className={classes.sideItem}>
            ??????
          </Link>
        </div>
      )}
      <nav className={classes.item} onClick={ThirdMenuOpenHandler}>
        <div>??????</div>
        {thirdMenuOpen ? <BiUpArrow /> : <BiDownArrow />}
      </nav>
      {thirdMenuOpen && (
        <div className={classes.sideNav}>
          <Link to="/onsan1" className={classes.sideItem}>
            ????????????
          </Link>
          <Link to="/onsan2" className={classes.sideItem}>
            ??????
          </Link>
        </div>
      )}
      <nav className={classes.item} onClick={FourthMenuOpenHandler}>
        <div>??????</div>
        {fourthMenuOpen ? <BiUpArrow /> : <BiDownArrow />}
      </nav>
      {fourthMenuOpen && (
        <div className={classes.sideNav}>
          <Link to="/namdong1" className={classes.sideItem}>
            ????????????
          </Link>
          <Link to="/namdong2" className={classes.sideItem}>
            ??????
          </Link>
        </div>
      )}
      <nav className={classes.item} onClick={FifthMenuOpenHandler}>
        <div>??????</div>
        {fifthMenuOpen ? <BiUpArrow /> : <BiDownArrow />}
      </nav>
      {fifthMenuOpen && (
        <div className={classes.sideNav}>
          <Link to="/gumi1" className={classes.sideItem}>
            ????????????
          </Link>
          <Link to="/gumi2" className={classes.sideItem}>
            ??????
          </Link>
        </div>
      )}
      {/* <nav className={classes.item} onClick={SixthMenuOpenHandler}>
        <div>??????</div>
        {sixthMenuOpen ? <BiUpArrow /> : <BiDownArrow />}
      </nav>
      {sixthMenuOpen && (
        <div className={classes.sideNav}>
          <Link to="/pohang1" className={classes.sideItem}>
            ????????????
          </Link>
          <Link to="/pohang2" className={classes.sideItem}>
            ??????
          </Link>
        </div>
      )} */}
      <nav className={classes.item} onClick={SeventhMenuOpenHandler}>
        <div>??????</div>
        {seventhMenuOpen ? <BiUpArrow /> : <BiDownArrow />}
      </nav>
      {seventhMenuOpen && (
        <div className={classes.sideNav}>
          <Link to="/banweol1" className={classes.sideItem}>
            ????????????
          </Link>
          <Link to="/banweol2" className={classes.sideItem}>
            ??????
          </Link>
        </div>
      )}
      <Link to="/solution" className={classes.minitem}>
        Solution
      </Link>
      {/* <nav className={classes.minitem}>??????</nav> */}
    </div>
  );
}

export default Navigation;
