import Ccode from "../Custom/Ccode";

const WhyUseGenerics = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="why-use-generics"
        className="font-noto text-primaryTitleTextColor"
      >
        왜 제네릭을 쓸까?
      </h2>
      <p>
        보통 타입 세이프티 때문에 제네릭을 사용하지만, 사실 더 많은 기능을
        수행합니다.
      </p>
      <ul className="ll">
        <li>제네릭 타입을 정확하게 명시한 코드는 더 잘 작성된 코드 입니다.</li>
        <li>코드 중복를 줄이기 위해 제네릭을 사용 할 수 있습니다.</li>
      </ul>
      <p>
        만약 리스트가 string 값만 가지게 하고 싶다면,{" "}
        <Ccode text="List<String>" />로 리스트를 선언하면 된다. 그렇게 하므로써,
        당신의 동료들, 그리고 툴들이 string이 아닌 값들은 list에 추가 될 수
        없음을 바로 알 수 있습니다.
      </p>
      <div className="language-dart fails-sa highlighter-rouge">
        <div className="highlight">
          <pre className="highlight">
            <code>
              <span className="kd">var</span> <span className="n">names</span>{" "}
              <span className="o">=</span> <span className="o">&lt;</span>
              <span className="kt">String</span>
              <span className="o">&gt;[];</span>
              <div />
              <span className="n">names</span>
              <span className="o">.</span>
              <span className="na">addAll</span>
              <span className="o">([</span>
              <span className="s">&#39;Seth&#39;</span>
              <span className="o">,</span>{" "}
              <span className="s">&#39;Kathy&#39;</span>
              <span className="o">,</span>{" "}
              <span className="s">&#39;Lars&#39;</span>
              <span className="o">]);</span>
              <div />
              <span className="n">names</span>
              <span className="o">.</span>
              <span className="na">add</span>
              <span className="o">(</span>
              <span className="mi">42</span>
              <span className="o">);</span>{" "}
              <span className="c1">&#47;&#47; Error</span>
            </code>
          </pre>
        </div>
      </div>
      <p>
        제네릭을 사용하는 또 다른 이유는 코드 중복을 줄이기 위함입니다. 제네릭은
        정적인 분석의 이점을 챙기면서, 많은 타입 중에 단일 인터페이스와 구현을
        공유 할 수 있게 합니다. 예를 들면, 객체를 캐싱하는 인터페이스를
        생성한다고 해봅시다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">abstract</span>
            <span className="pln"> </span>
            <span className="kwd">class</span>
            <span className="pln"> </span>
            <span className="typ">ObjectCache</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}Object</span>
            <span className="pln"> getByKey</span>
            <span className="pun">(</span>
            <span className="typ">String</span>
            <span className="pln"> key</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}void</span>
            <span className="pln"> setByKey</span>
            <span className="pun">(</span>
            <span className="typ">String</span>
            <span className="pln"> key</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="typ">Object</span>
            <span className="pln"> value</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
      <p>
        만약 위 인터페이스의 string 버젼이 필요하다면 다음과 같이 선언하면
        됩니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">abstract</span>
            <span className="pln"> </span>
            <span className="kwd">class</span>
            <span className="pln"> </span>
            <span className="typ">StringCache</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}String</span>
            <span className="pln"> getByKey</span>
            <span className="pun">(</span>
            <span className="typ">String</span>
            <span className="pln"> key</span>
            <span className="pun">);</span>
            <span className="pln"></span>
            <span className="typ">{"  "}void</span>
            <span className="pln"> setByKey</span>
            <span className="pun">(</span>
            <span className="typ">String</span>
            <span className="pln"> key</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="typ">String</span>
            <span className="pln"> value</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
      <p>나중에 만약 number 버젼이 필요해 졌다면... 어떻게 하는 게 좋을까요?</p>
      <p>
        제네릭 타입은 위처럼 모든 인터페이스를 생성해야하는 문제를 해결해줍니다.
        타입 파라미터를 가지는 하나의 단일 인터페이스만을 구현하면 됩니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">abstract</span>
            <span className="pln"> </span>
            <span className="kwd">class</span>
            <span className="pln"> </span>
            <span className="typ">Cache</span>
            <span className="pun">&lt;</span>
            <span className="typ">T</span>
            <span className="pun">&gt;</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}T</span>
            <span className="pln"> getByKey</span>
            <span className="pun">(</span>
            <span className="typ">String</span>
            <span className="pln"> key</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}void</span>
            <span className="pln"> setByKey</span>
            <span className="pun">(</span>
            <span className="typ">String</span>
            <span className="pln"> key</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="typ">T</span>
            <span className="pln"> value</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
      <p>
        위의 코드에서, T는 stand-in 타입입니다. 이것은 개발자가 추후에 타입을
        마음대로 정의 할 수 있게 해주는 플레이스 홀더입니다.
      </p>
    </>
  );
};

export default WhyUseGenerics;
