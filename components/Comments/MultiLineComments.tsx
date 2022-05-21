import Ccode from "../Custom/Ccode";

const MultiLineComments = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="multi-line-comments"
        className="font-noto text-primaryTitleTextColor"
      >
        멀티 라인 주석
      </h2>
      <p>
        멀티 라인 주석은 <Ccode text="/*" />로 시작해서 <Ccode text="*/" />로
        끝납니다. <Ccode text="/*" />와 <Ccode text="*/" /> 사이에 있는
        것들은(다음 섹션에서 보게 될 문서 주석이 아니라면) Dart 컴파일러에서
        무시합니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="typ">void</span>
            <span className="pln"> main</span>
            <span className="pun">()</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="com">
              {"  "}&#47;* <div />
              {"   "}* This is a lot of work. Consider raising chickens.
              <div> </div>
              {"  "}Llama larry = Llama();
              <div />
              {"  "}larry.feed();
              <div />
              {"  "}larry.exercise(); <div />
              {"  "}larry.clean();
              <div /> {"  "}*&#47;
            </span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
    </>
  );
};

export default MultiLineComments;
