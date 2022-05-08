import Link from "next/link";
import { useRef } from "react";

const TourRightSideBar = () => {
  const divRef = useRef<HTMLDivElement>(null);
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
          <Link className="nav-link" href="#a-basic-dart-program">
            Dart의 기본
          </Link>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link" href="#important-concepts">
            중요한 컨셉
          </Link>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link" href="#keywords">
            키워드
          </Link>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link" href="#variables">
            변수
          </Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#default-value">
                초기 값
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
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
                href="#functions-as-first-class-objects"
              >
                Functions as first-class objects
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
        {/* <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link" href="#operators">
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
              <Link className="nav-link" href="#cascade-notation">
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
          <Link className="nav-link" href="#control-flow-statements">
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
              <Link className="nav-link" href="#assert">
                Assert
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link" href="#exceptions">
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
              <Link className="nav-link" href="#finally">
                Finally
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link" href="#classes">
            Classes
          </Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#using-class-members">
                Using class members
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#using-constructors">
                Using constructors
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#getting-an-objects-type">
                Getting an object’s type
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#instance-variables">
                Instance variables
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#constructors">
                Constructors
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#methods">
                Methods
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#abstract-classes">
                Abstract classes
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#implicit-interfaces">
                Implicit interfaces
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#extending-a-class">
                Extending a class
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#extension-methods">
                Extension methods
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#enumerated-types">
                Enumerated types
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link
                className="nav-link"
                href="#adding-features-to-a-class-mixins"
              >
                Adding features to a class: mixins
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#class-variables-and-methods">
                Class variables and methods
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link" href="#generics">
            Generics
          </Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#why-use-generics">
                Why use generics?
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#using-collection-literals">
                Using collection literals
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link
                className="nav-link"
                href="#using-parameterized-types-with-constructors"
              >
                Using parameterized types with constructors
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link
                className="nav-link"
                href="#generic-collections-and-the-types-they-contain"
              >
                Generic collections and the types they contain
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link
                className="nav-link"
                href="#restricting-the-parameterized-type"
              >
                Restricting the parameterized type
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#using-generic-methods">
                Using generic methods
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link" href="#libraries-and-visibility">
            Libraries and visibility
          </Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#using-libraries">
                Using libraries
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#implementing-libraries">
                Implementing libraries
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link" href="#asynchrony-support">
            Asynchrony support
          </Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#handling-futures">
                Handling Futures
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#declaring-async-functions">
                Declaring async functions
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#handling-streams">
                Handling Streams
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link" href="#generators">
            Generators
          </Link>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link" href="#callable-classes">
            Callable classes
          </Link>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link" href="#isolates">
            Isolates
          </Link>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link" href="#typedefs">
            Typedefs
          </Link>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link" href="#metadata">
            Metadata
          </Link>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link" href="#comments">
            Comments
          </Link>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#single-line-comments">
                Single-line comments
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#multi-line-comments">
                Multi-line comments
              </Link>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <Link className="nav-link" href="#documentation-comments">
                Documentation comments
              </Link>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <Link className="nav-link" href="#summary">
            Summary
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default TourRightSideBar;
