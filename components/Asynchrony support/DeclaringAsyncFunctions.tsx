import Ccode from "../Custom/Ccode";

const DeclaringAsyncFunctions = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "18px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="declaring-async-functions"
        className="font-noto text-primaryTitleTextColor"
      >
        Async 함수 선언하기
      </h2>
      <p>
        <Ccode text="async" /> 함수는 바디가 <Ccode text="async" /> 식별자로
        마크된 함수 입니다.
      </p>
      <p>
        <Ccode text="asnyc" /> 키워드를 함수 앞에 마크하는 것은, 함수가 Future를
        반환하게 합니다. 예를 들면, String을 반환하는 다음과 같은 동기 함수가
        있습니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="typ">String</span>
            <span className="pln"> lookUpVersion</span>
            <span className="pun">()</span>
            <span className="pln"> </span>
            <span className="pun">=&gt;</span>
            <span className="pln"> </span>
            <span className="str">&#39;1.0.0&#39;</span>
            <span className="pun">;</span>
          </pre>
        </div>
      </div>
      <p>
        만약 이 함수를 <Ccode text="async" /> 함수로 만들면 Future 값을
        반환합니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="typ">Future</span>
            <span className="pun">&lt;</span>
            <span className="typ">String</span>
            <span className="pun">&gt;</span>
            <span className="pln"> lookUpVersion</span>
            <span className="pun">()</span>
            <span className="pln"> </span>
            <span className="kwd">async</span>
            <span className="pln"> </span>
            <span className="pun">=&gt;</span>
            <span className="pln"> </span>
            <span className="str">&#39;1.0.0&#39;</span>
            <span className="pun">;</span>
          </pre>
        </div>
      </div>
      <p>
        함수의 바디에서는 Future API를 사용할 필요가 없다는 것을 알아두세요.
        Dart는 필요 할 때 Future 객체를 생성합니다. 만약 함수가 쓸모 있는 값을
        반환하지 않는다면, 반환 타입을 <Ccode text="Future<void>" />로 만드세요.
      </p>
    </>
  );
};
export default DeclaringAsyncFunctions;
