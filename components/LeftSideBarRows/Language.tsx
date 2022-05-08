import { useState } from "react";
import Link from "next/link";

interface props {
  selected: string;
}
const Language: React.FC<props> = ({ selected }) => {
  const [open, setOpen] = useState(true);

  return (
    <ul>
      <li className="w-full cursor-pointer">
        <div
          onClick={() => {
            setOpen((origin) => !origin);
          }}
          className="flex items-center w-full justify-between font-roboto"
        >
          <span
            style={{
              fontSize: "18px",
              fontWeight: 400,
              fontFamily: "Roboto",
            }}
          >
            Language
          </span>
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </li>
      <ul
        style={{ fontSize: "14px" }}
        className={`transition-all duration-500 flex flex-col ${
          !open ? "max-h-0 opacity-0" : "max-h-72 opacity-100"
        }`}
      >
        <li style={{ paddingTop: "0rem", paddingBottom: "0.25rem" }}>
          <Link
            href="/language/tour"
            className={`${selected === "Tour" && "text-selectedText"}`}
          >
            Tour
          </Link>
        </li>
        {/* <li style={{ padding: "0.25rem 0" }}>
          <Link href="dum">Type system</Link>
        </li>
        <li style={{ padding: "0.25rem 0" }}>
          <Link href="dum">Effective Dart</Link>
        </li>
        <li style={{ padding: "0.25rem 0" }}>
          <Link href="dum">Coming From ...</Link>
        </li>
        <li style={{ padding: "0.25rem 0" }}>
          <Link href="dum">Extenstion Methods</Link>
        </li>
        <li style={{ padding: "0.25rem 0" }}>
          <Link href="dum">Numbers</Link>
        </li>
        <li style={{ padding: "0.25rem 0" }}>
          <Link href="dum">Null safety</Link>
        </li>
        <li style={{ padding: "0.25rem 0" }}>
          <Link href="dum">Evolution</Link>
        </li>
        <li style={{ padding: "0.25rem 0" }}>
          <Link href="dum">Specification</Link>
        </li> */}
      </ul>
    </ul>
  );
};

export default Language;
