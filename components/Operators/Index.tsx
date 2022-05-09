import Link from "next/link";
import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Index = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="operators"
        className="font-noto text-primaryTitleTextColor"
      >
        연산자
      </h2>
      <p>
        Dart는 아래 표에 있는 연산자들을 지원합니다. 당신이{" "}
        <CAnchor
          text="클래스 멤버로 이러한 연산자"
          href="https://dart.dev/guides/language/language-tour#_operators"
        />
        들을 구현하는 것이 가능합니다.
      </p>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Description</td>
            <td>Operator</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>unary postfix</td>
            <td>
              <code>
                <em>expr</em>++
              </code>{" "}
              &nbsp;&nbsp;{" "}
              <code>
                <em>expr</em>--
              </code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">()</code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">[]</code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">?[]</code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">.</code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">?.</code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">!</code>
            </td>
          </tr>
          <tr>
            <td>unary prefix</td>
            <td>
              <code>
                -<em>expr</em>
              </code>{" "}
              &nbsp;&nbsp;{" "}
              <code>
                !<em>expr</em>
              </code>{" "}
              &nbsp;&nbsp;{" "}
              <code>
                ~<em>expr</em>
              </code>{" "}
              &nbsp;&nbsp;{" "}
              <code>
                ++<em>expr</em>
              </code>{" "}
              &nbsp;&nbsp;{" "}
              <code>
                --<em>expr</em>
              </code>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <code>
                await <em>expr</em>
              </code>{" "}
              &nbsp;&nbsp;
            </td>
          </tr>
          <tr>
            <td>multiplicative</td>
            <td>
              <code className="language-plaintext highlighter-rouge">*</code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">/</code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">%</code>{" "}
              &nbsp;
              <code className="language-plaintext highlighter-rouge">~/</code>
            </td>
          </tr>
          <tr>
            <td>additive</td>
            <td>
              <code className="language-plaintext highlighter-rouge">+</code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">-</code>
            </td>
          </tr>
          <tr>
            <td>shift</td>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &lt;&lt;
              </code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">
                &gt;&gt;
              </code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">
                &gt;&gt;&gt;
              </code>
            </td>
          </tr>
          <tr>
            <td>bitwise AND</td>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &amp;
              </code>
            </td>
          </tr>
          <tr>
            <td>bitwise XOR</td>
            <td>
              <code className="language-plaintext highlighter-rouge">^</code>
            </td>
          </tr>
          <tr>
            <td>bitwise OR</td>
            <td>
              <code className="language-plaintext highlighter-rouge">|</code>
            </td>
          </tr>
          <tr>
            <td>relational&nbsp;and&nbsp;type&nbsp;test</td>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &gt;=
              </code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">&gt;</code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">
                &lt;=
              </code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">&lt;</code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">as</code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">is</code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">is!</code>
            </td>
          </tr>
          <tr>
            <td>equality</td>
            <td>
              <code className="language-plaintext highlighter-rouge">==</code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">!=</code>{" "}
              &nbsp;&nbsp;
            </td>
          </tr>
          <tr>
            <td>logical AND</td>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &amp;&amp;
              </code>
            </td>
          </tr>
          <tr>
            <td>logical OR</td>
            <td>
              <code className="language-plaintext highlighter-rouge">||</code>
            </td>
          </tr>
          <tr>
            <td>if null</td>
            <td>
              <code className="language-plaintext highlighter-rouge">??</code>
            </td>
          </tr>
          <tr>
            <td>conditional</td>
            <td>
              <code>
                <em>expr1</em> ? <em>expr2</em> : <em>expr3</em>
              </code>
            </td>
          </tr>
          <tr>
            <td>cascade</td>
            <td>
              <code className="language-plaintext highlighter-rouge">..</code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">?..</code>
            </td>
          </tr>
          <tr>
            <td>assignment</td>
            <td>
              <code className="language-plaintext highlighter-rouge">=</code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">*=</code>{" "}
              &nbsp;&nbsp;{" "}
              <code className="language-plaintext highlighter-rouge">/=</code>{" "}
              &nbsp;&nbsp;
              <code className="language-plaintext highlighter-rouge">
                +=
              </code>{" "}
              &nbsp;&nbsp;
              <code className="language-plaintext highlighter-rouge">
                -=
              </code>{" "}
              &nbsp;&nbsp;
              <code className="language-plaintext highlighter-rouge">
                &amp;=
              </code>{" "}
              &nbsp;&nbsp;
              <code className="language-plaintext highlighter-rouge">
                ^=
              </code>{" "}
              &nbsp;&nbsp;<em>etc.</em>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <aside className="alert alert-warning" role="alert">
        <p className="mb-0">
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
          연산자의 적용 순서는 Dart 파서의 동작에 가깝습니다. 더 확정적인 답을
          위해서,{" "}
          <CAnchor
            text="Dart language specification"
            href="https://dart.dev/guides/language/spec"
          />
          를 참고하세요.
          <a href="/guides/language/spec">Dart language specification</a>.
        </p>
      </aside> */}
      <p>
        연산자를 사용할 때, expression을 생성하게 됩니다. 다음은 연산자 표현의
        예제 입니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="pln">a</span>
        <span className="pun">++</span>
        <div />
        <span className="pln">a </span>
        <span className="pun">+</span>
        <span className="pln">
          {" "}
          b <div />a{" "}
        </span>
        <span className="pun">=</span>
        <span className="pln">
          {" "}
          b <div />a{" "}
        </span>
        <span className="pun">==</span>
        <span className="pln">
          {" "}
          b <div />c{" "}
        </span>
        <span className="pun">?</span>
        <span className="pln"> a </span>
        <span className="pun">:</span>
        <span className="pln">
          {" "}
          b <div />a{" "}
        </span>
        <span className="kwd">is</span>
        <span className="pln"> </span>
        <span className="typ">T</span>
      </pre>
      <p>
        위의 <CAnchor text="연산자 테이블" href="/#operators" />에 같은 행에
        있는 연산자들 중에 왼쪽에서 오른쪽으로 갈 수록 우선순위가 낮아집니다.
        예를 들면, <Ccode text="%" /> 연산자는 <Ccode text="==" /> 연산자 보다
        우선순위가 높습니다. 그리고 <Ccode text="==" /> 는 논리 AND 연산자인{" "}
        <Ccode text="&#38;&#38;" /> 보다 순위가 높습니다. 그러한 우선 순위에
        따라 다음 두 줄의 코드는 같은 방식으로 작동합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="com">&#47;&#47; 가독성이 좋음.</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">((</span>
        <span className="pln">n </span>
        <span className="pun">%</span>
        <span className="pln"> i </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&amp;&amp;</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">d </span>
        <span className="pun">%</span>
        <span className="pln"> i </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">))</span>
        <span className="pln"> </span>
        <span className="pun">...</span>
        <div> </div>
        <span className="pln"></span>
        <span className="com">&#47;&#47; 결과는 같지만, 가독성이 떨어짐.</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">n </span>
        <span className="pun">%</span>
        <span className="pln"> i </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pln"> </span>
        <span className="pun">&amp;&amp;</span>
        <span className="pln"> d </span>
        <span className="pun">%</span>
        <span className="pln"> i </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">...</span>
      </pre>
      <aside className="alert alert-warning" role="alert">
        <p className="mb-0">
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
          어떤 연산자들은 두개의 피연산자를 가지는데, 왼쪽의 피연산자가 사용 될
          메서드를 결정합니다. 예를 들면,{" "}
          <code className="language-plaintext highlighter-rouge">
            Vector
          </code>{" "}
          객체와{" "}
          <code className="language-plaintext highlighter-rouge">Point</code>{" "}
          객체가 있고,{" "}
          <code className="language-plaintext highlighter-rouge">
            aVector + aPoint
          </code>{" "}
          를 실행하면{" "}
          <code className="language-plaintext highlighter-rouge">Vector</code>{" "}
          덧셈 (<code className="language-plaintext highlighter-rouge">+</code>
          )이 실행됩니다.
        </p>
      </aside>
    </>
  );
};

export default Index;
