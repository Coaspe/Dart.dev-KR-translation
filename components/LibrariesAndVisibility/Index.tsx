import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Index = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="libraries-and-visibility"
        className="font-noto text-primaryTitleTextColor"
      >
        라이브러리와 가시성(Libraries and visibility)
      </h2>
      <p>
        <Ccode text="import" /> 와 <Ccode text="library" /> 디렉티브는 코드를
        모듈화하고 공유하는 것을 도와줍니다. 라이브러리는 API들을 제공 할 뿐만
        아니라, 관리(privacy)의 단위가 됩니다. 언더스코어(
        <Ccode text="_" />
        )로 시작하는 식별자들은 오직 그 라이브러리 안에서만 보입니다(visible).{" "}
        <Ccode text="library" /> 디렉티브를 사용하지 않았다고 해도,{" "}
        <span className="itailc">모든 Dart 앱은 라이브러리입니다.</span>{" "}
      </p>
      <p>
        라이브러리들은{" "}
        <CAnchor text="packages" href="https://dart.dev/guides/packages" />를
        사용해 분산 될 수 있습니다.
      </p>
      <aside className="alert alert-info" role="alert">
        <p>
          <i>
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
          </i>
          Dart가 왜{" "}
          <code className="language-plaintext highlighter-rouge">public</code>{" "}
          이나{" "}
          <code className="language-plaintext highlighter-rouge">private</code>{" "}
          같은 접근 수식 키워드를 사용하지 않고, 언더스코어를 사용하는지가
          궁금하다면,{" "}
          <a
            href="https://github.com/dart-lang/sdk/issues/33383"
            className="external"
          >
            SDK issue 33383
          </a>
          를 참고하세요. .
        </p>
      </aside>
    </>
  );
};

export default Index;
