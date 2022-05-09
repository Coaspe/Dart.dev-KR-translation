const BitwiseAndShift = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="bitwise-and-shift-operators"
        className="font-noto text-primaryTitleTextColor"
      >
        Bitwise와 shift 연산자
      </h2>
      <p>
        Dart에서는 숫자를 이루는 각각의 비트를 조작하는 것이 가능합니다. 주로
        bitwise와 shift 연산자는 정수와 함께 쓰입니다.
      </p>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Operator</td>
            <td>Meaning</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &amp;
              </code>
            </td>
            <td>AND</td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">|</code>
            </td>
            <td>OR</td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">^</code>
            </td>
            <td>XOR</td>
          </tr>
          <tr>
            <td>
              <code>
                ~<em>expr</em>
              </code>
            </td>
            <td>Unary bitwise complement (0s become 1s; 1s become 0s)</td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &lt;&lt;
              </code>
            </td>
            <td>Shift left</td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &gt;&gt;
              </code>
            </td>
            <td>Shift right</td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &gt;&gt;&gt;
              </code>
            </td>
            <td>Unsigned shift right</td>
          </tr>
        </tbody>
      </table>
      <p>다음은 bitwise와 shift 연산자의 예제입니다:</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">final</span>
        <span className="pln"> value </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0x22</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">final</span>
        <span className="pln"> bitmask </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0x0f</span>
        <span className="pun">;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">((</span>
        <span className="pln">value </span>
        <span className="pun">&amp;</span>
        <span className="pln"> bitmask</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">0x02</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47; AND</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">((</span>
        <span className="pln">value </span>
        <span className="pun">&amp;</span>
        <span className="pln"> </span>
        <span className="pun">~</span>
        <span className="pln">bitmask</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">0x20</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47; AND NOT</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">((</span>
        <span className="pln">value </span>
        <span className="pun">|</span>
        <span className="pln"> bitmask</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">0x2f</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47; OR</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">((</span>
        <span className="pln">value </span>
        <span className="pun">^</span>
        <span className="pln"> bitmask</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">0x2d</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47; XOR</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">((</span>
        <span className="pln">value </span>
        <span className="pun">&lt;&lt;</span>
        <span className="pln"> </span>
        <span className="lit">4</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">0x220</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47; Shift left</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">((</span>
        <span className="pln">value </span>
        <span className="pun">&gt;&gt;</span>
        <span className="pln"> </span>
        <span className="lit">4</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">0x02</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47; Shift right</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">((</span>
        <span className="pln">value </span>
        <span className="pun">&gt;&gt;&gt;</span>
        <span className="pln"> </span>
        <span className="lit">4</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">0x02</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47; Unsigned shift right</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">((-</span>
        <span className="pln">value </span>
        <span className="pun">&gt;&gt;</span>
        <span className="pln"> </span>
        <span className="lit">4</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="pun">-</span>
        <span className="lit">0x03</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47; Shift right</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">((-</span>
        <span className="pln">value </span>
        <span className="pun">&gt;&gt;&gt;</span>
        <span className="pln"> </span>
        <span className="lit">4</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&gt;</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47; Unsigned shift right</span>
      </pre>
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
          <code className="language-plaintext highlighter-rouge">
            &gt;&gt;&gt;
          </code>{" "}
          연산자(<em>triple-shift</em>, <em>unsigned shift</em>로도
          알려져있습니다.)는 최소 2.14.
          <a href="/guides/language/evolution#language-versioning">버젼</a>이
          필요합니다.
        </p>
      </aside>
    </>
  );
};

export default BitwiseAndShift;
