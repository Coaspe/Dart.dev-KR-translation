import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const RPT = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="restricting-the-parameterized-type"
        className="font-noto text-primaryTitleTextColor"
      >
        매개변수화 된 타입을 제한하기
      </h2>
      <p>
        제네릭 타입을 구현 할 때, 인자로 제공되는 타입을 제한 해야하여 인수가
        특정 타입의 서브타입이 되게 해야할 경우가 발생합니다.{" "}
        <Ccode text="Extends" />를 사용하면 가능합니다.
      </p>
      <p>
        가장 자주 사용되는 방법은 non-nullalbe인 것을 보장하기 위해,{" "}
        <Ccode text="Object" />
        (디폴트인{" "}
        <CAnchor
          text="Object?"
          href="https://dart.dev/null-safety/understanding-null-safety#top-and-bottom"
        />{" "}
        대신)의 서브 타입으로 만드는 것 입니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">class</span>
            <span className="pln"> </span>
            <span className="typ">Foo</span>
            <span className="pun">&lt;</span>
            <span className="typ">T</span>
            <span className="pln"> </span>
            <span className="kwd">extends</span>
            <span className="pln"> </span>
            <span className="typ">Object</span>
            <span className="pun">&gt;</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="com">
              {"  "}&#147;&#147; Any type provided to Foo for T must be
              non-nullable.
            </span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
      <p>
        <Ccode text="Object" /> 이외의 타입들과 함께 <Ccode text="extends" />를
        사용 할 수 있습니다. 다음은 <Ccode text="SomBaseClass" />를 확장하는
        예로, <Ccode text="SomeBaseClass" />의 멤버들은 타입 <Ccode text="T" />
        의 객체로 볼 수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <code>
          <span className="kwd">class</span>
          <span className="pln"> </span>
          <span className="typ">Foo</span>
          <span className="pun">&lt;</span>
          <span className="typ">T</span>
          <span className="pln"> </span>
          <span className="highlight">
            <span className="kwd">extends</span>
            <span className="pln"> </span>
            <span className="typ">SomeBaseClass</span>
          </span>
          <span className="pun">&gt;</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln"></span>
          <span className="com">
            {"  "}&#47;&#47; Implementation goes here...
          </span>
          <span className="pln"></span>
          <div />
          <span className="typ">{"  "}String</span>
          <span className="pln"> toString</span>
          <span className="pun">()</span>
          <span className="pln"> </span>
          <span className="pun">=&gt;</span>
          <span className="pln"> </span>
          <span className="str">
            &#34;Instance of &#39;Foo&lt;$T&gt;&#39;&#34;
          </span>
          <span className="pun">;</span>
          <div />
          <span className="pln"></span>
          <span className="pun">&#125;</span>
          <div> </div>
          <span className="pln"></span>
          <span className="kwd">class</span>
          <span className="pln"> </span>
          <span className="typ">Extender</span>
          <span className="pln"> </span>
          <span className="kwd">extends</span>
          <span className="pln"> </span>
          <span className="typ">SomeBaseClass</span>
          <span className="pln"> </span>
          <span className="pun">&#123;...&#125;</span>
        </code>
      </pre>
      <p>
        <Ccode text="SomeBaseClass" />
        이나 이것의 서브 타입을 제네릭 인자로 사용하는 것도 가능합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <code>
          <span className="kwd">var</span>
          <span className="pln"> someBaseClassFoo </span>
          <span className="pun">=</span>
          <span className="pln"> </span>
          <span className="highlight">
            <span className="typ">Foo</span>
            <span className="pun">&lt;</span>
            <span className="typ">SomeBaseClass</span>
            <span className="pun">&gt;</span>
          </span>
          <span className="pun">();</span>
          <div />
          <span className="pln"></span>
          <span className="kwd">var</span>
          <span className="pln"> extenderFoo </span>
          <span className="pun">=</span>
          <span className="pln"> </span>
          <span className="highlight">
            <span className="typ">Foo</span>
            <span className="pun">&lt;</span>
            <span className="typ">Extender</span>
            <span className="pun">&gt;</span>
          </span>
          <span className="pun">();</span>
        </code>
      </pre>
      <p>제네릭 인자를 특정하지 않는 것도 가능합니다.</p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">var</span>
            <span className="pln"> foo </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="typ">Foo</span>
            <span className="pun">();</span>
            <div />
            <span className="pln">print</span>
            <span className="pun">(</span>
            <span className="pln">foo</span>
            <span className="pun">);</span>
            <span className="pln"> </span>
            <span className="com">
              &#47;&#47; Instance of &#39;Foo&lt;SomeBaseClass&gt;&#39;
            </span>
          </pre>
        </div>
      </div>
      <p>
        non-
        <Ccode text="SomeBaseClass" /> 타입으로 특정하는 것은 에러를
        발생시킵니다.
      </p>
      <pre className="prettyprint lang-dart fails-sa prettyprinted">
        <code>
          <span className="kwd">var</span>
          <span className="pln"> foo </span>
          <span className="pun">=</span>
          <span className="pln"> </span>
          <span className="highlight">
            <span className="typ">Foo</span>
            <span className="pun">&lt;</span>
            <span className="typ">Object</span>
            <span className="pun">&gt;</span>
          </span>
          <span className="pun">();</span>
        </code>
      </pre>
    </>
  );
};

export default RPT;
