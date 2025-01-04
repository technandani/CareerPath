import React, { useState } from "react";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("signup"); // 'signup' or 'signin'

  const toggleModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header>
        <div className="navLeft">
          <a href="/">
            <h1 className="logo">Career Path</h1>
          </a>
        </div>
        <div className="navRight">
          <div className="btns">
            <button className="btn logBtn" onClick={() => toggleModal("signin")}>
              Login In
            </button>
            <button className="btn" id="genBtn">
              <a href="#" onClick={() => toggleModal("signup")}>
                Request Demo
              </a>
            </button>
          </div>
        </div>
      </header>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-lg p-6 w-96 relative overflow-y-auto"
            style={{ maxHeight: "90vh", backgroundColor: "#001a2c" }}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            {modalType === "signup" ? (
              <SignUp onSwitch={() => setModalType("signin")} />
            ) : (
              <SignIn onSwitch={() => setModalType("signup")} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
