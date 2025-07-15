import React from "react";
import logo from "../assets/categories/logo--quizzer.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartSimple,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { UserButton, SignedIn, SignedOut} from "@clerk/clerk-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();
  
  return (
    <header
      className="min-h-[8vh] px-[10rem] xl:px-[15rem] flex items-center"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <nav className="flex-1 flex items-center justify-between">
        <a
          className="flex items-center gap-2"
          href="/"
          style={{ color: "#60a8eb", textAlign: "center" }}
        >
          <img src={logo} alt="logo" width={50} height={50} />
          <h1 className="text-3xl font-bold text-blue-400">Kwizi</h1>
        </a>
        <div className="flex items-center gap-8 mx-20 ">
          <a
            href="/"
            className={`py-2 px-2 flex items-center gap-2 text-lg leading-none text-blue-400 rounded-lg ${
              pathName === "/" ? " text-blue-400 border-2 border-blue-400" : ""
            }
                  `}
          >
            <span>
              <FontAwesomeIcon icon={faHouse} />
            </span>
            <span>Home</span>
          </a>
          <Link
            to="/mystats"
            className={`py-2 px-2 flex items-center gap-2 text-lg leading-none text-blue-400 rounded-lg ${
              pathName === "/mystats"
                ? " text-blue-400 border-2 border-blue-400"
                : ""
            }
                  `}
          >
            <span>
              <FontAwesomeIcon icon={faChartSimple} />
            </span>
            <span>My Stats</span>
          </Link>
        </div>

        <div>
          <SignedIn>
            <UserButton />
            
          </SignedIn>
          <SignedOut>
            <Button
              className="py-5 bg-blue-400 flex items-center gap-2 text-white text-lg rounded-lg
            hover:bg-blue-500/90 cursor-pointer"
              onClick={() => navigate("/sign-in")}
            >
              <FontAwesomeIcon icon={faRightToBracket} />Login
            </Button>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
