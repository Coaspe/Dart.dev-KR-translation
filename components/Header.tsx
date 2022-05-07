import Image from "next/image";
import banner from "../public/white.svg";
import Link from "next/link";
import { useState } from "react";
const Header = () => {
  return (
    <header
      className={`w-full h-header items-center bg-header flex justify-between sticky top-0 z-10`}
    >
      <a
        style={{ marginLeft: "20px", marginRight: "20px" }}
        className="flex items-center"
        title="Dart"
      >
        <Image src={banner} alt="Dart" />
      </a>
      {/* <ul>
        <li>
          <a href="/overview">Overview</a>
        </li>
        <li>
          <a href="/Docs">Docs</a>
        </li>
        <li>
          <a href="/Community">Community</a>
        </li>
        <li>
          <a href="/#try-dart">Try Dart</a>
        </li>
        <li>
          <a href="/overview">Overview</a>
        </li>
        <li>
          <a href="/overview">Overview</a>
        </li>
      </ul> */}
    </header>
  );
};
export default Header;
