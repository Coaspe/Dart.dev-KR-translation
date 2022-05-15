import Ccode from "../Custom/Ccode";

const ClassVariablesAndMethods = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="class-variables-and-methods"
        className="font-noto text-primaryTitleTextColor"
      >
        클래스 변수와 메소드
      </h2>
      <p>
        <Ccode text="static" /> 키워드를 사용해 class-wide한 변수와 메소드를
        선언하세요.
      </p>
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
        Static variables
      </h3>
      <p>
        Static 변수(클래스 변수)는 class-wide한 상수와, 상태를 정의 할 때
        유용합니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">class</span>
            <span className="pln"> </span>
            <span className="typ">Queue</span>
            <span className="pln"> </span>
            <span className="pun">&123;</span>
            <span className="pln"></span>
            <span className="kwd">{"  "}static</span>
            <span className="pln"> </span>
            <span className="kwd">const</span>
            <span className="pln"> initialCapacity </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="lit">16</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="com">{"  "}&#47;&#47; ···</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&125;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="typ">void</span>
            <span className="pln"> main</span>
            <span className="pun">()</span>
            <span className="pln"> </span>
            <span className="pun">&123;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}assert</span>
            <span className="pun">(</span>
            <span className="typ">Queue</span>
            <span className="pun">.</span>
            <span className="pln">initialCapacity </span>
            <span className="pun">==</span>
            <span className="pln"> </span>
            <span className="lit">16</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&125;</span>
          </pre>
        </div>
      </div>
      <p>Static 변수는 사용되기 전에는 초기화되지 않습니다.</p>
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
          <strong>Note:</strong>이 페이지는{" "}
          <a href="/guides/language/effective-dart/style#identifiers">
            style guide recommendation
          </a>
          에서 선호하는{" "}
          <code className="language-plaintext highlighter-rouge">
            lowerCamelCase
          </code>{" "}
          를 상수 선언에 사용합니다.
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
        id="static-methods"
      >
        Static methods
      </h3>
      <p>
        Static 메소드(클래스 메소드)는 인스턴스 위에서 실행되지 않기 때문에{" "}
        <Ccode text="this" />에 접근 할 수 없습니다. 그러나 static 변수에 대한
        접근은 가능합니다. 다음 예제에서 코드는 클래스에서 직접 static 메소드를
        실행합니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">import</span>
            <span className="pln"> </span>
            <span className="str">&#39;dart:math&#39;</span>
            <span className="pun">;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="kwd">class</span>
            <span className="pln"> </span>
            <span className="typ">Point</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}double</span>
            <span className="pln"> x</span>
            <span className="pun">,</span>
            <span className="pln"> y</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}Point</span>
            <span className="pun">(</span>
            <span className="kwd">this</span>
            <span className="pun">.</span>
            <span className="pln">x</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="kwd">this</span>
            <span className="pun">.</span>
            <span className="pln">y</span>
            <span className="pun">);</span>
            <div> </div>
            <span className="pln"></span>
            <span className="kwd">{"  "}static</span>
            <span className="pln"> </span>
            <span className="typ">double</span>
            <span className="pln"> distanceBetween</span>
            <span className="pun">(</span>
            <span className="typ">Point</span>
            <span className="pln"> a</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="typ">Point</span>
            <span className="pln"> b</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"    "}var</span>
            <span className="pln"> dx </span>
            <span className="pun">=</span>
            <span className="pln"> a</span>
            <span className="pun">.</span>
            <span className="pln">x </span>
            <span className="pun">-</span>
            <span className="pln"> b</span>
            <span className="pun">.</span>
            <span className="pln">x</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"    "}var</span>
            <span className="pln"> dy </span>
            <span className="pun">=</span>
            <span className="pln"> a</span>
            <span className="pun">.</span>
            <span className="pln">y </span>
            <span className="pun">-</span>
            <span className="pln"> b</span>
            <span className="pun">.</span>
            <span className="pln">y</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"    "}return</span>
            <span className="pln"> sqrt</span>
            <span className="pun">(</span>
            <span className="pln">dx </span>
            <span className="pun">*</span>
            <span className="pln"> dx </span>
            <span className="pun">+</span>
            <span className="pln"> dy </span>
            <span className="pun">*</span>
            <span className="pln"> dy</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="pun">{"  "}&#125;</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
            <span className="pln"></span>
            <div> </div>
            <span className="typ">void</span>
            <span className="pln"> main</span>
            <span className="pun">()</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}var</span>
            <span className="pln"> a </span>
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
            <span className="kwd">{"  "}var</span>
            <span className="pln"> b </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="typ">Point</span>
            <span className="pun">(</span>
            <span className="lit">4</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="lit">4</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}var</span>
            <span className="pln"> distance </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="typ">Point</span>
            <span className="pun">.</span>
            <span className="pln">distanceBetween</span>
            <span className="pun">(</span>
            <span className="pln">a</span>
            <span className="pun">,</span>
            <span className="pln"> b</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}assert</span>
            <span className="pun">(</span>
            <span className="lit">2.8</span>
            <span className="pln"> </span>
            <span className="pun">&lt;</span>
            <span className="pln"> distance </span>
            <span className="pun">&amp;&amp;</span>
            <span className="pln"> distance </span>
            <span className="pun">&lt;</span>
            <span className="pln"> </span>
            <span className="lit">2.9</span>
            <span className="pun">);</span>
            <div />
            <span className="pln">{"  "}print</span>
            <span className="pun">(</span>
            <span className="pln">distance</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
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
          범용적으로 자주 쓰이는 기능을 구현하기 위해서는 static 메소드 대신
          top-level 메소드를 사용하는 것을 고려해보세요.
        </p>
      </aside>
      <p>
        Static 메소드를 컴파일 타임 상수로 사용 할 수 있습니다. 예를 들면, 상수
        생성자의 매개변수로 static 메소드를 넘겨 줄 수 있습니다.
      </p>
    </>
  );
};

export default ClassVariablesAndMethods;
