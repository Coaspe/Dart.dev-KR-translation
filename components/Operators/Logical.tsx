const Logical = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="logical-operators"
        className="font-noto text-primaryTitleTextColor"
      >
        논리 연산자(Logical operators)
      </h2>
      <p>
        논리 연산자를 사용하여 boolean 표현식을 뒤집거나(false to true, true to
        false) 결합하는 것이 가능합니다.
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
              <code>
                !<em>expr</em>
              </code>
            </td>
            <td>
              inverts the following expression (changes false to true, and vice
              versa)
            </td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">||</code>
            </td>
            <td>logical OR</td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &amp;&amp;
              </code>
            </td>
            <td>logical AND</td>
          </tr>
        </tbody>
      </table>
      <p>다음은 논리 연산자 예제 입니다:</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">(!</span>
        <span className="pln">done </span>
        <span className="pun">&amp;&amp;</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">col </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pln"> </span>
        <span className="pun">||</span>
        <span className="pln"> col </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">3</span>
        <span className="pun">))</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="com">{"  "}&#47;&#47; ...Do something...</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
    </>
  );
};

export default Logical;
