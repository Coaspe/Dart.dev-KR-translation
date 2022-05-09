const TestingFunctions = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="testing-functions-for-equality"
        className="font-noto text-primaryTitleTextColor"
      >
        동등성 테스트 함수
      </h2>
      <p>
        다음은 최상위 함수, 정적 메서드, 인스턴스 메서드의 동등성을 확인하는
        테스트 코드 입니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="typ">void</span>
        <span className="pln"> foo</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">&#123;&#125;</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; A top-level function</span>
        <div> </div>
        <span className="kwd">class</span>
        <span className="pln"> </span>
        <span className="typ">A</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="kwd">{"  "}static</span>
        <span className="pln"> </span>
        <span className="typ">void</span>
        <span className="pln"> bar</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">&#123;&#125;</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; A static method</span>
        <div />
        <span className="typ">{"  "}void</span>
        <span className="pln"> baz</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">&#123;&#125;</span>

        <span className="pln"> </span>
        <span className="com">&#47;&#47; An instance method</span>
        <div />
        <span className="pun">&#125;</span>
        <div> </div>
        <span className="typ">void</span>
        <span className="pln"> main</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="typ">{"  "}Function</span>
        <span className="pln"> x</span>
        <span className="pun">;</span>
        <div> </div>
        <span className="com">
          {"  "}&#47;&#47; Comparing top-level functions.
        </span>
        <div />
        <span className="pln">{"  "}x </span>
        <span className="pun">=</span>
        <span className="pln"> foo</span>
        <span className="pun">;</span>
        <div />
        <span className="kwd">{"  "}assert</span>
        <span className="pun">(</span>
        <span className="pln">foo </span>
        <span className="pun">==</span>
        <span className="pln"> x</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="com">{"  "}&#47;&#47; Comparing static methods.</span>
        <div />
        <span className="pln">{"  "}x </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">A</span>
        <span className="pun">.</span>
        <span className="pln">bar</span>
        <span className="pun">;</span>
        <div />
        <span className="kwd">{"  "}assert</span>
        <span className="pun">(</span>
        <span className="typ">A</span>
        <span className="pun">.</span>
        <span className="pln">bar </span>
        <span className="pun">==</span>
        <span className="pln"> x</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="com">
          {"  "}&#47;&#47; Comparing instance methods.
        </span>
        <div />
        <span className="kwd">{"  "}var</span>
        <span className="pln"> v </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">A</span>
        <span className="pun">();</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Instance #1 of A</span>
        <div />
        <span className="kwd">{"  "}var</span>
        <span className="pln"> w </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">A</span>
        <span className="pun">();</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Instance #2 of A</span>
        <div />
        <span className="kwd">{"  "}var</span>
        <span className="pln"> y </span>
        <span className="pun">=</span>
        <span className="pln"> w</span>
        <span className="pun">;</span>
        <div />
        <span className="pln">{"  "}x </span>
        <span className="pun">=</span>
        <span className="pln"> w</span>
        <span className="pun">.</span>
        <span className="pln">baz</span>
        <span className="pun">;</span>
        <div> </div>
        <span className="com">
          {"  "}&#47;&#47; These closures refer to the same instance (#2),
        </span>
        <div />
        <span className="com">{"  "}&#47;&#47; so they&#39;re equal.</span>
        <div />
        <span className="kwd">{"  "}assert</span>
        <span className="pun">(</span>
        <span className="pln">y</span>
        <span className="pun">.</span>
        <span className="pln">baz </span>
        <span className="pun">==</span>
        <span className="pln"> x</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="com">
          {"  "}&#47;&#47; These closures refer to different instances,
        </span>
        <div />
        <span className="com">{"  "}&#47;&#47; so they&#39;re unequal.</span>
        <div />
        <span className="kwd">{"  "}assert</span>
        <span className="pun">(</span>
        <span className="pln">v</span>
        <span className="pun">.</span>
        <span className="pln">baz </span>
        <span className="pun">!=</span>
        <span className="pln"> w</span>
        <span className="pun">.</span>
        <span className="pln">baz</span>
        <span className="pun">);</span>
        <div />
        <span className="pun">&#125;</span>
      </pre>
    </>
  );
};

export default TestingFunctions;
