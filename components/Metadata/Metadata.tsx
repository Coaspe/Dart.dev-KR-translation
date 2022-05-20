import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Metadata = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="metadata"
        className="font-noto text-primaryTitleTextColor"
      >
        Metadata
      </h2>
      <p>
        코드에 추가적인 정보를 더하고 싶다면 메타데이터를 사용하세요. 메타데이터
        표기는 <Ccode text="@" />
        문자로 시작하는 <Ccode text="deprecated" /> 같은 컴파일 타임 상수나 상수
        생성자의 호출 입니다.
      </p>
      <p>
        모든 Dart 코드에는 세가지 표기가 가능합니다.:
        <Ccode text="@Deprecated, @deprecated, @override" />. 예를 들면,{" "}
        <Ccode text="@override" />의 용례는{" "}
        <CAnchor text="클래스 확장하기" href="#extending-a-class" />를
        참고하세요. 다음은 <Ccode text="@Deprecated" /> 표기를 사용하는 예제
        입니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <code>
          <span className="kwd">class</span>
          <span className="pln"> </span>
          <span className="typ">Television</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <span className="pln"></span>
          <div />
          <span className="com">
            {"  "}&#47;&#47;&#47; Use [turnOn] to turn the power on instead.
          </span>
          <span className="pln"></span>
          <span className="highlight">
            <span className="pln">@</span>
            <span className="typ">Deprecated</span>
            <span className="pun">(</span>
            <span className="str">&#39;Use turnOn instead&#39;</span>
            <span className="pun">)</span>
          </span>
          <div />
          <span className="pln"></span>
          <span className="typ">{"  "}void</span>
          <span className="pln"> activate</span>
          <span className="pun">()</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln">{"    "}turnOn</span>
          <span className="pun">();</span>
          <div />
          <span className="pln"></span>
          <span className="pun">{"  "}&#125;</span>
          <span className="pln"></span>
          <div> </div>
          <span className="com">
            {"  "}&#47;&#47;&#47; Turns the TV&#39;s power on.
          </span>
          <div />
          <span className="pln"></span>
          <span className="typ">{"  "}void</span>
          <span className="pln"> turnOn</span>
          <span className="pun">()</span>
          <span className="pln"> </span>
          <span className="pun">&#123;...&#125;</span>
          <div />
          <span className="pln"></span>
          <span className="com">{"  "}&#47;&#47; ···</span>
          <div />
          <span className="pln"></span>
          <span className="pun">&#125;</span>
        </code>
      </pre>
      <p>
        여러분들 만의 메타데이터 표기를 만들 수도 있습니다. 다음은 두개의 인자를
        받는 <Ccode text="@Todo" /> 표기를 정의하는 예제입니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">library</span>
            <span className="pln"> todo</span>
            <span className="pun">;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="kwd">class</span>
            <span className="pln"> </span>
            <span className="typ">Todo</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}final</span>
            <span className="pln"> </span>
            <span className="typ">String</span>
            <span className="pln"> who</span>
            <span className="pun">;</span>
            <div />

            <span className="pln"></span>
            <span className="kwd">{"  "}final</span>
            <span className="pln"> </span>
            <span className="typ">String</span>
            <span className="pln"> what</span>
            <span className="pun">;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="kwd">{"  "}const</span>
            <span className="pln"> </span>
            <span className="typ">Todo</span>
            <span className="pun">(</span>
            <span className="kwd">this</span>
            <span className="pun">.</span>
            <span className="pln">who</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="kwd">this</span>
            <span className="pun">.</span>
            <span className="pln">what</span>
            <span className="pun">);</span>
            <div />

            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
      <p>
        다음은 <Ccode text="@Todo" /> 표기를 사용하는 예제입니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">import</span>
            <span className="pln"> </span>
            <span className="str">&#39;todo.dart&#39;</span>
            <span className="pun">;</span>
            <div> </div>
            <span className="pln">@</span>
            <span className="typ">Todo</span>
            <span className="pun">(</span>
            <span className="str">&#39;seth&#39;</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="str">&#39;make this do something&#39;</span>
            <div />
            <span className="pun">)</span>
            <span className="pln"></span>
            <span className="typ">void</span>
            <span className="pln"> doSomething</span>
            <span className="pun">()</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln">{"  "}print</span>
            <span className="pun">(</span>
            <span className="str">&#39;do something&#39;</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
      <p>
        메타데이터는 라이브러리, 클래스, typedef, 타입 매개변수, 생성자,
        factory, 함수, 필드, 매개변수, 변수 선언 뒤에 나올 수 있고 import나
        export 뒤에도 나올 수 있습니다. Reflection을 이용해 런타임에
        메타데이터를 회수 할 수 있습니다.
      </p>
    </>
  );
};

export default Metadata;
