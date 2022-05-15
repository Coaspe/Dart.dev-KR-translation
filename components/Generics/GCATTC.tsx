const GCATTC = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="generic-collections-and-the-types-they-contain"
        className="font-noto text-primaryTitleTextColor"
      >
        제네릭 콜렉션과 그것이 가지는 타입들
      </h2>
      <p>
        Dart 제네릭 타입은 구체화 되어있습니다. 그것은 런타임에 타입들에 대한
        정보를 가져온다는 것을 의미합니다. 예를 들면, 콜렉션의 타입을 다음과
        같이 테스트 할 수 있습니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">var</span>
            <span className="pln"> names </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="pun">&lt;</span>
            <span className="typ">String</span>
            <span className="pun">&gt;[];</span>
            <div />
            <span className="pln">names</span>
            <span className="pun">.</span>
            <span className="pln">addAll</span>
            <span className="pun">([</span>
            <span className="str">&#39;Seth&#39;</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="str">&#39;Kathy&#39;</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="str">&#39;Lars&#39;</span>
            <span className="pun">]);</span>
            <div />
            <span className="pln">print</span>
            <span className="pun">(</span>
            <span className="pln">names </span>
            <span className="kwd">is</span>
            <span className="pln"> </span>
            <span className="typ">List</span>
            <span className="pun">&lt;</span>
            <span className="typ">String</span>
            <span className="pun">&gt;);</span>
            <span className="pln"> </span>
            <span className="com">&#47;&#47; true</span>
          </pre>
        </div>
      </div>
      <aside className="alert alert-info" role="alert">
        <p>
          <i>
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
          다트와 다르게, Java의 제네릭은 <em>erasure</em>를 사용하고, 제네릭
          타입 매개변수는 런타임에 삭제됩니다. 자바에서, 어떤 객체가 List인지
          테스트 할 수는 있지만,{" "}
          <code className="language-plaintext highlighter-rouge">
            List&lt;String&gt;
          </code>
          인지 테스트 하는 것은 불가능합니다. .
        </p>
      </aside>
    </>
  );
};

export default GCATTC;
