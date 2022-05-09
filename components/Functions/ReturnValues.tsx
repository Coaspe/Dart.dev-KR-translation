import Ccode from "../Custom/Ccode";

const ReturnValues = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="return-values"
        className="font-noto text-primaryTitleTextColor"
      >
        반환 값
      </h2>
      <p>
        모든 함수는 값을 반환합니다. 만약 함수의 반환값이 명시되어 있지 않으면,{" "}
        <Ccode text="return null;" />이 암묵적으로 함수의 바디에 추가됩니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="pln">foo</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">{}</span>
        <div> </div>
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">foo</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="typ">null</span>
        <span className="pun">);</span>
      </pre>
    </>
  );
};

export default ReturnValues;
