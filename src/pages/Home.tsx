import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleHanlder: () => void = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggleHanlder} />
      <Navbar toggle={toggleHanlder} />
    </div>
  );
};

export default Home;
