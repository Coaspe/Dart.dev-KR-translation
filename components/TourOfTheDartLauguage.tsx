import { MutableRefObject } from "react";
interface props {
  TourOfTheDartRef: MutableRefObject<HTMLHeadingElement>;
}
const TourOfTheDartLanguage: React.FC<props> = ({ TourOfTheDartRef }) => {
  return (
    <>
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "0.67rem",
          marginTop: "0px",
          color: "#4A4A4A",
        }}
        className="font-noto font-semibold TourOfTheDart"
        ref={TourOfTheDartRef}
      >
        Dart로의 여정
      </h1>
      <p style={{ marginBottom: "1rem" }} className="font-noto font-bold">
        이 페이지에서는 다른 프로그래밍 언어를 사용 할 줄 안다는 가정 하에 변수,
        연산자, 클래스 및 라이브러리에 이르는 각 주요 Dart 기능을 사용하는
        방법을 보여줍니다. 언어에 대한 간략한 설명을 보고 싶다면{" "}
        <a
          className="text-selectedText hover:text-selectedTextHover"
          href="https://dart.dev/samples"
        >
          샘플 페이지
        </a>
        를 참고하세요!
      </p>
      <p className="font-noto font-bold">
        Dart의 core 라이브러리를 더 배우고 싶다면{" "}
        <a
          className="text-selectedText hover:text-selectedTextHover"
          href="https://dart.dev/guides/libraries/library-tour"
        >
          library tour
        </a>
        를 참고하세요. 언어의 자세한 정보를 얻고 싶다면{" "}
        <a
          className="text-selectedText hover:text-selectedTextHover"
          href="https://dart.dev/tools/dartpad/troubleshoot"
        >
          Dart language specification
        </a>
        을 참고하세요.{" "}
      </p>
      <aside className="font-noto font-bold">
        <p style={{ marginBottom: "1rem" }} className="flex items-center">
          <i>
            <svg
              className="svg-inline--fa fa-info-circle fa-w-16"
              style={{ width: "1rem" }}
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
          </i>
          <strong className="mx-1">Note:</strong>
          Dart 언어를 DartPad를 사용해서 체험해볼수 있습니다.{" "}
          <a
            className="text-selectedText mr-1 hover:text-selectedTextHover"
            href="https://dart.dev/tools/dartpad"
          >
            (learn more).
          </a>
          <a
            className="text-selectedText hover:text-selectedTextHover"
            href="http://dartpad.dev/"
          >
            Open DartPad.
          </a>
        </p>
        위의 페이지에서는 Dart의 활용 예를 보여주기 위해서 임베디드 DartPads를
        사용합니다. 위 페이지에서 DartPads 대신 빈 박스가 나온다면{" "}
        <a
          className="text-selectedText hover:text-selectedTextHover"
          href="https://dart.dev/tools/dartpad/troubleshoot"
        >
          DartPad troubleshooting page
        </a>
        를 참고하세요.
      </aside>
    </>
  );
};

export default TourOfTheDartLanguage;
