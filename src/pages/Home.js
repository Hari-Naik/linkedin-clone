// import Cookies from 'js-cookie'
import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../components/Feed/Feed";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { setModal } from "../app/features/modalSlice";
import Modal from "../components/Modal/Modal";
import Widgets from "../components/Widgets/Widgets";
import { ToastContainer } from "react-toastify";

// import { useNavigate } from 'react-router-dom'

// [calc(100vh - 56px)]

function Home() {
  const modalOpen = useSelector(state => state.modal.modalOpen);

  const dispatch = useDispatch();
  //console.log(modalOpen)

  return (
    <div className="w-full h-[calc(100vh-48px)] md:h-screen overflow-hidden overflow-y-auto bg-[#f3f2ef]">
      <Header />
      <main className="md:h-max w-full flex flex-col items-center md:items-start md:justify-center md:flex-row gap-4 py-5">
        {/* sidebar */}
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
      <AnimatePresence>
        {modalOpen && <Modal handleClose={() => dispatch(setModal())} />}
      </AnimatePresence>
      <ToastContainer position="bottom-left" autoClose={false} />
    </div>
  );
}

export default Home;
