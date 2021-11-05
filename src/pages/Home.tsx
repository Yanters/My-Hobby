import React, { useState } from "react";
import About from "../components/About/About";
import { data, data2 } from "../components/About/Data";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro/Intro";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleHanlder: () => void = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggleHanlder} />
      <Navbar toggle={toggleHanlder} />
      <Intro />
      <About {...data} />
      <About {...data2} />
      <Footer />
    </>
  );
};

export default Home;
