import Link from "next/link";
import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const DefaultValue = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="default-value"
        className="font-noto text-primaryTitleTextColor"
      >
        초기 값(Default value)
      </h2>
      <p>
        nullable type을 갖고 초기화 되지 않은 변수는 초기 값으로{" "}
        <Ccode text="null" /> 값을 가집니다. (만약 당신이{" "}
        <CAnchor text="null safety" href="https://dart.dev/null-safety" /> 를
        사용 할 줄 모른다면, 모든 변수는 nullable type을 가집니다.) 숫자를
        포함한 Dart의 모든것은 Objects이기 때문에 숫자 타입(numeric types)도
        초기값으로 null 값을 가집니다.
      </p>
      <pre>
        <span className="typ">int</span>
        <span className="pun">?</span>
        <span className="pln"> lineCount</span>
        <span className="pun">;</span>
        <div />
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">lineCount </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="typ">null</span>
        <span className="pun">);</span>
      </pre>
      <aside className="font-noto font-bold">
        <p style={{ marginBottom: 0 }} className="">
          <i className="inline-block align-middle">
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
          <strong className="mx-1">Note:</strong>Production code는 assert()
          호출을 무시합니다. 하지만 개발하는 동안에는 condition이 false라면
          assert(condition)가 exception을 throws 합니다.
          <Link
            className="text-selectedText hover:text-selectedTextHover inline-block ml-1"
            href="https://dart.dev/guides/language/language-tour#assert"
          >
            Assert
          </Link>
          에 대한 자세한 정보
        </p>
      </aside>
      <p>
        null safety 처리를 할 줄 안다면, non-nullable 변수를 사용하기 전에
        반드시 초기화 해야 합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="typ">int</span>
        <span className="pln"> lineCount </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
      </pre>
      <p>
        지역 변수를 반드시 선언된 곳에서 초기화할 필요는 없지만, 사용하기 전에는
        해야합니다. 예를 들면, <Ccode text="print()" />로{" "}
        <Ccode text="lineCount" />가 넘겨질 때 까지 Dart에서{" "}
        <Ccode text="lineCount" />가 non-null 이라는 것을 알 수 있기 때문에 다음
        코드는 유효합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <div>
          <span className="typ">int</span>
          <span className="pln"> lineCount</span>
          <span className="pun">;</span>
          <span className="pln"> </span>
        </div>
        <div> </div>
        <div>
          <span className="kwd">if</span>
          <span className="pln"> </span>
          <span className="pun">&#40;</span>
          <span className="pln">weLikeToCount</span>
          <span className="pun">&#41;</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
        </div>
        <div>
          <span className="pln"> lineCount </span>
          <span className="pun">=</span>
          <span className="pln"> countLines</span>
          <span className="pun">&#40;&#41;;</span>
        </div>
        <div>
          <span className="pln"></span>
          <span className="pun">&#125;</span>
          <span className="pln"> </span>
          <span className="kwd">else</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
        </div>
        <div>
          <span className="pln"> lineCount </span>
          <span className="pun">=</span>
          <span className="pln"> </span>
          <span className="lit">0</span>
          <span className="pun">;</span>
        </div>
        <span className="pln"></span>
        <span className="pun">&#125;</span>
        <div> </div>
        <span className="pln">print</span>
        <span className="pun">&#40;</span>
        <span className="pln">lineCount</span>
        <span className="pun">&#41;;</span>
      </pre>
      <p>
        Top-level, 클래스 변수는 느리게 초기화되며, 초기화 코드는 변수를 처음
        사용할 때 실행됩니다.
      </p>
    </>
  );
};
export default DefaultValue;
