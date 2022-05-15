import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Other = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="other-operators"
        className="font-noto text-primaryTitleTextColor"
      >
        이 외의 연산자들
      </h2>
      <p>아마 다른 예제들에서 나머지 연산자들을 본 경험이 있을 것 입니다.</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Operator</td>
            <td>Name</td>
            <td>Meaning</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">()</code>
            </td>
            <td>Function application</td>
            <td>Represents a function call</td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">[]</code>
            </td>
            <td>Subscript access</td>
            <td>
              Represents a call to the overridable{" "}
              <code className="language-plaintext highlighter-rouge">[]</code>{" "}
              operator; example:{" "}
              <code className="language-plaintext highlighter-rouge">
                fooList[1]
              </code>{" "}
              passes the int{" "}
              <code className="language-plaintext highlighter-rouge">1</code> to{" "}
              <code className="language-plaintext highlighter-rouge">
                fooList
              </code>{" "}
              to access the element at index{" "}
              <code className="language-plaintext highlighter-rouge">1</code>
            </td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">?[]</code>
            </td>
            <td>Conditional subscript access</td>
            <td>
              Like{" "}
              <code className="language-plaintext highlighter-rouge">[]</code>,
              but the leftmost operand can be null; example:{" "}
              <code className="language-plaintext highlighter-rouge">
                fooList?[1]
              </code>{" "}
              passes the int{" "}
              <code className="language-plaintext highlighter-rouge">1</code> to{" "}
              <code className="language-plaintext highlighter-rouge">
                fooList
              </code>{" "}
              to access the element at index{" "}
              <code className="language-plaintext highlighter-rouge">1</code>{" "}
              unless{" "}
              <code className="language-plaintext highlighter-rouge">
                fooList
              </code>{" "}
              is null (in which case the expression evaluates to null)
            </td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">.</code>
            </td>
            <td>Member access</td>
            <td>
              Refers to a property of an expression; example:{" "}
              <code className="language-plaintext highlighter-rouge">
                foo.bar
              </code>{" "}
              selects property{" "}
              <code className="language-plaintext highlighter-rouge">bar</code>{" "}
              from expression{" "}
              <code className="language-plaintext highlighter-rouge">foo</code>
            </td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">?.</code>
            </td>
            <td>Conditional member access</td>
            <td>
              Like{" "}
              <code className="language-plaintext highlighter-rouge">.</code>,
              but the leftmost operand can be null; example:{" "}
              <code className="language-plaintext highlighter-rouge">
                foo?.bar
              </code>{" "}
              selects property{" "}
              <code className="language-plaintext highlighter-rouge">bar</code>{" "}
              from expression{" "}
              <code className="language-plaintext highlighter-rouge">foo</code>{" "}
              unless{" "}
              <code className="language-plaintext highlighter-rouge">foo</code>{" "}
              is null (in which case the value of{" "}
              <code className="language-plaintext highlighter-rouge">
                foo?.bar
              </code>{" "}
              is null)
            </td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">!</code>
            </td>
            <td>Null assertion operator</td>
            <td>
              Casts an expression to its underlying non-nullable type, throwing
              a runtime exception if the cast fails; example:{" "}
              <code className="language-plaintext highlighter-rouge">
                foo!.bar
              </code>{" "}
              asserts{" "}
              <code className="language-plaintext highlighter-rouge">foo</code>{" "}
              is non-null and selects the property{" "}
              <code className="language-plaintext highlighter-rouge">bar</code>,
              unless{" "}
              <code className="language-plaintext highlighter-rouge">foo</code>{" "}
              is null in which case a runtime exception is thrown
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <Ccode text="." />, <Ccode text="?" />, <Ccode text=".." /> 연산자에
        대해 더 자세히 알고 싶다면,{" "}
        <CAnchor
          text="className=es"
          href="https://dart.dev/guides/language/language-tour#className=es"
        />
        를 참고하세요.
      </p>
    </>
  );
};
export default Other;
