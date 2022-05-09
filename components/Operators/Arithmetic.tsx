const Arithmetic = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="arithmetic-operators"
        className="font-noto text-primaryTitleTextColor"
      >
        산술 연산자
      </h2>
      <p>Dart는 다음 표와 같이 기본 산술 연산자를 지원합니다.</p>
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
              <code className="language-plaintext highlighter-rouge">+</code>
            </td>
            <td>Add</td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">–</code>
            </td>
            <td>Subtract</td>
          </tr>
          <tr>
            <td>
              <code>
                -<em>expr</em>
              </code>
            </td>
            <td>
              Unary minus, also known as negation (reverse the sign of the
              expression)
            </td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">*</code>
            </td>
            <td>Multiply</td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">/</code>
            </td>
            <td>Divide</td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">~/</code>
            </td>
            <td>Divide, returning an integer result</td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">%</code>
            </td>
            <td>Get the remainder of an integer division (modulo)</td>
          </tr>
        </tbody>
      </table>
      <p>Example:</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="lit">2</span>
        <span className="pln"> </span>
        <span className="pun">+</span>
        <span className="pln"> </span>
        <span className="lit">3</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">5</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="lit">2</span>
        <span className="pln"> </span>
        <span className="pun">-</span>
        <span className="pln"> </span>
        <span className="lit">3</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="pun">-</span>
        <span className="lit">1</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="lit">2</span>
        <span className="pln"> </span>
        <span className="pun">*</span>
        <span className="pln"> </span>
        <span className="lit">3</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">6</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="lit">5</span>
        <span className="pln"> </span>
        <span className="pun">/</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">2.5</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Result is a double</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="lit">5</span>
        <span className="pln"> </span>
        <span className="pun">~/</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Result is an int</span>
        <div />

        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="lit">5</span>
        <span className="pln"> </span>
        <span className="pun">%</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Remainder</span>
        <div> </div>
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="str">
          &#39;5/2 = $&#123;5 ~/ 2&#125; r ${5 % 2}&#39;
        </span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="str">&#39;5/2 = 2 r 1&#39;</span>
        <span className="pun">);</span>
      </pre>
      <p>
        Dart는 prefix(접두사), postfix(접미사) 증가,감소 연산자를 지원합니다.
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
                ++<em>var</em>
              </code>
            </td>
            <td>
              <code>
                <em>var</em> = <em>var</em> + 1
              </code>{" "}
              (expression value is{" "}
              <code>
                <em>var</em> + 1
              </code>
              )
            </td>
          </tr>
          <tr>
            <td>
              <code>
                <em>var</em>++
              </code>
            </td>
            <td>
              <code>
                <em>var</em> = <em>var</em> + 1
              </code>{" "}
              (expression value is{" "}
              <code>
                <em>var</em>
              </code>
              )
            </td>
          </tr>
          <tr>
            <td>
              <code>
                --<em>var</em>
              </code>
            </td>
            <td>
              <code>
                <em>var</em> = <em>var</em> – 1
              </code>{" "}
              (expression value is{" "}
              <code>
                <em>var</em> – 1
              </code>
              )
            </td>
          </tr>
          <tr>
            <td>
              <code>
                <em>var</em>--
              </code>
            </td>
            <td>
              <code>
                <em>var</em> = <em>var</em> – 1
              </code>{" "}
              (expression value is{" "}
              <code>
                <em>var</em>
              </code>
              )
            </td>
          </tr>
        </tbody>
      </table>
      <p>Example:</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="typ">int</span>
        <span className="pln"> a</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="typ">int</span>
        <span className="pln"> b</span>
        <span className="pun">;</span>
        <div> </div>
        <span className="pln">a </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <div />
        <span className="pln">b </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">++</span>
        <span className="pln">a</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">
          &#47;&#47; Increment a before b gets its value.
        </span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">a </span>
        <span className="pun">==</span>
        <span className="pln"> b</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; 1 == 1</span>
        <div> </div>
        <span className="pln">a </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <div />
        <span className="pln">b </span>
        <span className="pun">=</span>
        <span className="pln"> a</span>
        <span className="pun">++;</span>
        <span className="pln"> </span>
        <span className="com">
          &#47;&#47; Increment a AFTER b gets its value.
        </span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">a </span>
        <span className="pun">!=</span>
        <span className="pln"> b</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; 1 != 0</span>
        <div> </div>
        <span className="pln">a </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <div />
        <span className="pln">b </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">--</span>
        <span className="pln">a</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"> </span>
        <span className="com">
          &#47;&#47; Decrement a before b gets its value.
        </span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">a </span>
        <span className="pun">==</span>
        <span className="pln"> b</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; -1 == -1</span>
        <div> </div>
        <span className="pln">a </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <div />
        <span className="pln">b </span>
        <span className="pun">=</span>
        <span className="pln"> a</span>
        <span className="pun">--;</span>
        <span className="pln"> </span>
        <span className="com">
          &#47;&#47; Decrement a AFTER b gets its value.
        </span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">a </span>
        <span className="pun">!=</span>
        <span className="pln"> b</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; -1 != 0</span>
      </pre>
    </>
  );
};

export default Arithmetic;
