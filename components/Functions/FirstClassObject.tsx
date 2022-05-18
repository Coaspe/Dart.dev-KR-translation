const FirstClassObject = () => {
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
        일급 객체로서의 함수
      </h2>
      <p>다음과 같이 함수는 다른 함수의 매개 변수로 전달 될 수 있습니다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="typ">void</span>
        <span className="pln"> printElement</span>
        <span className="pun">(</span>
        <span className="typ">int</span>
        <span className="pln"> element</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}print</span>
        <span className="pun">(</span>
        <span className="pln">element</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> list </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="lit">1</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">3</span>
        <span className="pun">];</span>
        <div> </div>
        <span className="pln"></span>
        <span className="com">
          &#47;&#47; Pass printElement as a parameter.
        </span>
        <div />
        <span className="pln">list</span>
        <span className="pun">.</span>
        <span className="pln">forEach</span>
        <span className="pun">(</span>
        <span className="pln">printElement</span>
        <span className="pun">);</span>
      </pre>
      <p>다음과 같이 변수에 함수를 할당 할 수도 있습니다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> loudify </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">msg</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> </span>
        <span className="str">
          &#39;!!! $&#123;msg.toUpperCase()&#125; !!!&#39;
        </span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">loudify</span>
        <span className="pun">(</span>
        <span className="str">&#39;hello&#39;</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="str">&#39;!!! HELLO !!!&#39;</span>
        <span className="pun">);</span>
      </pre>
      <p>위에 예제에서는 다음 섹션에 나올 익명(anonymous)함수를 사용합니다.</p>
    </>
  );
};
export default FirstClassObject;
