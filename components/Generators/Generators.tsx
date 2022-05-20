import Ccode from "../Custom/Ccode";
const Generators = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="generators"
        className="font-noto text-primaryTitleTextColor"
      >
        제네레이터
      </h2>
      <p>
        시퀀스의 값을 지연된 상태에서 사용하고 싶다면,{" "}
        <span className="italic">제네레이터 함수</span>를 사용하세요. Dart는
        두가지 내장 제네레이터 함수를 가지고 있습니다.
      </p>
      <ul className="ll">
        <li>
          <strong>동기적인</strong> 제네레이터:{" "}
          <a
            href="https://api.dart.dev/stable/dart-core/Iterable-class.html"
            className="external"
          >
            <code className="language-plaintext highlighter-rouge">
              Iterable
            </code>
          </a>{" "}
          객체를 반환합니다.
        </li>
        <li>
          <strong>비동기적인</strong> 제네레이터:{" "}
          <a
            href="https://api.dart.dev/stable/dart-async/Stream-class.html"
            className="external"
          >
            <code className="language-plaintext highlighter-rouge">Stream</code>
          </a>{" "}
          객체를 반환합니다.
        </li>
      </ul>
      <p>
        <strong>동기적인</strong> 제네레이터 함수를 구현하고 싶다면,{" "}
        <Ccode text="sync*" />로 함수의 바디를 표시하고, <Ccode text="yield" />{" "}
        문으로 값을 사용하세요.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="typ">Iterable</span>
            <span className="pun">&lt;</span>
            <span className="typ">int</span>
            <span className="pun">&gt;</span>
            <span className="pln"> naturalsTo</span>
            <span className="pun">(</span>
            <span className="typ">int</span>
            <span className="pln"> n</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="kwd">sync</span>
            <span className="pun">*</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}int</span>
            <span className="pln"> k </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="lit">0</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}while</span>
            <span className="pln"> </span>
            <span className="pun">(</span>
            <span className="pln">k </span>
            <span className="pun">&lt;</span>
            <span className="pln"> n</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="kwd">yield</span>
            <span className="pln"> k</span>
            <span className="pun">++;</span>
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
      <p>
        만약 제네레이터가 재귀의 형태를 가진다면, <Ccode text="yield*" />를
        사용하여 성능을 향상 시킬 수 있습니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="typ">Iterable</span>
            <span className="pun">&lt;</span>
            <span className="typ">int</span>
            <span className="pun">&gt;</span>
            <span className="pln"> naturalsDownFrom</span>
            <span className="pun">(</span>
            <span className="typ">int</span>
            <span className="pln"> n</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="kwd">sync</span>
            <span className="pun">*</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}if</span>
            <span className="pln"> </span>
            <span className="pun">(</span>
            <span className="pln">n </span>
            <span className="pun">&gt;</span>
            <span className="pln"> </span>
            <span className="lit">0</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <span className="pln"></span>
            <span className="kwd">{"    "}yield</span>
            <span className="pln"> n</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"    "}yield</span>
            <span className="pun">*</span>
            <span className="pln"> naturalsDownFrom</span>
            <span className="pun">(</span>
            <span className="pln">n </span>
            <span className="pun">-</span>
            <span className="pln"> </span>
            <span className="lit">1</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="pun">{"  "}&#125;</span>
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
    </>
  );
};

export default Generators;
