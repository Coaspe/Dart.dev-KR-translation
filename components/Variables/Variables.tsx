import Ccode from "../Custom/Ccode";
import DefaultValue from "./DefaultValue";
import FinalAndConst from "./FinalAndConst";
import LateVariables from "./LateVariables";

const Variables = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        className="font-noto text-primaryTitleTextColor"
      >
        변수
      </h2>
      <p>다음은 변수를 선언하고 초기화하는 예입니다.</p>
      <pre className="bg-preBG">
        <span className="kwd">var</span>
        <span className="pln"> name </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;Bob&#39;</span>
        <span className="pun">;</span>
      </pre>
      <p>
        변수는 참조(references)를 저장합니다. 위의 <Ccode text="name" />
        이라는 변수는 &#34;Bob&#34;이라는 값을 갖는 <Ccode text="String" />{" "}
        object의 참조를 가집니다.
      </p>
      <p>
        <Ccode text="name" />의 타입은 <Ccode text="String" />
        으로 추정되지만, 타입을 특정하므로서 변환이 가능합니다. object가 single
        타입으로 강제되어 있지 않다면 <Ccode text="Object" /> 타입으로
        명시하세요.(필요하다면 <Ccode text="dynamic" />을 사용하는 것도
        가능합니다.)
      </p>
      <pre className="bg-preBG">
        <span className="typ">Object</span>
        <span className="pln"> name </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;Bob&#39;</span>
        <span className="pun">;</span>
      </pre>
      <p>다른 방법으로는 추정 될 타입으로 선언하는 것 입니다.</p>
      <pre className="bg-preBG">
        <span className="typ">String</span>
        <span className="pln"> name </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;Bob&#39;</span>
        <span className="pun">;</span>
      </pre>
      <aside className="font-noto font-bold">
        <p style={{ marginBottom: 0 }}>
          <div className="flex items-center">
            <i className="inline-block ">
              <svg
                style={{ width: "1rem" }}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="info-circle"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                ></path>
              </svg>
            </i>
            <strong className="mx-1">Note:</strong>이 페이지에서는 지역 변수를
            type annotations&#40;
            <span className="typ">String</span>
            <span className="pln mx-1"> name </span>
            <span className="pun">=</span>
            <span className="str ml-1">&#39;Bob&#39;</span>
            <span className="pun mr-1">;</span> 같은 것&#41;이 아닌 var를
            사용하는{" "}
          </div>
          <a
            className="text-selectedText hover:text-selectedTextHover mx-1 inline-block"
            href="https://dart.dev/guides/language/effective-dart/design#types"
          >
            style guide recommendation
          </a>{" "}
          을 따릅니다.
        </p>
      </aside>
      <DefaultValue />
      <LateVariables />
      <FinalAndConst />
    </>
  );
};

export default Variables;
