import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const EqulityAndRelational = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="equality-and-relational-operators"
        className="font-noto text-primaryTitleTextColor"
      >
        항등, 관계 연산자
      </h2>
      <p>다음 표는 Dart의 항등 연산자와 관계 연산자 입니다.</p>
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
              <code className="language-plaintext highlighter-rouge">==</code>
            </td>
            <td>같음</td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">!=</code>
            </td>
            <td>같지 않음</td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">&gt;</code>
            </td>
            <td>더 큼</td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">&lt;</code>
            </td>
            <td>더 작음</td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &gt;=
              </code>
            </td>
            <td>크거나 같음</td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">
                &lt;=
              </code>
            </td>
            <td>작거나 같음</td>
          </tr>
        </tbody>
      </table>
      <p>
        x와 y 두 객체가 같은 값을 대표하는지 테스트 하고 싶다면,{" "}
        <Ccode text="==" /> 연산자를 사용하세요.(드물게 두 객체가 정확하게 같은
        객체인지 확인하고 싶다면,{" "}
        <CAnchor
          text="identical()"
          href="https://api.dart.dev/stable/dart-core/identical.html"
        />{" "}
        함수를 사용하세요.) <Ccode text="==" /> 연산자는 이렇게 동작합니다:
      </p>
      <ol>
        <li>
          <p>
            <em>x</em> 와 <em>y</em> 둘 다 null이면 true를 반환, 둘 중 하나만
            null 이라면 false를 반환합니다.
          </p>
        </li>
        <li>
          <p>
            Return the result of invoking the{" "}
            <code className="language-plaintext highlighter-rouge">==</code>{" "}
            method on <em>x</em> with the argument <em>y</em>. (That’s right,
            operators such as{" "}
            <code className="language-plaintext highlighter-rouge">==</code> are
            methods that are invoked on their first operand. For details, see{" "}
            <a href="#_operators">Operators</a>.)
          </p>
        </li>
      </ol>
      <p>
        인자 y와 x에 대해 <Ccode text="==" /> 메서드를 호출한 결과를 반환합니다.
        (<Ccode text="==" /> 같은 연산자들은 첫 번째 피연산자가 호출한 메서드로
        봐도 됩니다. 더 자세히, <CAnchor text="Operators" href="/#operators" />)
      </p>
      <p>다음은 항등 연산자와 관계 연산자 예제입니다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="lit">2</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="lit">2</span>
        <span className="pln"> </span>
        <span className="pun">!=</span>
        <span className="pln"> </span>
        <span className="lit">3</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="lit">3</span>
        <span className="pln"> </span>
        <span className="pun">&gt;</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="lit">2</span>
        <span className="pln"> </span>
        <span className="pun">&lt;</span>
        <span className="pln"> </span>
        <span className="lit">3</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="lit">3</span>
        <span className="pln"> </span>
        <span className="pun">&gt;=</span>
        <span className="pln"> </span>
        <span className="lit">3</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="lit">2</span>
        <span className="pln"> </span>
        <span className="pun">&lt;=</span>
        <span className="pln"> </span>
        <span className="lit">3</span>
        <span className="pun">);</span>
      </pre>
    </>
  );
};
export default EqulityAndRelational;
