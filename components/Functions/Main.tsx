import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Main = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="the-main-function"
        className="font-noto text-primaryTitleTextColor"
      >
        The main() function
      </h2>
      <p>
        모든 앱은 앱의 진입점 역할을 하는, top-level <Ccode text="main()" />{" "}
        함수가 필요합니다. <Ccode text="main()" /> 함수는 <Ccode text="void" />
        를 반환하고 optional <Ccode text="List<String>" /> 매개변수를 인자로
        전달 받습니다.
      </p>
      <p>
        다음은 간단한 <Ccode text="main()" /> 함수의 예제 입니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="typ">void</span>
        <span className="pln"> main</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}print</span>
        <span className="pun">(</span>
        <span className="str">&39;Hello, World!&39;</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <p>
        다음은 인자를 받는 커맨드 라인 앱의 <Ccode text="main()" /> 함수 예제
        입니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="com">
          &#47;&#47; Run the app like this: dart args.dart 1 test
        </span>
        <span className="pln"></span>
        <span className="typ">void</span>
        <span className="pln"> main</span>
        <span className="pun">(</span>
        <span className="typ">List</span>
        <span className="pun">&lt;</span>
        <span className="typ">String</span>
        <span className="pun">&gt;</span>
        <span className="pln"> arguments</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}print</span>
        <span className="pun">(</span>
        <span className="pln">arguments</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="pln"></span>
        <span className="kwd">{"  "}assert</span>
        <span className="pun">(</span>
        <span className="pln">arguments</span>
        <span className="pun">.</span>
        <span className="pln">length </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}assert</span>
        <span className="pun">(</span>
        <span className="typ">int</span>
        <span className="pun">.</span>
        <span className="pln">parse</span>
        <span className="pun">(</span>
        <span className="pln">arguments</span>
        <span className="pun">[</span>
        <span className="lit">0</span>
        <span className="pun">])</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}assert</span>
        <span className="pun">(</span>
        <span className="pln">arguments</span>
        <span className="pun">[</span>
        <span className="lit">1</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="str">&#39;test&#39;</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <p>
        커맨드 라인 인자를 정의하고, 받아오기 위해서{" "}
        <CAnchor text="args library" href="https://pub.dev/packages/args" />를
        사용 수도 있습니다.
      </p>
    </>
  );
};

export default Main;
