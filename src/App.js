import React from "react";
import "./Assets/style.css";
// import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import About from "./Components/About";
import ServiceCard from "./Components/ServiceCard";
import Clients from "./Components/Clients";
import PortfolioCard from "./Components/PortfolioCard";
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <ServiceCard/>
      <Clients/>
      <PortfolioCard/>
      <Contactus/>
      <Footer/>
    </div>
  );
};

export default App;
