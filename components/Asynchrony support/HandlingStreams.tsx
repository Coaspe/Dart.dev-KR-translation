import Ccode from "../Custom/Ccode";

const HandlingStreams = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "18px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="handling-streams"
        className="font-noto text-primaryTitleTextColor"
      >
        스트림 다루기
      </h2>
      <p>스트림에서 값을 가져오고 싶다면, 두 가지 옵션이 있습니다.</p>
      <ul className="ll">
        <li>
          <code className="language-plaintext highlighter-rouge">async</code> 와{" "}
          <em>비동기 for문</em> (
          <code className="language-plaintext highlighter-rouge">
            await for
          </code>
          )을 사용하세요.
        </li>
        <li>
          <a href="/guides/libraries/library-tour#stream">Library tour</a>에
          나와있는 것 처럼, Stream API를 사용하세요.
        </li>
      </ul>
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
          <strong>Note:</strong>{" "}
          <code className="language-plaintext highlighter-rouge">
            await for
          </code>
          를 사용하기 전에, 이것의 사용이 코드를 더 간결하게 만드는지 확인하고,
          스트림의 모든 결과를 확실히 기다릴 것인지 정하세요. 예를 들면, UI
          이벤트 리스너는 끝임없는 이벤트의 스트림을 전송하므로{" "}
          <code className="language-plaintext highlighter-rouge">
            await for
          </code>{" "}
          를 사용하면 <strong>안됩니다</strong>.
        </p>
      </aside>
      <p>비동기 for문은 다음과 같은 형태를 가집니다.</p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">await</span>
            <span className="pln"> </span>
            <span className="kwd">for</span>
            <span className="pln"> </span>
            <span className="pun">(</span>
            <span className="pln">varOrType identifier </span>
            <span className="kwd">in</span>
            <span className="pln"> expression</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="com">
              {"  "}&#47;&#47; Executes each time the stream emits a value.
            </span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
      <p>
        위 <Ccode text="expression" className="italic" />의 결과는 Stream
        타입이어야 합니다. 실행의 흐름은 다음과 같습니다.
      </p>
      <ol>
        <li>스트림이 값을 내놓을 때 까지 기다립니다.</li>
        <li>도출된 값을 변수로 설정하여 for문의 바디를 실행합니다.</li>
        <li>스트림이 끝날 때까지 1과 2를 반복합니다.</li>
      </ol>
      <p>
        스트림 listening을 끝내고 싶다면, for문을 끝내고 stream을
        unsubscribes하는 <Ccode text="break" />나 <Ccode text="return" />을
        사용하면 됩니다.
      </p>
      <p>
        <strong>
          비동기 for문을 구현 할 때 런타임 에러가 발생하면,
          <code className="language-plaintext highlighter-rouge">
            await for
          </code>{" "}
          이 <code className="language-plaintext highlighter-rouge">async</code>{" "}
          함수 안에 있는지 확인하세요.
        </strong>
        예를 들면, 비동기 for문을 앱의{" "}
        <code className="language-plaintext highlighter-rouge">main()</code>{" "}
        함수에 사용하고 싶다면,{" "}
        <code className="language-plaintext highlighter-rouge">main()</code>{" "}
        함수의 바디는{" "}
        <code className="language-plaintext highlighter-rouge">async</code>로
        마크되어야 합니다.
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
          <span className="pln"></span>
          <span className="com">{"  "}&#47;&#47; ...</span>
          <div />
          <span className="pln"></span>
          <span className="highlight">
            <span className="kwd">{"  "}await</span>
            <span className="pln"> </span>
            <span className="kwd">for</span>
          </span>
          <span className="pln"> </span>
          <span className="pun">(</span>
          <span className="kwd">final</span>
          <span className="pln"> request </span>
          <span className="kwd">in</span>
          <span className="pln"> requestServer</span>
          <span className="pun">)</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln">{"    "}handleRequest</span>
          <span className="pun">(</span>
          <span className="pln">request</span>
          <span className="pun">);</span>
          <div />
          <span className="pln"></span>
          <span className="pun">{"  "}&#125;</span>
          <div />
          <span className="pln"></span>
          <span className="com">{"  "}&#47;&#47; ...</span>
          <div />
          <span className="pln"></span>
          <span className="pun">&#125;</span>
        </code>
      </pre>
      <p>
        비동기 프로그래밍에 대해 더 자세히 알고 싶다면 library tour의{" "}
        <a href="/guides/libraries/library-tour#dartasync---asynchronous-programming">
          dart:async
        </a>{" "}
        섹션을 참고하세요.
      </p>
    </>
  );
};

export default HandlingStreams;
