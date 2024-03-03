import React from "react";
import { BsTwitter } from "react-icons/bs";
import Button from "../ui/Button";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const isAuthenticated = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 z-20 w-full flex justify-center items-center p-4 bg-white shadow-md">
      <div className="w-screen px-3 md:px-5 2xl:w-[1440px] flex justify-between">
        {/* LEFT SECTION - LOGO */}
        <div className="flex gap-2 md:gap-4 items-center">
          <BsTwitter size={25} />
          <h3 className="font-bold text-sm md:text-xl">Twitter Clone</h3>
        </div>

        {/* RIGHT SECTION - BUTTONS */}
        <div className="flex gap-2 md:gap-4">
          <Button
            type={"button"}
            variation={"primary"}
            onClick={() => navigate("/")}
          >
            Home
          </Button>

          {isAuthenticated ? (
            <Button
              type={"button"}
              variation={"secondary"}
              onClick={() => handleLogout()}
            >
              Log Out
            </Button>
          ) : (
            <Button
              type={"button"}
              variation={"secondary"}
              onClick={() => navigate("/login")}
            >
              Log In
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
