import Ccode from "../Custom/Ccode";

const TypeTest = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="type-test-operators"
        className="font-noto text-primaryTitleTextColor"
      >
        타입 테스트 연산자
      </h2>
      <p>
        <Ccode text="as" />, <Ccode text="is" /> 그리고 <Ccode text="is!" />{" "}
        연산자들은 런타임에서 타입을 확인 할 때 유용합니다.
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
              <code className="language-plaintext highlighter-rouge">as</code>
            </td>
            <td>
              Typecast (also used to specify{" "}
              <a href="#specifying-a-library-prefix">library prefixes</a>)
            </td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">is</code>
            </td>
            <td>True if the object has the specified type</td>
          </tr>
          <tr>
            <td>
              <code className="language-plaintext highlighter-rouge">is!</code>
            </td>
            <td>True if the object doesn’t have the specified type</td>
          </tr>
        </tbody>
      </table>
      <p>
        <Ccode text="obj" />가
        <Ccode text="T" />로 specified된 interface의 구현체라면
        <Ccode text="obj is T" />의 결과는 true 입니다. 얘를 들면,
        <Ccode text="obj is Object?" />는 항상 true 입니다.
      </p>
      <p>
        어떤 객체가 캐스팅을 원하는 타입으로의 변환이 가능할 때{" "}
        <Ccode text="as" /> 연산자를 사용해서 캐스팅을 할 수 있습니다. Example:
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="pun">(</span>
        <span className="pln">employee </span>
        <span className="kwd">as</span>
        <span className="pln"> </span>
        <span className="typ">Person</span>
        <span className="pun">).</span>
        <span className="pln">firstName </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;Bob&#39;</span>
        <span className="pun">;</span>
      </pre>
      <p>
        만약 객체가 타입 T라는 것을 확실하지 못한다면, 객체를 사용하기 전에{" "}
        <Ccode text="is T" />로 타입을 확인하세요.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">employee </span>
        <span className="kwd">is</span>
        <span className="pln"> </span>
        <span className="typ">Person</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="com">{"  "}&#47;&#47; Type check</span>
        <div> </div>
        <span className="pln">{"  "}employee</span>
        <span className="pun">.</span>
        <span className="pln">firstName </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;Bob&#39;</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
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
          위의 두 코드는 같지 않습니다. 만약{" "}
          <code className="language-plaintext highlighter-rouge">
            employee
          </code>{" "}
          이 null이거나{" "}
          <code className="language-plaintext highlighter-rouge">Person</code>이
          아니라면, 첫 번째 코드는 예외가 발생하지만, 두 번째는 그렇지 않습니다.
        </p>
      </aside>
    </>
  );
};

export default TypeTest;
