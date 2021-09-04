import { Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import SidePageMain from "../pages/SidePageMain";
import SidePageOne from "../pages/SidePageOne";
import SidePageTwo from "../pages/SidePageTwo";
import SidePageThree from "../pages/SidePageThree";
import SidePageFour from "../pages/SidePageFour";
import SidePageFive from "../pages/SidePageFive";
import SidePageSix from "../pages/SidePageSix";
import SidePageSeven from "../pages/SidePageSeven";
import SidePageEight from "../pages/SidePageEight";
import SidePageNine from "../pages/SidePageNine";
import SidePageTen from "../pages/SidePageTen";
import SidePageThirteen from "../pages/SidePageThirteen";
import SidePageFourteen from "../pages/SidePageFourteen";
import SidePageAllOne from "../pages/SidePageAllOne";
import SidePageAllTwo from "../pages/SidePageAllTwo";
import SidePageSolution from "../pages/SidePageSolution";
import classes from "./Layout.module.css";

// import SidePageEleven from "../pages/SidePageEleven";
// import SidePageTwelve from "../pages/SidePageTwelve";
function Layout() {
  return (
    <div className={classes.layout}>
      <div className={classes.nav}>
        <Navigation />
      </div>

      <div className={classes.main}>
        <Switch>
          <Route exact path="/">
            <SidePageMain />
          </Route>
          <Route exact path="/ulsan1">
            <SidePageOne />
          </Route>
          <Route exact path="/ulsan2">
            <SidePageTwo />
          </Route>
          <Route exact path="/yeosu1">
            <SidePageThree />
          </Route>
          <Route exact path="/yeosu2">
            <SidePageFour />
          </Route>
          <Route exact path="/onsan1">
            <SidePageFive />
          </Route>
          <Route exact path="/onsan2">
            <SidePageSix />
          </Route>
          <Route exact path="/namdong1">
            <SidePageSeven />
          </Route>
          <Route exact path="/namdong2">
            <SidePageEight />
          </Route>
          <Route exact path="/gumi1">
            <SidePageNine />
          </Route>
          <Route exact path="/gumi2">
            <SidePageTen />
          </Route>
          {/* <Route exact path="/pohang1">
            <SidePageEleven />
          </Route>
          <Route exact path="/pohang2">
            <SidePageTwelve />
          </Route> */}
          <Route exact path="/banweol1">
            <SidePageThirteen />
          </Route>
          <Route exact path="/banweol2">
            <SidePageFourteen />
          </Route>
          <Route exact path="/all1">
            <SidePageAllOne />
          </Route>
          <Route exact path="/all2">
            <SidePageAllTwo />
          </Route>
          <Route exact path="/solution">
            <SidePageSolution />
          </Route>
          
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
