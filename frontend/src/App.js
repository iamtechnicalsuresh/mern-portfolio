import { useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import SideNavbar from "./components/SideNavbar";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import ContactViewPage from "./pages/ContactViewPage";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const navCloseRef = useRef(null);

  const navClose = (e) => {
    if (navCloseRef.current !== e.target) {
      setToggle(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Router>
        <ToggleStyle onClick={() => setToggle(!toggle)}>
          <i className={toggle ? "fas fa-times" : "fas fa-bars"} />
        </ToggleStyle>
        <SideNavbar toggle={toggle} refs={navCloseRef} />
        <Container onClick={navClose}>
          <Switch>
            <Route path="/admin/contact" component={ContactViewPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/resume" component={ResumePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/" component={HomePage} exact />
          </Switch>
          <ToastContainer position="top-center" />
        </Container>
      </Router>
    </>
  );
};

const Container = styled.section`
  min-height: 100vh;
  margin-left: 16rem;

  @media screen and (max-width: 700px) {
    margin-left: 0;
  }
`;

const ToggleStyle = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  z-index: 10;
  display: none;

  i {
    font-size: 1.5rem;
    color: var(--white-color);
    padding: 0.4rem;
    border: solid 2px black;
  }
  @media screen and (max-width: 700px) {
    display: block;
  }
`;
export default App;
