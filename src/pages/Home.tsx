import React, { useState } from "react";
import About from "../components/About/About";
import { data, data2, data3 } from "../components/About/Data";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro/Intro";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import ScrollToTop from "../components/ScrollToTop";
import Technology from "../components/Technology/Technology";
import Timers from "../components/Timers";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleHanlder: () => void = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <Timers />
      <Sidebar isOpen={isOpen} toggle={toggleHanlder} />
      <Navbar toggle={toggleHanlder} />
      <Intro />
      <About {...data} />
      <About {...data2} />
      <Technology />
      <About {...data3} />
      <Footer />
    </>
  );
};

export default Home;
