import Ccode from "../Custom/Ccode";

const Assignment = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="assignment-operators"
        className="font-noto text-primaryTitleTextColor"
      >
        할당 연산자(Assignment operators)
      </h2>
      <p>
        앞서 봤다시피, <Ccode text="=" /> 연산자를 사용해 값을 할당 할 수
        있습니다. 할당을 받는 변수가 null 일 때만 할당을 하고 싶다면,{" "}
        <Ccode text="??=" /> 연산자를 사용하면 됩니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="com">&#47;&#47; Assign value to a</span>
        <div />
        <span className="pln">a </span>
        <span className="pun">=</span>
        <span className="pln"> value</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="com">
          &#47;&#47; Assign value to b if b is null; otherwise, b stays the same
        </span>
        <div />
        <span className="pln">b </span>
        <span className="pun">??=</span>
        <span className="pln"> value</span>
        <span className="pun">;</span>
      </pre>
      <p>
        <Ccode text="+=" /> 같은 복합(compound) 할당 연산자는 할당과 연산을
        결합합니다.(+ 는 연산, = 는 할당)
      </p>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">=</code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">*=</code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">%=</code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &gt;&gt;&gt;=
              </code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">^=</code>
            </td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">+=</code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">/=</code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &lt;&lt;=
              </code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &amp;=
              </code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">|=</code>
            </td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">-=</code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">~/=</code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &gt;&gt;=
              </code>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <p>복합 할당 연산자는 다음과 같이 작동합니다:</p>
      <table className="table">
        <thead>
          <tr>
            <td>&nbsp;</td>
            <td>Compound assignment</td>
            <td>Equivalent expression</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>
                For an operator <em>op</em>:
              </strong>
            </td>
            <td>
              <code>
                a <em>op</em>= b
              </code>
            </td>
            <td>
              <code>
                a = a <em>op</em> b
              </code>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Example:</strong>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">
                a += b
              </code>
            </td>
            <td>
              <code className="language-plaintext highlighter-rouge">
                a = a + b
              </code>
            </td>
          </tr>
        </tbody>
      </table>
      <p>다음은 할당 연산자와 복합 할당 연산자의 예제 입니다:</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> a </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Assign using =</span>
        <div />
        <span className="pln">a </span>
        <span className="pun">*=</span>
        <span className="pln"> </span>
        <span className="lit">3</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Assign and multiply: a = a * 3</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">a </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">6</span>
        <span className="pun">);</span>
      </pre>
    </>
  );
};

export default Assignment;
