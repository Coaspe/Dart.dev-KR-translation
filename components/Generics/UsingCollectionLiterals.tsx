import Ccode from "../Custom/Ccode";

const UsingCollectionLiterals = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="using-collection-literals"
        className="font-noto text-primaryTitleTextColor"
      >
        콜렉션 리터럴 사용하기
      </h2>
      <p>
        List, set 그리고 map 리터럴은 매개변수화 될 수 있습니다. 매개변수화된
        리터럴은, <Ccode text="<type>" />
        (list, set) <Ccode text="<keyType, valueType>" />
        (map)를 시작 괄호에 추가하는 것만 빼면, 일반 리터럴과 비슷하게
        생겼습니다. 다음은 타입이 있는 리터럴의 예제입니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">var</span>
            <span className="pln"> names </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="pun">&lt;</span>
            <span className="typ">String</span>
            <span className="pun">&gt;[</span>
            <span className="str">&#39;Seth&#39;</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="str">&#39;Kathy&#39;</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="str">&#39;Lars&#39;</span>
            <span className="pun">];</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">var</span>
            <span className="pln"> uniqueNames </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="pun">&lt;</span>
            <span className="typ">String</span>
            <span className="pun">&gt;&#123;</span>
            <span className="str">&#39;Seth&#39;</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="str">&#39;Kathy&#39;</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="str">&#39;Lars&#39;</span>
            <span className="pun">&#125;;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">var</span>
            <span className="pln"> pages </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="pun">&lt;</span>
            <span className="typ">String</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="typ">String</span>
            <span className="pun">&gt;&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="str">{"  "}&#39;index.html&#39;</span>
            <span className="pun">:</span>
            <span className="pln"> </span>
            <span className="str">&#39;Homepage&#39;</span>
            <span className="pun">,</span>
            <div />
            <span className="pln"></span>
            <span className="str">{"  "}&#39;robots.txt&#39;</span>
            <span className="pun">:</span>
            <span className="pln"> </span>
            <span className="str">&#39;Hints for web robots&#39;</span>
            <span className="pun">,</span>
            <div />
            <span className="pln"></span>
            <span className="str">{"  "}&#39;humans.txt&#39;</span>
            <span className="pun">:</span>
            <span className="pln"> </span>
            <span className="str">&#39;We are people, not machines&#39;</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;;</span>
          </pre>
        </div>
      </div>
    </>
  );
};

export default UsingCollectionLiterals;
