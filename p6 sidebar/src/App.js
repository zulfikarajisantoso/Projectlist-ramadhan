import { type } from "@testing-library/user-event/dist/type";
import { useState, useEffect } from "react";
import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log(isModalOpen);

  return (
    <div className="App">
      <Home openSidebar={openSidebar} openModal={openModal} />
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
