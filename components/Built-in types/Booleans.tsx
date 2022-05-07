import Ccode from "../Custom/Ccode";

const Booleans = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        className="font-noto text-primaryTitleTextColor"
      >
        Booleans
      </h2>
      <p>
        Boolean 값을 표현하기 위해 Dart는 <Ccode text="bool" /> 타입을 가지고
        있습니다. Boolean 리터럴인 <Ccode text="true" />과{" "}
        <Ccode text="false" />, 오직 이 두개의 객체만이 bool 타입을 가집니다.
      </p>
      <p>
        Dart의 type safety는 <Ccode text="if (nonbooleanValue)" /> 나{" "}
        <Ccode text="assert (nonbooleanValue)" /> 같은 코드를 사용 할 수 없음을
        의미합니다. 대신에, 다음과 같이 명시적으로 값을 확인합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="com">&#47;&#47; Check for an empty string.</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> fullName </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;&#39;</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">fullName</span>
        <span className="pun">.</span>
        <span className="pln">isEmpty</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="pln"></span>
        <span className="com">&#47;&#47; Check for zero.</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> hitPoints </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">hitPoints </span>
        <span className="pun">&lt;=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="pln"></span>
        <span className="com">&#47;&#47; Check for null.</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> unicorn</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">unicorn </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="typ">null</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="pln"></span>
        <span className="com">&#47;&#47; Check for NaN.</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> iMeantToDoThis </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pln"> </span>
        <span className="pun">/</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">iMeantToDoThis</span>
        <span className="pun">.</span>
        <span className="pln">isNaN</span>
        <span className="pun">);</span>
      </pre>
    </>
  );
};

export default Booleans;
