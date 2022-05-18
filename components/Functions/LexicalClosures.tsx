import Ccode from "../Custom/Ccode";

const LexicalClosures = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="lexical-closures"
        className="font-noto text-primaryTitleTextColor"
      >
        렉시컬 클로져(Lexical closures)
      </h2>
      <p>
        <span className="italic">클로져</span>는 함수가 이것의 원래 스코프의
        밖에서 쓰여졌다고 해도, 해당 함수 렉시컬 스코프의 변수에 접근 할 수 있는
        함수 객체입니다. (기억을 한다는 의미)
      </p>
      <p>
        함수는 주위 스코프에 정의된 변수를 포함합니다. 다음의 예제에서,{" "}
        <Ccode text="makeAdder()" />는 <Ccode text="addBy" /> 변수를 기억합니다.
      </p>

      <p>
        <Ccode text="nestedFunction()" />는 가장 위의 레벨까지, 모든 레벨의 변수
        사용이 가능하다는 것을 알아두세요.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="com">
          &#47;&#47;&#47; Returns a function that adds [addBy] to the
        </span>
        <div />
        <span className="pln"></span>
        <span className="com">&#47;&#47;&#47; function&#39;s argument.</span>
        <span className="pln"></span>
        <div />
        <span className="typ">Function</span>
        <span className="pln"> makeAdder</span>
        <span className="pun">(</span>
        <span className="typ">int</span>
        <span className="pln"> addBy</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}</span>
        <span className="kwd">return</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="typ">int</span>
        <span className="pln"> i</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> addBy </span>
        <span className="pun">+</span>
        <span className="pln"> i</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="typ">void</span>
        <span className="pln"> main</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="com">&#47;&#47; Create a function that adds 2.</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}var</span>
        <span className="pln"> add2 </span>
        <span className="pun">=</span>
        <span className="pln"> makeAdder</span>
        <span className="pun">(</span>
        <span className="lit">2</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="pln"></span>
        <span className="com">&#47;&#47; Create a function that adds 4.</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}var</span>
        <span className="pln"> add4 </span>
        <span className="pun">=</span>
        <span className="pln"> makeAdder</span>
        <span className="pun">(</span>
        <span className="lit">4</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="pln"></span>
        <span className="kwd">{"  "}assert</span>
        <span className="pun">(</span>
        <span className="pln">add2</span>
        <span className="pun">(</span>
        <span className="lit">3</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">5</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}assert</span>
        <span className="pun">(</span>
        <span className="pln">add4</span>
        <span className="pun">(</span>
        <span className="lit">3</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">7</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <div />
        <span className="pun">&#125;</span>
      </pre>
    </>
  );
};

export default LexicalClosures;
