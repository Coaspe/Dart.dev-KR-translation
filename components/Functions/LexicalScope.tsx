import Ccode from "../Custom/Ccode";

const LexicalScope = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="functions-as-first-class-objects"
        className="font-noto text-primaryTitleTextColor"
      >
        렉시컬 스코프(Lexical scope)
      </h2>
      <p>
        Dart는 렉시컬 스코프를 따르는 언어입니다. 그것은 변수의 유효 범위가
        정적으로 정해진다는 것이고 더 간단하게 코드의 구조에 의해 결정된다는
        뜻입니다. 변수의 유효 범위를 확인하고 싶다면, 중괄호를 안팎으로
        확인하세요.
      </p>
      <p>다음은 각각의 스코프 레벨에 변수가 있는 중첩 함수의 예제입니다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="typ">bool</span>
        <span className="pln"> topLevel </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">true</span>
        <span className="pun">;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="typ">void</span>
        <span className="pln"> main</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}</span>
        <span className="kwd">var</span>
        <span className="pln"> insideMain </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">true</span>
        <span className="pun">;</span>
        <div> </div>
        <span className="pln">{"  "}</span>
        <span className="typ">void</span>
        <span className="pln"> myFunction</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"    "}var</span>
        <span className="pln"> insideFunction </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">true</span>
        <span className="pun">;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="typ">{"    "}void</span>
        <span className="pln"> nestedFunction</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="kwd">{"      "}var</span>
        <span className="pln"> insideNestedFunction </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">true</span>
        <span className="pun">;</span>
        <div> </div>
        <span className="kwd">{"      "}assert</span>
        <span className="pun">(</span>
        <span className="pln">topLevel</span>
        <span className="pun">);</span>
        <div />
        <span className="kwd">{"      "}assert</span>
        <span className="pun">(</span>
        <span className="pln">insideMain</span>
        <span className="pun">);</span>
        <div />
        <span className="kwd">{"      "}assert</span>
        <span className="pun">(</span>
        <span className="pln">insideFunction</span>
        <span className="pun">);</span>
        <div />
        <span className="kwd">{"      "}assert</span>
        <span className="pun">(</span>
        <span className="pln">insideNestedFunction</span>
        <span className="pun">);</span>
        <div />
        <span className="pun">{"    "}&#125;</span>
        <div />
        <span className="pln"></span>
        <span className="pun">{"  "}&#125;</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
        <div />
      </pre>
      <p>
        <Ccode text="nestedFunction()" />는 가장 위의 레벨까지, 모든 레벨의 변수
        사용이 가능하다는 것을 알아두세요.
      </p>
    </>
  );
};
export default LexicalScope;
