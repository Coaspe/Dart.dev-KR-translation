import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ExtensionMethodsSideBar = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.getElementById("toc")?.addEventListener("click", (v: any) => {
      let li = v.path[1] as any;
      if (li.tagName === "LI") {
        li = v.path[1] as HTMLLIElement;
        const tmp = document.getElementsByClassName("side_nav_active")[0];
        if (tmp) {
          tmp.classList.remove("side_nav_active");
        }
        li.classList.add("side_nav_active");
      }
    });
  }, []);

  return (
    <div
      ref={divRef}
      onMouseOver={() => {
        divRef.current && divRef.current.focus();
      }}
      id="site-toc--side"
      className="fixed hidden site-toc rightSide:block"
      style={{
        top: "50px",
      }}
    >
      <header style={{ color: "#4A4A4A", fontSize: "18px" }}>Contents</header>
      <ul id="toc" className="section-nav font-noto max-h-full">
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#overview">
            Overview
          </a>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link active" href="#using-extension-methods">
            Using extension methods
          </a>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#static-types-and-dynamic">
                Static types and dynamic
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#api-conflicts">
                API conflicts
              </a>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#implementing-extension-methods">
            Implementing extension methods
          </a>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#implementing-generic-extensions">
            Implementing generic extensions
          </a>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#resources">
            Resources
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ExtensionMethodsSideBar;
