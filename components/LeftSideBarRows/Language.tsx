import { useState } from "react";

interface props {
  selected: string;
}
// tour
// Type system
const Language: React.FC<props> = ({ selected }) => {
  const [open, setOpen] = useState(true);

  return (
    <li style={{ padding: "0.75rem 0" }} className="w-full cursor-pointer">
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
      <ul
        style={{ fontSize: "14px" }}
        className={`transition-all duration-500 flex flex-col ${
          !open ? "max-h-0 opacity-0" : "max-h-72 opacity-100"
        }`}
      >
        <li style={{ paddingTop: "0.75rem", paddingBottom: "0.25rem" }}>
          <a className={`${selected === "Tour" && "text-selectedText"}`}>
            Tour
          </a>
        </li>
        <li style={{ padding: "0.25rem 0" }}>
          <a>Type system</a>
        </li>
        <li style={{ padding: "0.25rem 0" }}>
          <a>Effective Dart</a>
        </li>
        <li style={{ padding: "0.25rem 0" }}>
          <a>Coming From ...</a>
        </li>
        <li style={{ padding: "0.25rem 0" }}>
          <a>Extenstion Methods</a>
        </li>
        <li style={{ padding: "0.25rem 0" }}>
          <a>Numbers</a>
        </li>
        <li style={{ padding: "0.25rem 0" }}>
          <a>Null safety</a>
        </li>
        <li style={{ padding: "0.25rem 0" }}>
          <a>Evolution</a>
        </li>
        <li style={{ padding: "0.25rem 0" }}>
          <a>Specification</a>
        </li>
      </ul>
    </li>
  );
};

export default Language;
