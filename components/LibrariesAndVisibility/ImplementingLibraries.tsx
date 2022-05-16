import CAnchor from "../Custom/CAnchor";

const ImplementingLibraries = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="implementing-libraries"
        className="font-noto text-primaryTitleTextColor"
      >
        라이브러리 구현하기(Implementing libraries)
      </h2>
      <p>
        라이브러리 구현에 대한 자세한 방법은{" "}
        <CAnchor
          text="Create Library Packages"
          href="https://dart.dev/guides/libraries/create-library-packages"
        />
        과 다음을 고려하세요.
      </p>
      <ul className="ll">
        <li>라이브러리 소스 코드를 어떻게 짤 것인가.</li>
        <li>
          <code className="language-plaintext highlighter-rouge">export</code>{" "}
          directive를 어떻게 사용 할 것인가.
        </li>
        <li>
          <code className="language-plaintext highlighter-rouge">part</code>{" "}
          directive를 언제 사용 할 것인가.
        </li>
        <li>
          <code className="language-plaintext highlighter-rouge">library</code>{" "}
          directive를 언제 사용 할 것인가.
        </li>
        <li>
          다수의 플랫폼을 지원하는 라이브러리를 구현 할 때 어떻게 조건적인
          imports 와 exports를 사용 할 것인가.
        </li>
      </ul>
    </>
  );
};

export default ImplementingLibraries;
