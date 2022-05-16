import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Usinglibraries = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="using-libraries"
        className="font-noto text-primaryTitleTextColor"
      >
        라이브러리 사용하기(Using libraries)
      </h2>
      <p>
        어떤 라이브러리의 네임스페이스가 다른 라이브러리에서 사용된다면,{" "}
        <Ccode text="import" />를 사용하세요.
      </p>
      <p>
        예를 들면, Dart 웹앱은 보통{" "}
        <a href="https://api.dart.dev/stable/dart-html" className="external">
          dart:html
        </a>{" "}
        라이브러리를 사용합니다. 다음 예제 처럼 말이죠.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">import</span>
            <span className="pln"> </span>
            <span className="str">&#39;dart:html&#39;</span>
            <span className="pun">;</span>
          </pre>
        </div>
      </div>
      <p>
        <Ccode text="import" />가 필요한 인자는 라이브러리를 특정 지을 수 있는
        URI 뿐입니다. 내장 라이브러리를 사용하기 위해서는,{" "}
        <Ccode text="dart:" />
        라는 특별한 규칙을 따릅니다. 이외의 라이브러리를 사용하고 싶다면, 파일
        시스템 경로나 <Ccode text="package:" /> 를 사용하면 됩니다.{" "}
        <Ccode text="package:" /> 는 pub 같은 패키지 매니저들이 제공하는
        라이브러리를 특정 지을 때 사용합니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">import</span>
            <span className="pln"> </span>
            <span className="str">&#39;package:test/test.dart&#39;</span>
            <span className="pun">;</span>
          </pre>
        </div>
      </div>
      <aside className="alert alert-info" role="alert">
        <p>
          <i className="" data-fa-i2svg="">
            <svg
              className="svg-inline--fa fa-info-circle fa-w-16"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="info-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
              ></path>
            </svg>
          </i>{" "}
          <strong>Note:</strong>
          <em>URI</em> 는 uniform resource identifier의 준말 입니다.
          <em>URLs</em> (uniform resource locators)는 URI의 종류 입니다.
        </p>
      </aside>
      <h3
        style={{
          fontSize: "18px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        className="font-noto text-primaryTitleTextColor"
        id="static-variables"
      >
        라이브러리 프리픽스 특정하기(Specifying a library prefix)
      </h3>
      <p>
        같은 식별자를 가지는 두 개의 라이브러리를 import 하면 충돌이 발생합니다.
        그럴 때 프리픽스를 특정하면 문제가 해결됩니다. 예를 들면, 라이브러리1 과
        라이브러리2가 Element 클래스를 가진다고 하면, 코드는 다음과 같을 것
        입니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">import</span>
            <span className="pln"> </span>
            <span className="str">&#39;package:lib1/lib1.dart&#39;</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">import</span>
            <span className="pln"> </span>
            <span className="str">&#39;package:lib2/lib2.dart&#39;</span>
            <span className="pln"> </span>
            <span className="kwd">as</span>
            <span className="pln"> lib2</span>
            <span className="pun">;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="com">&#47;&#47; Uses Element from lib1.</span>
            <div />
            <span className="pln"></span>
            <span className="typ">Element</span>
            <span className="pln"> element1 </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="typ">Element</span>
            <span className="pun">();</span>
            <div> </div>
            <span className="pln"></span>
            <span className="com">&#47;&#47; Uses Element from lib2.</span>
            <div />
            <span className="pln">lib2</span>
            <span className="pun">.</span>
            <span className="typ">Element</span>
            <span className="pln"> element2 </span>
            <span className="pun">=</span>
            <span className="pln"> lib2</span>
            <span className="pun">.</span>
            <span className="typ">Element</span>
            <span className="pun">();</span>
          </pre>
        </div>
      </div>
      <h3
        style={{
          fontSize: "18px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        className="font-noto text-primaryTitleTextColor"
        id="static-variables"
      >
        라이브러리의 일부만 가져오기(Importing only part of a library)
      </h3>
      <p>
        라이브러리의 일부만 필요하다면, 다음과 같이 라이브러리를 선택적으로
        import 할 수 있습니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="com">&#47;&#47; Import only foo.</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">import</span>
            <span className="pln"> </span>
            <span className="str">&#39;package:lib1/lib1.dart&#39;</span>
            <span className="pln"> </span>
            <span className="kwd">show</span>
            <span className="pln"> foo</span>
            <span className="pun">;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="com">&#47;&#47; Import all names EXCEPT foo.</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">import</span>
            <span className="pln"> </span>
            <span className="str">&#39;package:lib2/lib2.dart&#39;</span>
            <span className="pln"> </span>
            <span className="kwd">hide</span>
            <span className="pln"> foo</span>
            <span className="pun">;</span>
          </pre>
        </div>
      </div>
      <h3
        style={{
          fontSize: "18px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        className="font-noto text-primaryTitleTextColor"
        id="static-variables"
      >
        라이브러리를 느리게 가져오기(Importing only part of a library)
      </h3>
      <p>
        <span className="italic">
          지연된 로딩(lazy loading이라고도 불린다.)
        </span>
        은 웹앱이 라이브러리가 필요할 때 로드하게 해줍니다. 다음은 지연된 로딩을
        사용해야할 케이스 입니다.
      </p>
      <ul className="ll">
        <li>웹앱의 초기 로딩 시간을 줄이기 위해</li>
        <li>
          A/B 테스팅을 진행하기 위해 — 예를 들어, 대안이 되는 알고리즘들의
          구현을 시험해 볼 때가 있다.
        </li>
        <li>
          To load rarely used functionality, such as optional screens and
          dialogs.
        </li>
      </ul>
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
          </i>
          <strong>
            오직 dart2js만 지연된 로딩(deferred loading)을 지원합니다..
          </strong>
          Flutter, Dart VM, 그리고 dartdevc는 deferred loading를 지원하지
          않습니다. 더 자세히 알고 싶다면,{" "}
          <a
            href="https://github.com/dart-lang/sdk/issues/33118"
            className="external"
          >
            issue #33118
          </a>{" "}
          과{" "}
          <a
            href="https://github.com/dart-lang/sdk/issues/27776"
            className="external"
          >
            issue #27776
          </a>{" "}
          를 참고하세요.
        </p>
      </aside>
      <p>
        라이브러리를 필요 할 때 로드하고 싶다면, <Ccode text="deferred as" />를
        사용해 import 하세요.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">import</span>
            <span className="pln"> </span>
            <span className="str">&#39;package:greetings/hello.dart&#39;</span>
            <span className="pln"> </span>
            <span className="kwd">deferred</span>
            <span className="pln"> </span>
            <span className="kwd">as</span>
            <span className="pln"> hello</span>
            <span className="pun">;</span>
          </pre>
        </div>
      </div>
      <p>
        라이브러리를 사용해야 한다면, <Ccode text="loadLibrary()" />를
        라이브러리의 식별자에 사용해 호출하세요.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="typ">Future</span>
            <span className="pun">&lt;</span>
            <span className="typ">void</span>
            <span className="pun">&gt;</span>
            <span className="pln"> greet</span>
            <span className="pun">()</span>
            <span className="pln"> </span>
            <span className="kwd">async</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <span className="pln"></span>
            <span className="kwd">{"  "}await</span>
            <span className="pln"> hello</span>
            <span className="pun">.</span>
            <span className="pln">loadLibrary</span>
            <span className="pun">();</span>
            <div />
            <span className="pln">{"  "}hello</span>
            <span className="pun">.</span>
            <span className="pln">printGreeting</span>
            <span className="pun">();</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
      <p>
        앞선 코드에서, <Ccode text="await" /> 키워드는 라이브러리가 로드 될 때
        까지 실행을 멈춥니다. <Ccode text="async" />와 <Ccode text="await" />에
        대해 더 자세히 알고 싶다면,{" "}
        <CAnchor text="asynchrony support" href="#asynchrony-support" />를
        참고하세요.
      </p>
      <p>
        <Ccode text="loadLibrary()" />를 한 라이브러리에 여러번 호출해도 한 번만
        로드되기 때문에 에러가 발생하지 않습니다.
      </p>
      <p>로딩을 지연시킬 때 다음을 꼭 기억해두세요.</p>
      <ul className="ll">
        <li>
          지연된 라이브러리의 상수는 importing 파일에서는 상수가 아닙니다. 꼭
          기억하세요, 이 상수는 지연된 라이브러리가 로드 되기 전에는 존재하지
          않는 상수 입니다.
        </li>
        <li>
          Importing 파일에서 지연된 라이브러리에 타입을 사용 할 수 없습니다.
          대신, 지연된 라이브러리와 importing 파일 모두에서 가져온 라이브러리로
          인터페이스 타입을 변경하는 것을 고려하세요.
        </li>
        <li>
          Dart는 암묵적으로{" "}
          <code className="language-plaintext highlighter-rouge">
            loadLibrary()
          </code>{" "}
          를{" "}
          <code>
            deferred as <em>namespace</em>
          </code>
          를 사용하여 정의한 네임스페이스에 삽입합니다.
          <code className="language-plaintext highlighter-rouge">
            LoadLibrary()
          </code>{" "}
          는{" "}
          <a href="/guides/libraries/library-tour#future">
            <code className="language-plaintext highlighter-rouge">Future</code>
          </a>
          를 반환합니다 .
        </li>
      </ul>
    </>
  );
};

export default Usinglibraries;
