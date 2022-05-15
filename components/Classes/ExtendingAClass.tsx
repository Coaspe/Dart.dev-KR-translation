import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const ExtendingAClass = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="constructors"
        className="font-noto text-primaryTitleTextColor"
      >
        클래스 확장(Extending a class)
      </h2>
      <p>
        Subclass를 만들고 싶다면, <Ccode text="extends" />를 사용하세요. 그
        클래스 안에서 superclass를 참조하고 싶다면 <Ccode text="super" />를
        사용하면 됩니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <code>
          <span className="kwd">class</span>
          <span className="pln"> </span>
          <span className="typ">Television</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln"></span>
          <span className="typ">{"  "}void</span>
          <span className="pln"> turnOn</span>
          <span className="pun">()</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <span className="pln">{"    "}_illuminateDisplay</span>
          <span className="pun">();</span>
          <div />
          <span className="pln">{"    "}_activateIrSensor</span>
          <span className="pun">();</span>
          <div />
          <span className="pln"></span>
          <span className="pun">{"  "}&#125;</span>
          <div />
          <span className="pln"></span>
          <span className="com">{"  "}&#47;&#47; ···</span>
          <div />
          <span className="pln"></span>
          <span className="pun">&#125;</span>
          <div> </div>
          <span className="pln"></span>
          <span className="kwd">class</span>
          <span className="pln"> </span>
          <span className="typ">SmartTelevision</span>
          <span className="pln"> </span>
          <span className="highlight">
            <span className="kwd">extends</span>
          </span>
          <span className="pln"> </span>
          <span className="typ">Television</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln"></span>
          <span className="typ">{"  "}void</span>
          <span className="pln"> turnOn</span>
          <span className="pun">()</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln">{"    "}</span>
          <span className="highlight">
            <span className="kwd">super</span>
          </span>
          <span className="pun">.</span>
          <span className="pln">turnOn</span>
          <span className="pun">();</span>
          <div />
          <span className="pln">{"    "}_bootNetworkInterface</span>
          <span className="pun">();</span>
          <div />
          <span className="pln">{"    "}_initializeMemory</span>
          <span className="pun">();</span>
          <div />
          <span className="pln">{"    "}_upgradeApps</span>
          <span className="pun">();</span>
          <div />
          <span className="pln"></span>
          <span className="pun">{"  "}&#125;</span>
          <span className="pln"></span>
          <div />
          <span className="com">{"  "}&#47;&#47; ···</span>
          <span className="pln"></span>
          <div />
          <span className="pun">&#125;</span>
        </code>
      </pre>
      <p>
        <code className="language-plaintext highlighter-rouge">extends</code>,
        의 다른 사용법을 알고 싶다면,
        <a href="#restricting-the-parameterized-type">
          parameterized types
        </a>의 <a href="#generics">generics</a>를 참고하세요.
      </p>
      <h3
        style={{
          fontSize: "18px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="overriding-members"
        className="font-noto text-primaryTitleTextColor"
      >
        Overriding members
      </h3>
      <p>
        Subclasses는 <CAnchor text="operators" href="#operators" />를 포함한
        인스턴스 메서드, getter, setter를 오버라이드 하는 것이 가능합니다.{" "}
        <Ccode text="@override" /> 표기를 사용하여 의도적으로 멤버를 오버라이딩
        할 수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <code>
          <span className="kwd">class</span>
          <span className="pln"> </span>
          <span className="typ">Television</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln"></span>
          <span className="com">{"  "}&#47;&#47; ···</span>
          <span className="pln"></span>
          <div />
          <span className="kwd">{"  "}set</span>
          <span className="pln"> contrast</span>
          <span className="pun">(</span>
          <span className="typ">int</span>
          <span className="pln"> value</span>
          <span className="pun">)</span>
          <span className="pln"> </span>
          <span className="pun">&#123;...&#125;</span>
          <div />
          <span className="pln"></span>
          <span className="pun">&#125;</span>
          <div> </div>
          <span className="pln"></span>
          <span className="kwd">class</span>
          <span className="pln"> </span>
          <span className="typ">SmartTelevision</span>
          <span className="pln"> </span>
          <span className="kwd">extends</span>
          <span className="pln"> </span>
          <span className="typ">Television</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln"></span>
          <span className="highlight">
            <span className="pln">{"  "}@override</span>
          </span>
          <div />
          <span className="pln"></span>
          <span className="kwd">{"  "}set</span>
          <span className="pln"> contrast</span>
          <span className="pun">(</span>
          <span className="typ">num</span>
          <span className="pln"> value</span>
          <span className="pun">)</span>
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
        오버라이딩 메서드 선언은 그 메서드가 오버라이드 하는 메서드와 여러가지
        방법으로 매치되어야 합니다.
      </p>
      <ul className="ll">
        <li>
          리턴 타입은 반드시 오버라이딩 되는 함수의 리턴 타입(서브 타입도
          가능)과 동일해야 합니다.
        </li>
        <li>
          인수의 타입은 오버라이딩 되는 함수의 인수 타입(supertype도 가능)과
          반드시 동일해야 합니다. 앞선 예제에서,{" "}
          <code className="language-plaintext highlighter-rouge">
            SmartTelevision
          </code>
          의 setter인{" "}
          <code className="language-plaintext highlighter-rouge">contrast</code>{" "}
          는 인수의 타입을{" "}
          <code className="language-plaintext highlighter-rouge">int</code>의{" "}
          supertype인{"  "}
          <code className="language-plaintext highlighter-rouge">num</code>으로
          변경합니다.
        </li>
        <li>
          만약 오버라이딩 되는 함수가 <em>n</em>개의 선택 매개변수를 가진다면,
          오버라이딩 하는 함수 또한 <em>n</em> 개의 선택 매개변수를 가져야
          합니다.
        </li>
        <li>
          <a href="#using-generic-methods">Generic method</a>는 generic이 아닌
          것을 오버라이드 할 수 없고, 그 반대도 마찬가지 입니다.
        </li>
      </ul>
      <p>
        메서드의 매개변수나 인스턴스 변수의 타입을 축소하고 싶은 때가
        있을겁니다. 이런 행동은 보통의 룰을 어기는 행위이고, 런타임에서 에러를
        발생 시킬 수도 있는 다운캐스트와 비슷합니다. 여전히, 코드가 타입 에러를
        발생시키지 않는다고 확신 할 수 있다면, 타입을 축소하는 것은 가능합니다.
        이런 경우에, <Ccode text="covariant keyword" />를 매개변수 선언 할 때
        사용하면 됩니다. 자세한 정보를 원한다면,{" "}
        <CAnchor
          text="Dart language specification"
          href="https://dart.dev/guides/language/spec"
        />
        를 참고하세요.
      </p>
      <aside className="alert alert-warning" role="alert">
        <p>
          <i className="" data-fa-i2svg="">
            <svg
              className="svg-inline--fa fa-exclamation-triangle fa-w-18"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="exclamation-triangle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
              ></path>
            </svg>
          </i>{" "}
          <strong>Warning:</strong>
          만약 <code className="language-plaintext highlighter-rouge">
            ==
          </code>{" "}
          를 오버라이드 하면,{" "}
          <code className="language-plaintext highlighter-rouge">hashCode</code>{" "}
          getter도 오버라이드 해아 합니다. For an example of overriding{" "}
          <a href="/guides/libraries/library-tour#implementing-map-keys">
            Implementing map keys
          </a>
          에 <code className="language-plaintext highlighter-rouge">==</code> 와{" "}
          <code className="language-plaintext highlighter-rouge">hashCode</code>
          를 오버라이드하는 예제가 있습니다.
        </p>
      </aside>
      <h3
        style={{
          fontSize: "18px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="nosuchmethod()"
        className="font-noto text-primaryTitleTextColor"
      >
        noSuchMethod()
      </h3>
      <p>
        코드가 존재하지 않는 함수나, 인스턴스 변수를 접근하는 것을 감지하거나,
        그것에 대해 처리하고 싶다면 <Ccode text="noSuchMethod()" /> 함수를
        오버라이드 하면 됩니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <code>
          <span className="kwd">class</span>
          <span className="pln"> </span>
          <span className="typ">A</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <span className="pln"></span>
          <div />
          <span className="com">
            {"  "}&#47;&#47; Unless you override noSuchMethod, using a
          </span>
          <div />
          <span className="pln"></span>
          <span className="com">
            {"  "}&#47;&#47; non-existent member results in a NoSuchMethodError.
          </span>
          <div />
          <span className="pln">{"  "}@override</span>
          <div />
          <span className="typ">{"  "}void</span>
          <span className="pln"> </span>
          <span className="highlight">
            <span className="pln">noSuchMethod</span>
          </span>
          <span className="pun">(</span>
          <span className="typ">Invocation</span>
          <span className="pln"> invocation</span>
          <span className="pun">)</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln">{"    "}print</span>
          <span className="pun">(</span>
          <span className="str">
            &#39;You tried to use a non-existent member: &#39;
          </span>
          <div />
          <span className="pln"></span>
          <span className="str">
            {"      "}&#39;$&#123;invocation.memberName&#125;&#39;
          </span>
          <span className="pun">);</span>
          <div />
          <span className="pln"></span>
          <span className="pun">{"  "}&#125;</span>
          <span className="pln"></span>
          <div />
          <span className="pun">&#125;</span>
        </code>
      </pre>
      <p>
        구현되지 않은 함수가 다음 중 하나라도 만족한다면, 그 함수는 호출 할 수
        없습니다.
      </p>
      <ul className="ll">
        <li>
          리시버가 static 타입{" "}
          <code className="language-plaintext highlighter-rouge">dynamic</code>
          일 때.
        </li>
        <li>
          리시버는 구현되지 않은 메서드(추상 메스드는 가능)를 정의하는 static
          타입을 가지며, 리시버의 dynamic 타입은 클래스{" "}
          <code className="language-plaintext highlighter-rouge">Object</code>와
          다른{" "}
          <code className="language-plaintext highlighter-rouge">
            noSuchMethod()
          </code>
          를 구현 했을 떄.
        </li>
      </ul>
      더 자세한 정보를 원한다면,{" "}
      <CAnchor
        text="noSuchMethod forwarding specification"
        href="https://github.com/dart-lang/sdk/blob/main/docs/language/informal/nosuchmethod-forwarding.md"
      />
      를 참고하세요.
    </>
  );
};

export default ExtendingAClass;
