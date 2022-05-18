import Ccode from "../Custom/Ccode";

const HandlingFutures = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "18px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="handling-futures"
        className="font-noto text-primaryTitleTextColor"
      >
        Futures 다루기
      </h2>
      <p>
        당신이 만약 완료된 Future의 결과를 원한다면, 두가지 옵션이 있습니다.
      </p>
      <ul className="ll">
        <li>
          <code className="language-plaintext highlighter-rouge">async</code> 와{" "}
          <code className="language-plaintext highlighter-rouge">await</code>을{" "}
          <a href="/codelabs/async-await">asynchronous programming codelab</a>에
          나와있는 것 처럼 사용하세요.
        </li>
        <li>
          Future API를{" "}
          <a href="/guides/libraries/library-tour#future">library tour</a>에
          나와있는 것 처럼 사용하세요. .
        </li>
      </ul>
      <p>
        <Ccode text="async" />나 <Ccode text="await" />을 사용하는 코드는
        비동기적이지만, 외관상 동기적인 코드와 비슷합니다. 예를 들면, 다음은{" "}
        <Ccode text="await" /> 을 사용해 비동기 함수의 결과를 기다리는 코드
        입니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">await</span>
            <span className="pln"> lookUpVersion</span>
            <span className="pun">();</span>
          </pre>
        </div>
      </div>
      <p>
        <Ccode text="await" />을 사용하려면, 해당 코드는 <Ccode text="async" />{" "}
        로 마크된, <Ccode text="async" /> 함수 안에 있어야 합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <code>
          <span className="typ">Future</span>
          <span className="pun">&lt;</span>
          <span className="typ">void</span>
          <span className="pun">&gt;</span>
          <span className="pln"> checkVersion</span>
          <span className="pun">()</span>
          <span className="pln"> </span>
          <span className="highlight">
            <span className="kwd">async</span>
          </span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln"></span>
          <span className="kwd">{"  "}var</span>
          <span className="pln"> version </span>
          <span className="pun">=</span>
          <span className="pln"> </span>
          <span className="highlight">
            <span className="kwd">await</span>
          </span>
          <span className="pln"> lookUpVersion</span>
          <span className="pun">();</span>
          <div />
          <span className="pln"></span>
          <span className="com">
            {"  "}&#47;&#47; Do something with version
          </span>
          <div />
          <span className="pln"></span>
          <span className="pun">&#125;</span>
        </code>
      </pre>
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
          {"  "}비록 an{" "}
          <code className="language-plaintext highlighter-rouge">async</code>{" "}
          비동기 함수는 시간이 많이 걸리는 작업을 수행할 수 있지만, 이러한
          작업을 기다리지 않습니다. 대신에,{" "}
          <code className="language-plaintext highlighter-rouge">async</code>{" "}
          함수는 첫번째{" "}
          <code className="language-plaintext highlighter-rouge">await</code>{" "}
          구문을 찾을 때까지 실행됩니다. (
          <a
            href="https://github.com/dart-lang/sdk/blob/main/docs/newsletter/20170915.md#synchronous-async-start"
            className="external"
          >
            details
          </a>
          ). 그 후에 Future object를 반환하고,
          <code className="language-plaintext highlighter-rouge">
            await
          </code>{" "}
          구문이 끝난 뒤 코드 실행을 재개합니다.
        </p>
      </aside>
      <p>
        <Ccode text="try" />, <Ccode text="catch" />, <Ccode text="finally" />
        를 사용하여 <Ccode text="await" />을 사용한 코드의 에러를 다루고,
        깔끔하게 정리하세요.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">try</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln">{"  "}version </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="kwd">await</span>
            <span className="pln"> lookUpVersion</span>
            <span className="pun">();</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
            <span className="pln"> </span>
            <span className="kwd">catch</span>
            <span className="pln"> </span>
            <span className="pun">(</span>
            <span className="pln">e</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="com">
              {"  "}&#47;&#47; React to inability to look up the version
            </span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
      <p>
        <Ccode text="async" /> 함수 안에 여러개의 <Ccode text="await" />를
        사용해도 됩니다. 예를 들면, 다음의 코드는 3번 함수의 결과를 기다립니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">var</span>
            <span className="pln"> entrypoint </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="kwd">await</span>
            <span className="pln"> findEntryPoint</span>
            <span className="pun">();</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">var</span>
            <span className="pln"> exitCode </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="kwd">await</span>
            <span className="pln"> runExecutable</span>
            <span className="pun">(</span>
            <span className="pln">entrypoint</span>
            <span className="pun">,</span>
            <span className="pln"> args</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">await</span>
            <span className="pln"> flushThenExit</span>
            <span className="pun">(</span>
            <span className="pln">exitCode</span>
            <span className="pun">);</span>
          </pre>
        </div>
      </div>
      <p>
        <Ccode text="await" /> <Ccode className="italic" text="expression" />
        에서 <Ccode className="italic" text="expression" />의 값은 보통 Future
        입니다. 만약 아니라면, 자동으로 Future가 값을 감싸게 됩니다. 이 Future
        객체는 객체를 반환하는 promise 를 나타냅니다. <Ccode text="await" />{" "}
        <Ccode className="italic" text="expression" />의 값은 그 반환된 객체
        입니다. await 표현은 그 객체가 사용 가능해질 때까지 실행을 멈춥니다.
      </p>
      <p>
        <strong>
          If you get a compile-time error when using{" "}
          <code className="language-plaintext highlighter-rouge">await</code>을
          사용하면서 컴파일 타임 에러가 발생했다면,
          <code className="language-plaintext highlighter-rouge">await</code>이
          <code className="language-plaintext highlighter-rouge">async</code>{" "}
          함수 안에 있는지 확인해보세요.
        </strong>
        예를 들면, 앱의{" "}
        <code className="language-plaintext highlighter-rouge">main()</code>{" "}
        함수의 바디에{" "}
        <code className="language-plaintext highlighter-rouge">await</code>{" "}
        함수를 사용한다면,{" "}
        <code className="language-plaintext highlighter-rouge">main()</code> 는{" "}
        <code className="language-plaintext highlighter-rouge">async</code>로
        마크되어 있어야 합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <code>
          <span className="typ">void</span>
          <span className="pln"> main</span>
          <span className="pun">()</span>
          <span className="pln"> </span>
          <span className="highlight">
            <span className="kwd">async</span>
          </span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln">{"  "}checkVersion</span>
          <span className="pun">();</span>
          <div />
          <span className="pln">{"  "}print</span>
          <span className="pun">(</span>
          <span className="str">&#39;In main: version is $&#123;</span>
          <span className="highlight">
            <span className="str">await</span>
          </span>
          <span className="str"> lookUpVersion()&#125;&#39;</span>
          <span className="pun">);</span>
          <div />
          <span className="pln"></span>
          <span className="pun">&#125;</span>
        </code>
      </pre>
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
          <strong>Note: </strong>
          앞의 예제에서{" "}
          <code className="language-plaintext highlighter-rouge">
            async
          </code>{" "}
          함수 (
          <code className="language-plaintext highlighter-rouge">
            checkVersion()
          </code>
          ) 의 결과를 기다리지 않고 사용했습니다. — 이런 관행은 코드가 해당
          함수의 실행이 끝났다고 가정하면 문제를 일으킵니다. 이런 문제를 피하기
          위해
          <a href="/tools/linter-rules#unawaited_futures">
            unawaited_futures linter rule
          </a>{" "}
          를 사용하세요. .
        </p>
      </aside>
      <p>
        Future,{" "}
        <code className="language-plaintext highlighter-rouge">async</code>,{" "}
        <code className="language-plaintext highlighter-rouge">await</code>, 의
        사용을 더 자세히 배우고 싶다면,{" "}
        <a href="/codelabs/async-await">asynchronous programming codelab</a>를
        참고하세요.
      </p>
    </>
  );
};

export default HandlingFutures;
