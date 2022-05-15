import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const UsingConstructors = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="using-constructors"
        className="font-noto text-primaryTitleTextColor"
      >
        생성자 사용
      </h2>
      <p>
        <span className="italic">생성자</span>를 사용하여 객체를 생성 할 수
        있습니다. 생성자의 이름은{" "}
        <Ccode className="italic" text="className=Name" />,{" "}
        <Ccode className="italic" text="className=Name.identifier" />이 될 수
        있습니다. 예를 들면, 다음의 예제에서 <Ccode text="Point" /> 객체를{" "}
        <Ccode text="Point()" />와 <Ccode text="Point.fromJson()" /> 생성자를
        사용하여 생성합니다:
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> p1 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">Point</span>
        <span className="pun">(</span>
        <span className="lit">2</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> p2 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">Point</span>
        <span className="pun">.</span>
        <span className="pln">fromJson</span>
        <span className="pun">(&#123;</span>
        <span className="str">&#39;x&#39;</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="str">&#39;y&#39;</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">&#125;);</span>
      </pre>
      <p>
        몇몇 클래스는{" "}
        <CAnchor
          text="constant constructors"
          href="https://dart.dev/guides/language/language-tour#constant-constructors"
        />
        를 제공합니다. 상수 생성자를 사용하여 컴파일 타임 상수를 생성하고
        싶다면, 생성자 이름 앞에 <Ccode text="const" />를 사용하세요.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> p </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">ImmutablePoint</span>
        <span className="pun">(</span>
        <span className="lit">2</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">);</span>
      </pre>
      <p>
        다음과 같이 두개의 동일한 컴파일 타임 상수를 생성하는 것은, 하나의
        동일한 인스턴스를 생성합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> a </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">ImmutablePoint</span>
        <span className="pun">(</span>
        <span className="lit">1</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> b </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">ImmutablePoint</span>
        <span className="pun">(</span>
        <span className="lit">1</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">identical</span>
        <span className="pun">(</span>
        <span className="pln">a</span>
        <span className="pun">,</span>
        <span className="pln"> b</span>
        <span className="pun">));</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; They are the same instance!</span>
      </pre>
      <p>
        <span className="italic">상수 컨텍스트</span> 안에서, 생성자나 리터럴
        뒤의 <Ccode text="const" />는 생략이 가능합니다. 다음과 같은 코드가
        있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="com">&#47;&#47; Lots of const keywords here.</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> pointAndLine </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="str">{"  "}&#39;point&#39;</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">ImmutablePoint</span>
        <span className="pun">(</span>
        <span className="lit">0</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">)],</span>
        <div />
        <span className="pln"></span>
        <span className="str">{"  "}&#39;line&#39;</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">ImmutablePoint</span>
        <span className="pun">(</span>
        <span className="lit">1</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">10</span>
        <span className="pun">),</span>
        <span className="pln"> </span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">ImmutablePoint</span>
        <span className="pun">(-</span>
        <span className="lit">2</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">11</span>
        <span className="pun">)],</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;;</span>
      </pre>
      <p>
        <Ccode text="const" />
        를 선언 할 때 첫 번째 <Ccode text="const" />를 제외하고 다른{" "}
        <Ccode text="const" />는 생략 할 수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="com">
          &#47;&#47; Only one const, which establishes the constant context.
        </span>
        <div />
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> pointAndLine </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="str">{"  "}&#39;point&#39;</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="typ">ImmutablePoint</span>
        <span className="pun">(</span>
        <span className="lit">0</span>
        <span className="pun">,</span>
        <div />
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">)],</span>
        <span className="pln"></span>
        <span className="str">{"  "}&#39;line&#39;</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="typ">ImmutablePoint</span>
        <span className="pun">(</span>
        <span className="lit">1</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">10</span>
        <span className="pun">),</span>
        <span className="pln"> </span>
        <span className="typ">ImmutablePoint</span>
        <span className="pun">(-</span>
        <span className="lit">2</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">11</span>
        <span className="pun">)],</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;;</span>
      </pre>
      <p></p>
    </>
  );
};

export default UsingConstructors;
