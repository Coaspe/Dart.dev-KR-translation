import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Conditional = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="conditional-expressions"
        className="font-noto text-primaryTitleTextColor"
      >
        조건 표현식(conditional expressions)
      </h2>
      <p>
        Dart는{" "}
        <CAnchor
          text="if-else"
          href="https://dart.dev/guides/language/language-tour#if-and-else"
        />{" "}
        구문을 간결하게 표현 할 수 있는 두 개의 연산자가 있습니다.
      </p>
      <p>
        <Ccode text="condition ? expr1 : expr2" />
      </p>
      <p>
        만약 <span className="itailc">condition</span>이 참이라면,{" "}
        <span className="itailc">expr1</span>의 값을 반환하고, 아니라면{" "}
        <span className="itailc">expr2</span>의 값을 반환합니다.
      </p>
      <p>
        <Ccode text="expr1 ?? expr2" />
      </p>
      <p>
        만약 <span className="itailc">expr1</span>이 null이 아니라면,{" "}
        <span className="itailc">expr1</span>의 값을 반환하고 null이라면,{" "}
        <span className="itailc">expr2</span>의 값을 반환합니다.
      </p>
      <p>
        boolean 표현식으로 어떤 값을 할당하는 상황이라면, <Ccode text="?" />와{" "}
        <Ccode text=":" />를 사용해보세요.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> visibility </span>
        <span className="pun">=</span>
        <span className="pln"> isPublic </span>
        <span className="pun">?</span>
        <span className="pln"> </span>
        <span className="str">&#39;public&#39;</span>
        <span className="pln"> </span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">&#39;private&#39;</span>
        <span className="pun">;</span>
        <span>
          {"  "}(isPublic이 참이라면 visibility는 &#39;public&#39;이 되고
          아니라면 &#39;private&#39;이 됩니다.)
        </span>
      </pre>
      <p>
        boolean 표현식이 null인지 확인하고 싶다면, <Ccode text="??" />를
        사용하세요.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="typ">String</span>
        <span className="pln"> playerName</span>
        <span className="pun">(</span>
        <span className="typ">String</span>
        <span className="pun">?</span>
        <span className="pln"> name</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> name </span>
        <span className="pun">??</span>
        <span className="pln"> </span>
        <span className="str">&#39;Guest&#39;</span>
        <span className="pun">;</span>
      </pre>
      <p>
        위의 예는 다음과 같이 두 개의 방법으로 표현 될 수 있지만, 깔끔하진
        않습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="com">
          &#47;&#47; Slightly longer version uses ?: operator.
        </span>
        <div />
        <span className="pln"></span>
        <span className="typ">String</span>
        <span className="pln"> playerName</span>
        <span className="pun">(</span>
        <span className="typ">String</span>
        <span className="pun">?</span>
        <span className="pln"> name</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> name </span>
        <span className="pun">!=</span>
        <span className="pln"> </span>
        <span className="typ">null</span>
        <span className="pln"> </span>
        <span className="pun">?</span>
        <span className="pln"> name </span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">&#39;Guest&#39;</span>
        <span className="pun">;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="com">
          &#47;&#47; Very long version uses if-else statement.
        </span>
        <div />
        <span className="pln"></span>
        <span className="typ">String</span>
        <span className="pln"> playerName</span>
        <span className="pun">(</span>
        <span className="typ">String</span>
        <span className="pun">?</span>
        <span className="pln"> name</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">name </span>
        <span className="pun">!=</span>
        <span className="pln"> </span>
        <span className="typ">null</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"    "}return</span>
        <span className="pln"> name</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="pun">{"  "}&#125;</span>
        <span className="pln"> </span>
        <span className="kwd">else</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"    "}return</span>
        <span className="pln"> </span>
        <span className="str">&#39;Guest&#39;</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="pun">{"  "}&#125;</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
    </>
  );
};

export default Conditional;
