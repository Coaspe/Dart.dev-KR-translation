import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Methods = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="methods"
        className="font-noto text-primaryTitleTextColor"
      >
        Methods
      </h2>
      <p>메서드(Method)는 객체가 가지고 있는 함수를 뜻합니다.</p>
      <h3
        style={{
          fontSize: "18px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        className="font-noto text-primaryTitleTextColor"
      >
        인스턴스 메서드
      </h3>
      <p>
        객체의 인스턴스 메서드는 인스턴스 변수와 <Ccode text="this" />에 접근 할
        수 있습니다. 다음 예제의 <Ccode text="distanceTo()" /> 메서드가 인스턴스
        메서드의 예입니다.
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
            <span className="kwd">{"  "}final</span>
            <span className="pln"> </span>
            <span className="typ">double</span>
            <span className="pln"> x</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}final</span>
            <span className="pln"> </span>
            <span className="typ">double</span>
            <span className="pln"> y</span>
            <span className="pun">;</span>
            <div> </div>
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
            <span className="typ">{"  "}double</span>
            <span className="pln"> distanceTo</span>
            <span className="pun">(</span>
            <span className="typ">Point</span>
            <span className="pln"> other</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"    "}var</span>
            <span className="pln"> dx </span>
            <span className="pun">=</span>
            <span className="pln"> x </span>
            <span className="pun">-</span>
            <span className="pln"> other</span>
            <span className="pun">.</span>
            <span className="pln">x</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"    "}var</span>
            <span className="pln"> dy </span>
            <span className="pun">=</span>
            <span className="pln"> y </span>
            <span className="pun">-</span>
            <span className="pln"> other</span>
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
            <span className="pln"></span>
            <span className="pun">&#125;</span>
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
      >
        연산자
      </h3>
      <p>
        연산자는 특별한 이름을 가진 인스턴스 메소드 입니다. Dart는 클래스 내에서
        다음의 연산자들을 재정의 할 수 있습니다.
      </p>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">&lt;</code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">+</code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">|</code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &gt;&gt;&gt;
              </code>
            </td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">&gt;</code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">/</code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">^</code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">[]</code>
            </td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &lt;=
              </code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">~/</code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &amp;
              </code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">[]=</code>
            </td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &gt;=
              </code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">*</code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &lt;&lt;
              </code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">~</code>
            </td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">–</code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">%</code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &gt;&gt;
              </code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">==</code>
            </td>
          </tr>
        </tbody>
      </table>
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
          위의 표에{" "}
          <code className="language-plaintext highlighter-rouge">
            !=
          </code> 같은 <a href="#operators">연산자</a>가 없다는 것을 알 수
          있습니다. 왜냐하면 그런 표현들은 문법적 설탕(syntactic sugar)이기
          때문입니다. 예를 들어,{" "}
          <code className="language-plaintext highlighter-rouge">e1 != e2</code>{" "}
          같은 표현은{" "}
          <code className="language-plaintext highlighter-rouge">
            !(e1 == e2)
          </code>{" "}
          의 문법적 설탕(syntactic sugar)입니다 .
        </p>
      </aside>
      <p>
        연산자 선언은 <Ccode text="operator" /> 식별자를 사용합니다. 다음의
        예제는 vector 덧셈(
        <Ccode text="+" />
        )과 뺄셈(
        <Ccode text="-" />
        )를 정의합니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">class</span>
            <span className="pln"> </span>
            <span className="typ">Vector</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}final</span>
            <span className="pln"> </span>
            <span className="typ">int</span>
            <span className="pln"> x</span>
            <span className="pun">,</span>
            <span className="pln"> y</span>
            <span className="pun">;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="typ">{"  "}Vector</span>
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
            <span className="typ">{"  "}Vector</span>
            <span className="pln"> </span>
            <span className="kwd">operator</span>
            <span className="pln"> </span>
            <span className="pun">+(</span>
            <span className="typ">Vector</span>
            <span className="pln"> v</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">=&gt;</span>
            <span className="pln"> </span>
            <span className="typ">Vector</span>
            <span className="pun">(</span>
            <span className="pln">x </span>
            <span className="pun">+</span>
            <span className="pln"> v</span>
            <span className="pun">.</span>
            <span className="pln">x</span>
            <span className="pun">,</span>
            <span className="pln"> y </span>
            <span className="pun">+</span>
            <span className="pln"> v</span>
            <span className="pun">.</span>
            <span className="pln">y</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}Vector</span>
            <span className="pln"> </span>
            <span className="kwd">operator</span>
            <span className="pln"> </span>
            <span className="pun">-(</span>
            <span className="typ">Vector</span>
            <span className="pln"> v</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">=&gt;</span>
            <span className="pln"> </span>
            <span className="typ">Vector</span>
            <span className="pun">(</span>
            <span className="pln">x </span>
            <span className="pun">-</span>
            <span className="pln"> v</span>
            <span className="pun">.</span>
            <span className="pln">x</span>
            <span className="pun">,</span>
            <span className="pln"> y </span>
            <span className="pun">-</span>
            <span className="pln"> v</span>
            <span className="pun">.</span>
            <span className="pln">y</span>
            <span className="pun">);</span>
            <div> </div>
            <span className="pln"></span>
            <span className="com">
              {"  "}&#47;&#47; Operator == and hashCode not shown.
            </span>
            <div />
            <span className="pln"></span>
            <span className="com">{"  "}&#47;&#47; ···</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="typ">void</span>
            <span className="pln"> main</span>
            <span className="pun">()</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}final</span>
            <span className="pln"> v </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="typ">Vector</span>
            <span className="pun">(</span>
            <span className="lit">2</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="lit">3</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}final</span>
            <span className="pln"> w </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="typ">Vector</span>
            <span className="pun">(</span>
            <span className="lit">2</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="lit">2</span>
            <span className="pun">);</span>
            <div> </div>
            <span className="pln"></span>
            <span className="kwd">{"  "}assert</span>
            <span className="pun">(</span>
            <span className="pln">v </span>
            <span className="pun">+</span>
            <span className="pln"> w </span>
            <span className="pun">==</span>
            <span className="pln"> </span>
            <span className="typ">Vector</span>
            <span className="pun">(</span>
            <span className="lit">4</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="lit">5</span>
            <span className="pun">));</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}assert</span>
            <span className="pun">(</span>
            <span className="pln">v </span>
            <span className="pun">-</span>
            <span className="pln"> w </span>
            <span className="pun">==</span>
            <span className="pln"> </span>
            <span className="typ">Vector</span>
            <span className="pun">(</span>
            <span className="lit">0</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="lit">1</span>
            <span className="pun">));</span>
            <span className="pln"></span>
            <div />
            <span className="pun">&#125;</span>
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
      >
        Getter 와 Setter
      </h3>
      <p>
        Getter와 setter는 객체의 프로퍼티를 읽고(get) 쓰는(set) 함수 입니다.
        모든 인스턴스 변수는 암묵적으로 getter와 setter를 가진다는 것을
        기억하세요. <Ccode text="get" /> 와 <Ccode text="set" /> 키워드를
        사용하여 getter와 setter를 구연하므로써 추가 프로퍼티를 생성 할 수
        있습니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">class</span>
            <span className="pln"> </span>
            <span className="typ">Rectangle</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}double</span>
            <span className="pln"> left</span>
            <span className="pun">,</span>
            <span className="pln"> top</span>
            <span className="pun">,</span>
            <span className="pln"> width</span>
            <span className="pun">,</span>
            <span className="pln"> height</span>
            <span className="pun">;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="typ">{"  "}Rectangle</span>
            <span className="pun">(</span>
            <span className="kwd">this</span>
            <span className="pun">.</span>
            <span className="pln">left</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="kwd">this</span>
            <span className="pun">.</span>
            <span className="pln">top</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="kwd">this</span>
            <span className="pun">.</span>
            <span className="pln">width</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="kwd">this</span>
            <span className="pun">.</span>
            <span className="pln">height</span>
            <span className="pun">);</span>
            <div> </div>
            <span className="pln"></span>
            <span className="com">
              {"  "}&#47;&#47; Define two calculated properties: right and
              bottom.
            </span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}double</span>
            <span className="pln"> </span>
            <span className="kwd">get</span>
            <span className="pln"> right </span>
            <span className="pun">=&gt;</span>
            <span className="pln"> left </span>
            <span className="pun">+</span>
            <span className="pln"> width</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}set</span>
            <span className="pln"> right</span>
            <span className="pun">(</span>
            <span className="typ">double</span>
            <span className="pln"> value</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">=&gt;</span>
            <span className="pln"> left </span>
            <span className="pun">=</span>
            <span className="pln"> value </span>
            <span className="pun">-</span>
            <span className="pln"> width</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}double</span>
            <span className="pln"> </span>
            <span className="kwd">get</span>
            <span className="pln"> bottom </span>
            <span className="pun">=&gt;</span>
            <span className="pln"> top </span>
            <span className="pun">+</span>
            <span className="pln"> height</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}set</span>
            <span className="pln"> bottom</span>
            <span className="pun">(</span>
            <span className="typ">double</span>
            <span className="pln"> value</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">=&gt;</span>
            <span className="pln"> top </span>
            <span className="pun">=</span>
            <span className="pln"> value </span>
            <span className="pun">-</span>
            <span className="pln"> height</span>
            <span className="pun">;</span>
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
            <span className="pln"> rect </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="typ">Rectangle</span>
            <span className="pun">(</span>
            <span className="lit">3</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="lit">4</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="lit">20</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="lit">15</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}assert</span>
            <span className="pun">(</span>
            <span className="pln">rect</span>
            <span className="pun">.</span>
            <span className="pln">left </span>
            <span className="pun">==</span>
            <span className="pln"> </span>
            <span className="lit">3</span>
            <span className="pun">);</span>
            <div />
            <span className="pln">{"  "}rect</span>
            <span className="pun">.</span>
            <span className="pln">right </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="lit">12</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}assert</span>
            <span className="pun">(</span>
            <span className="pln">rect</span>
            <span className="pun">.</span>
            <span className="pln">left </span>
            <span className="pun">==</span>
            <span className="pln"> </span>
            <span className="pun">-</span>
            <span className="lit">8</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
      <p>
        (번역 부정확) getters 및 setters를 사용하면, 클라이언트 코드를 변경하지
        않고, 인스턴스 변수부터 시작하여 나중에 메서드로 래핑할 수 있습니다.
      </p>
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
          증가 (++)와 같은 연산자는 getter가 명백히 정의되어 있든 말든 특정
          방법으로 동작합니다. 예상치 못한 부작용을 피하기 위해 연산자는
          getter를 정확히 한 번 호출하여 값을 임시 변수에 저장하세요.
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
      >
        추상 메서드(Abstract methods)
      </h3>
      <p>
        인스턴스, getter, setter 메서드는 추상화 될 수 있습니다. 추상화란
        인터페이스만 구현한 상태로 나머지 부분은 다른 클래스들에게 맡기는 것을
        의미합니다. 추상 메서드는 오직{" "}
        <CAnchor
          text="추상 클래스(abstract classes)"
          href="#abstract-classes"
        />
        에 존재 할 수 있습니다.
      </p>
      <p>
        메서드를 추상화 하려면, 메서드 바디 대신에 세미콜론(;)을 사용하세요.{" "}
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">abstract</span>
            <span className="pln"> </span>
            <span className="kwd">class</span>
            <span className="pln"> </span>
            <span className="typ">Doer</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="com">
              {"  "}&#47;&#47; Define instance variables and methods...
            </span>
            <div> </div>
            <span className="pln"></span>
            <span className="typ">{"  "}void</span>
            <span className="pln"> doSomething</span>
            <span className="pun">();</span>
            <div />
            <span className="pln"> </span>
            <span className="com">&#47;&#47; Define an abstract method.</span>
            <span className="pln"></span>
            <span className="pun">&#125;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="kwd">class</span>
            <span className="pln"> </span>
            <span className="typ">EffectiveDoer</span>
            <span className="pln"> </span>
            <span className="kwd">extends</span>
            <span className="pln"> </span>
            <span className="typ">Doer</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}void</span>
            <span className="pln"> doSomething</span>
            <span className="pun">()</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="com">
              {"    "}&#47;&#47; Provide an implementation, so the method is not
              abstract here...
            </span>
            <div />
            <span className="pln"></span>
            <span className="pun">{"  "}&#125;</span>
            <span className="pln"></span>
            <div />
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
    </>
  );
};

export default Methods;
