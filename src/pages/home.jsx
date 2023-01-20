import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg-[#2779A7]">
      <div className="grid h-screen relative">
        <Link to="/characters">
          <img
            src={logo}
            alt=""
            width="30%"
            height="30%"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]"
          />{" "}
          <div className="absolute w-full h-full bg-imgCharacters bg-cover grayscale brightness-50 cursor-pointer hover:grayscale-0 hover:scale-[1.25] transition-[.6s] duration-[.6s]"></div>
        </Link>
      </div>
    </main>
  );
}
