import Image from "next/image";
import { useState } from "react";
import banner from "../public/white.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
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
        <ul
          style={{ marginRight: "20px" }}
          className="flex items-center space-x-3"
        >
          {/* <li>
          <Link href="/overview">Overview</Link>
        </li>
        <li>
          <Link href="/Docs">Docs</Link>
        </li>
        <li>
          <Link href="/Community">Community</Link>
        </li>
        <li>
          <Link href="/#try-dart">Try Dart</Link>
        </li>
        <li>
          <Link href="/overview">Overview</Link>
        </li>
        <li>
          <Link href="/overview">Overview</Link>
        </li> */}
        </ul>
      </header>
    </>
  );
};
export default Header;
