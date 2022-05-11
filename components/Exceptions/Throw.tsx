const Throw = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="throw"
        className="font-noto text-primaryTitleTextColor"
      >
        Throw
      </h2>
      <p>다음은 예외를 발생시키는 예제입니다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">throw</span>
        <span className="pln"> </span>
        <span className="typ">FormatException</span>
        <span className="pun">(</span>
        <span className="str">&#39;Expected at least 1 section&#39;</span>
        <span className="pun">);</span>
      </pre>
      <p>임의의 객체를 예외로 발생시키는 것 또한 가능합니다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">throw</span>
        <span className="pln"> </span>
        <span className="str">&#39;Out of llamas!&#39;</span>
        <span className="pun">;</span>
      </pre>
      <aside className="alert alert-info" role="alert">
        <p className="mb-0">
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
          실제 사용 가능한 수준의 코드들은
          <a
            href="https://api.dart.dev/stable/dart-core/Error-class.html"
            className="external"
          >
            <code className="language-plaintext highlighter-rouge">Error</code>
          </a>{" "}
          나
          <a
            href="https://api.dart.dev/stable/dart-core/Exception-class.html"
            className="external"
          >
            <code className="language-plaintext highlighter-rouge">
              Exception
            </code>
          </a>
          에 구현되어 있는 타입을 발생시킵니다.
        </p>
      </aside>
      <p>
        예외를 발생시키는 것은 표현식(expression)이기 때문에 표현식이 가능한
        어떤 곳이든 &#61;&#62; 구문을 사용해서 예외를 발생시킬 수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="typ">void</span>
        <span className="pln"> distanceTo</span>
        <span className="pun">(</span>
        <span className="typ">Point</span>
        <span className="pln"> other</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> </span>
        <span className="kwd">throw</span>
        <span className="pln"> </span>
        <span className="typ">UnimplementedError</span>
        <span className="pun">();</span>
      </pre>
    </>
  );
};

export default Throw;
