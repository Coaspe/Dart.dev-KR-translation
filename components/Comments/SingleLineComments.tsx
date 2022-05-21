import Ccode from "../Custom/Ccode";

const SingleLineComments = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="single-line-comments"
        className="font-noto text-primaryTitleTextColor"
      >
        싱글 라인 주석
      </h2>
      <p>
        싱글 라인 주석은 <Ccode text="//" />로 시작합니다. <Ccode text="//" />와
        해당 라인의 끝까지 Dart의 컴파일러가 무시합니다.
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
              {"  "}&#47;&#47; TODO: refactor into an
              AbstractLlamaGreetingFactory?
            </span>
            <div />
            <span className="pln">{"  "}print</span>
            <span className="pun">(</span>
            <span className="str">&#39;Welcome to my Llama farm!&#39;</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
    </>
  );
};

export default SingleLineComments;
