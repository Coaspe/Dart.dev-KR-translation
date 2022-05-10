import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const IfAndElse = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="if-and-else"
        className="font-noto text-primaryTitleTextColor"
      >
        If and else
      </h2>
      <p>
        Dart는 <Ccode text="if" /> <Ccode text="else" /> 구문을 지원합니다.{" "}
        <CAnchor
          text="conditional expressions"
          href="https://dart.dev/guides/language/language-tour#conditional-expressions"
        />{" "}
        또한 참고하세요.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">isRaining</span>
        <span className="pun">())</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}you</span>
        <span className="pun">.</span>
        <span className="pln">bringRainCoat</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <span className="pun">&#125;</span>
        <span className="pln"> </span>
        <span className="kwd">else</span>
        <span className="pln"> </span>
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">isSnowing</span>
        <span className="pun">())</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}you</span>
        <span className="pun">.</span>
        <span className="pln">wearJacket</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <span className="pun">&#125;</span>
        <span className="pln"> </span>
        <span className="kwd">else</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}car</span>
        <span className="pun">.</span>
        <span className="pln">putTopDown</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <p>
        Javascript와 다르게 조건에는 무조건 boolean 값이 사용되어야 합니다.{" "}
        <CAnchor
          text="Booleans"
          href="https://dart.dev/guides/language/language-tour#booleans"
        />
        를 확인해보세요.
      </p>
    </>
  );
};

export default IfAndElse;
