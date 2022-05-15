import Ccode from "../Custom/Ccode";

const UPTWC = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="using-parameterized-types-with-constructors"
        className="font-noto text-primaryTitleTextColor"
      >
        생성자에 매개변수화된 타입 사용하기
      </h2>
      <p>
        생성자를 사용 할 때 하나 혹은 다수의 타입을 특정하고 싶다면, 타입을
        클래스 이름 다음의 <Ccode text="<...>" />
        (angle brackets) 안에 넣으세요.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">var</span>
            <span className="pln"> nameSet </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="kwd">Set</span>
            <span className="pun">&lt;</span>
            <span className="typ">String</span>
            <span className="pun">&gt;.</span>
            <span className="pln">from</span>
            <span className="pun">(</span>
            <span className="pln">names</span>
            <span className="pun">);</span>
          </pre>
        </div>
      </div>
      <p>다음 예제에서는 정수 키와 View 타입의 값을 가지는 map을 생성합니다.</p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">var</span>
            <span className="pln"> views </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="typ">Map</span>
            <span className="pun">&lt;</span>
            <span className="typ">int</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="typ">View</span>
            <span className="pun">&gt;();</span>
          </pre>
        </div>
      </div>
    </>
  );
};

export default UPTWC;
