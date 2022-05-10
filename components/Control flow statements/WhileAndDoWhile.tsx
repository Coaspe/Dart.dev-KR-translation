import Ccode from "../Custom/Ccode";

const WhileAndDoWhile = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="while-and-do-while"
        className="font-noto text-primaryTitleTextColor"
      >
        While, do-while
      </h2>
      <p>
        <Ccode text="while" /> loop는 loop을 돌기 전에 조건을 따져봅니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">while</span>
        <span className="pln"> </span>
        <span className="pun">(!</span>
        <span className="pln">isDone</span>
        <span className="pun">())</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}doSomething</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <div />
        <span className="pun">&#125;</span>
      </pre>
      <p>
        <Ccode text="do-while" /> llop는 loop를 돈 후에 조건을 따집니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">do</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}printLine</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
        <span className="pln"> </span>
        <span className="kwd">while</span>
        <span className="pln"> </span>
        <span className="pun">(!</span>
        <span className="pln">atEndOfPage</span>
        <span className="pun">());</span>
      </pre>
    </>
  );
};

export default WhileAndDoWhile;
