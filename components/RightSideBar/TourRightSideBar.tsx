import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const TourRightSideBar = () => {
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
        <li className="toc-entry nav-item toc-h2 a-basic-dart-program">
          <Link className="nav-link" href="#a-basic-dart-program">
            Dart의 기본
          </Link>
        </li>
        <li className="toc-entry nav-item toc-h2 important-concepts">
          <Link className="nav-link" href="#important-concepts">
            중요한 컨셉
          </Link>
        </li>
        <li className="toc-entry nav-item toc-h2 keywords">
          <Link className="nav-link" href="#keywords">
            키워드
          </Link>
        </li>
        <li className="toc-entry nav-item toc-h2 variables">
          <Link className="nav-link" href="#variables">
            변수
          </Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3 default-value">
              <Link className="nav-link" href="#default-value">
                초기 값
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3 late-variables">
              <Link className="nav-link" href="#late-variables">
                Late 변수
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#final-and-const">
                Final 과 const
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link active" href="#built-in-types">
            Built-in types
          </Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#numbers">
                Numbers
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#strings">
                Strings
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#booleans">
                Booleans
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#lists">
                Lists
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#sets">
                Sets
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#maps">
                Maps
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link
                className="nav-link active"
                href="#runes-and-grapheme-clusters"
              >
                Runes and grapheme clusters
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#symbols">
                Symbols
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link" href="#functions">
            Functions
          </Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#parameters">
                Parameters
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#the-main-function">
                The main() function
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link
                className="nav-link"
                href="#functions-as-first-className=-objects"
              >
                Functions as first-className= objects
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#anonymous-functions">
                Anonymous functions
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#lexical-scope">
                Lexical scope
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#lexical-closures">
                Lexical closures
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#testing-functions-for-equality">
                Testing functions for equality
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#return-values">
                Return values
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link active" href="#operators">
            Operators
          </Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#arithmetic-operators">
                Arithmetic operators
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link
                className="nav-link"
                href="#equality-and-relational-operators"
              >
                Equality and relational operators
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#type-test-operators">
                Type test operators
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#assignment-operators">
                Assignment operators
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#logical-operators">
                Logical operators
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#bitwise-and-shift-operators">
                Bitwise and shift operators
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#conditional-expressions">
                Conditional expressions
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link active" href="#cascade-notation">
                Cascade notation
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#other-operators">
                Other operators
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link active" href="#control-flow-statements">
            Control flow statements
          </Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#if-and-else">
                If and else
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#for-loops">
                For loops
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#while-and-do-while">
                While and do-while
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#break-and-continue">
                Break and continue
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#switch-and-case">
                Switch and case
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link active" href="#assert">
                Assert
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link active" href="#exceptions">
            Exceptions
          </Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#throw">
                Throw
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#catch">
                Catch
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link active" href="#finally">
                Finally
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a href="#classes">Classes</a>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <a href="#using-class-members">Using class members</a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a href="#using-constructors">Using constructors</a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a href="#getting-an-objects-type">Getting an object’s type</a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a href="#instance-variables">Instance variables</a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a href="#constructors">Constructors</a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a href="#methods">Methods</a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a href="#abstract-classes">Abstract classes</a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a href="#implicit-interfaces">Implicit interfaces</a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a href="#extending-a-class">Extending a class</a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a href="#extension-methods">Extension methods</a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a href="#enumerated-types">Enumerated types</a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a href="#adding-features-to-a-class-mixins">
                Adding features to a class: mixins
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a href="#class-variables-and-methods">
                Class variables and methods
              </a>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a href="#generics">Generics</a>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <a href="#why-use-generics">Why use generics?</a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a href="#using-collection-literals">Using collection literals</a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a
                className="nav-link"
                href="#using-parameterized-types-with-constructors"
              >
                Using parameterized types with constructors
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a
                className="nav-link"
                href="#generic-collections-and-the-types-they-contain"
              >
                Generic collections and the types they contain
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a
                className="nav-link"
                href="#restricting-the-parameterized-type"
              >
                Restricting the parameterized type
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a href="#using-generic-methods">Using generic methods</a>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a href="#libraries-and-visibility">Libraries and visibility</a>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <a href="#using-libraries">Using libraries</a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a href="#implementing-libraries">Implementing libraries</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default TourRightSideBar;
