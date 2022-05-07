import { MutableRefObject } from "react";

interface props {
  TourOfTheDartRef: MutableRefObject<HTMLHeadingElement>;
}
const TourRightSideBar: React.FC<props> = ({ TourOfTheDartRef }) => {
  return (
    <div
      className="fixed"
      style={{
        top: "122px",
        maxHeight: "704px",
        padding: "0px 20px 20px 30px",
        bottom: 0,
        minWidth: "226px",
        maxWidth: "246px",
        right: 0,
        overflowX: "hidden",
        overflowY: "auto",
        overflowWrap: "break-word",
        zIndex: 999,
      }}
    >
      <header style={{ color: "#4A4A4A", fontSize: "18px" }}>Contents</header>
      <ul id="toc" className="section-nav">
        <li className="toc-entry nav-item toc-h2">
          <a
            className="nav-link"
            href="#a-basic-dart-program"
            onClick={() => {
              TourOfTheDartRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            A basic Dart program
          </a>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#important-concepts">
            Important concepts
          </a>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#keywords">
            Keywords
          </a>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#variables">
            Variables
          </a>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#default-value">
                Default value
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#late-variables">
                Late variables
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#final-and-const">
                Final and const
              </a>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link active" href="#built-in-types">
            Built-in types
          </a>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#numbers">
                Numbers
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#strings">
                Strings
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#booleans">
                Booleans
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#lists">
                Lists
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#sets">
                Sets
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#maps">
                Maps
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a
                className="nav-link active"
                href="#runes-and-grapheme-clusters"
              >
                Runes and grapheme clusters
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#symbols">
                Symbols
              </a>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#functions">
            Functions
          </a>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#parameters">
                Parameters
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#the-main-function">
                The main() function
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#functions-as-first-class-objects">
                Functions as first-class objects
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#anonymous-functions">
                Anonymous functions
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#lexical-scope">
                Lexical scope
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#lexical-closures">
                Lexical closures
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#testing-functions-for-equality">
                Testing functions for equality
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#return-values">
                Return values
              </a>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#operators">
            Operators
          </a>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#arithmetic-operators">
                Arithmetic operators
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#equality-and-relational-operators">
                Equality and relational operators
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#type-test-operators">
                Type test operators
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#assignment-operators">
                Assignment operators
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#logical-operators">
                Logical operators
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#bitwise-and-shift-operators">
                Bitwise and shift operators
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#conditional-expressions">
                Conditional expressions
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#cascade-notation">
                Cascade notation
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#other-operators">
                Other operators
              </a>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#control-flow-statements">
            Control flow statements
          </a>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#if-and-else">
                If and else
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#for-loops">
                For loops
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#while-and-do-while">
                While and do-while
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#break-and-continue">
                Break and continue
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#switch-and-case">
                Switch and case
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#assert">
                Assert
              </a>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#exceptions">
            Exceptions
          </a>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#throw">
                Throw
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#catch">
                Catch
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#finally">
                Finally
              </a>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#classes">
            Classes
          </a>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#using-class-members">
                Using class members
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#using-constructors">
                Using constructors
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#getting-an-objects-type">
                Getting an object’s type
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#instance-variables">
                Instance variables
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#constructors">
                Constructors
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#methods">
                Methods
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#abstract-classes">
                Abstract classes
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#implicit-interfaces">
                Implicit interfaces
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#extending-a-class">
                Extending a class
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#extension-methods">
                Extension methods
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#enumerated-types">
                Enumerated types
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#adding-features-to-a-class-mixins">
                Adding features to a class: mixins
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#class-variables-and-methods">
                Class variables and methods
              </a>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#generics">
            Generics
          </a>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#why-use-generics">
                Why use generics?
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#using-collection-literals">
                Using collection literals
              </a>
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
              <a className="nav-link" href="#using-generic-methods">
                Using generic methods
              </a>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#libraries-and-visibility">
            Libraries and visibility
          </a>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#using-libraries">
                Using libraries
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#implementing-libraries">
                Implementing libraries
              </a>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#asynchrony-support">
            Asynchrony support
          </a>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#handling-futures">
                Handling Futures
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#declaring-async-functions">
                Declaring async functions
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#handling-streams">
                Handling Streams
              </a>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#generators">
            Generators
          </a>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#callable-classes">
            Callable classes
          </a>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#isolates">
            Isolates
          </a>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#typedefs">
            Typedefs
          </a>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#metadata">
            Metadata
          </a>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#comments">
            Comments
          </a>
          <ul className="nav">
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#single-line-comments">
                Single-line comments
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#multi-line-comments">
                Multi-line comments
              </a>
            </li>
            <li className="toc-entry nav-item toc-h3">
              <a className="nav-link" href="#documentation-comments">
                Documentation comments
              </a>
            </li>
          </ul>
        </li>
        <li className="toc-entry nav-item toc-h2">
          <a className="nav-link" href="#summary">
            Summary
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TourRightSideBar;
