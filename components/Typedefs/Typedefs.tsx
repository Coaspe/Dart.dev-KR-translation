import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Typedefs = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="typedefs"
        className="font-noto text-primaryTitleTextColor"
      >
        Typedefs
      </h2>
      <p>
        타입 앨리어스 - <Ccode text="typedef" /> 키워드로 선언 되기 때문에{" "}
        <span className="italic">typedef</span>로도 불립니다. - 는 타입을
        참조하는 간결한 방법입니다. 다음은 <Ccode text="IntList" />
        라는 타입 앨리어스를 선언하고, 사용하는 예제입니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">typedef</span>
            <span className="pln"> </span>
            <span className="typ">IntList</span>
            <span className="pln"> </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="typ">List</span>
            <span className="pun">&lt;</span>
            <span className="typ">int</span>
            <span className="pun">&gt;;</span>
            <div />
            <span className="pln"></span>
            <span className="typ">IntList</span>
            <span className="pln"> il </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="pun">[</span>
            <span className="lit">1</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="lit">2</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="lit">3</span>
            <span className="pun">];</span>
          </pre>
        </div>
      </div>
      <p>타입 앨리어스는 타입 매개변수를 가집니다.</p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">typedef</span>
            <span className="pln"> </span>
            <span className="typ">ListMapper</span>
            <span className="pun">&lt;</span>
            <span className="typ">X</span>
            <span className="pun">&gt;</span>
            <span className="pln"> </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="typ">Map</span>
            <span className="pun">&lt;</span>
            <span className="typ">X</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="typ">List</span>
            <span className="pun">&lt;</span>
            <span className="typ">X</span>
            <span className="pun">&gt;&gt;;</span>
            <div />
            <span className="pln"></span>
            <span className="typ">Map</span>
            <span className="pun">&lt;</span>
            <span className="typ">String</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="typ">List</span>
            <span className="pun">&lt;</span>
            <span className="typ">String</span>
            <span className="pun">&gt;&gt;</span>
            <span className="pln"> m1 </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="pun">{};</span>
            <span className="pln"> </span>
            <span className="com">&#47;&#47; Verbose.</span>
            <div />
            <span className="pln"></span>
            <span className="typ">ListMapper</span>
            <span className="pun">&lt;</span>
            <span className="typ">String</span>
            <span className="pun">&gt;</span>
            <span className="pln"> m2 </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="pun">{};</span>
            <span className="pln"> </span>
            <span className="com">
              &#47;&#47; Same thing but shorter and clearer.
            </span>
          </pre>
        </div>
      </div>
      <aside className="alert alert-info" role="alert">
        <p>
          <i className="" data-fa-i2svg="">
            <svg
              className="svg-inline--fa fa-code-branch fa-w-12"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="code-branch"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"
              ></path>
            </svg>
          </i>{" "}
          <strong>Version note:</strong>
          2.13 버전 이전에는, typedefs는 함수 타입에만 사용이 가능했습니다.
          새로운 typedefs를 사용하기 위해서는 최소 2.13.
          <a href="/guides/language/evolution#language-versioning">
            language version
          </a>{" "}
          이 필요합니다.
        </p>
      </aside>
      <p>
        우리(dart.dev)는{" "}
        <CAnchor
          text="인라인 함수 타입"
          href="https://dart.dev/guides/language/effective-dart/design#prefer-inline-function-types-over-typedefs"
        />
        를 함수의 typedefs 대신 사용하는 것을 추천합니다. 그러나 함수의
        typedefs는 여전히 사용해도 됩니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">typedef</span>
            <span className="pln"> </span>
            <span className="typ">Compare</span>
            <span className="pun">&lt;</span>
            <span className="typ">T</span>
            <span className="pun">&gt;</span>
            <span className="pln"> </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="typ">int</span>
            <span className="pln"> </span>
            <span className="typ">Function</span>
            <span className="pun">(</span>
            <span className="typ">T</span>
            <span className="pln"> a</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="typ">T</span>
            <span className="pln"> b</span>
            <span className="pun">);</span>
            <div> </div>
            <span className="pln"></span>
            <span className="typ">int</span>
            <span className="pln"> sort</span>
            <span className="pun">(</span>
            <span className="typ">int</span>
            <span className="pln"> a</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="typ">int</span>
            <span className="pln"> b</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">=&gt;</span>
            <span className="pln"> a </span>
            <span className="pun">-</span>
            <span className="pln"> b</span>
            <span className="pun">;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="typ">void</span>
            <span className="pln"> main</span>
            <span className="pun">()</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}assert</span>
            <span className="pun">(</span>
            <span className="pln">sort </span>
            <span className="kwd">is</span>
            <span className="pln"> </span>
            <span className="typ">Compare</span>
            <span className="pun">&lt;</span>
            <span className="typ">int</span>
            <span className="pun">&gt;);</span>
            <span className="pln"> </span>
            <span className="com">&#47;&#47; True!</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
    </>
  );
};

export default Typedefs;
