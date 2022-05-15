import Ccode from "../Custom/Ccode";

const UsingClassMember = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="using-className=-members"
        className="font-noto text-primaryTitleTextColor"
      >
        클래스 멤버 사용하기
      </h2>
      <p>
        객체들은 함수와 데이터(각각 메서드, 인스턴스 변수)로 이루어진{" "}
        <span className="italic">멤버</span>를 가집니다. 메서드를 호출 할 때,
        객체에서 함수를 호출합니다: 메서드는 해당 객체의 함수와 데이터에 접근 할
        수 있습니다.
      </p>
      <p>
        (<Ccode text="." />
        )를 사용햐여 인스턴스 변수나, 함수를 사용합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> p </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">Point</span>
        <span className="pun">(</span>
        <span className="lit">2</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="pln"></span>
        <span className="com">&#47;&#47; Get the value of y.</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">p</span>
        <span className="pun">.</span>
        <span className="pln">y </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="pln"></span>
        <span className="com">&#47;&#47; Invoke distanceTo() on p.</span>
        <div />
        <span className="pln"></span>
        <span className="typ">double</span>
        <span className="pln"> distance </span>
        <span className="pun">=</span>
        <span className="pln"> p</span>
        <span className="pun">.</span>
        <span className="pln">distanceTo</span>
        <span className="pun">(</span>
        <span className="typ">Point</span>
        <span className="pun">(</span>
        <span className="lit">4</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">4</span>
        <span className="pun">));</span>
      </pre>
      <p>
        만약 왼쪽 피연산자가 null 일 수도 있다면, <Ccode text="." />
        대신 <Ccode text="?." />을 사용하세요.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="com">
          &#47;&#47; If p is non-null, set a variable equal to its y value.
        </span>
        <div />
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> a </span>
        <span className="pun">=</span>
        <span className="pln"> p</span>
        <span className="pun">?.</span>
        <span className="pln">y</span>
        <span className="pun">;</span>
      </pre>
    </>
  );
};

export default UsingClassMember;
