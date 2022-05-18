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
        id="asynchrony-support"
        className="font-noto text-primaryTitleTextColor"
      >
        비동기 지원
      </h2>
      <p>
        Dart의 라이브러리에는{" "}
        <a
          href="https://api.dart.dev/stable/dart-async/Future-class.html"
          className="external"
        >
          <code className="language-plaintext highlighter-rouge">Future</code>
        </a>{" "}
        와{" "}
        <a
          href="https://api.dart.dev/stable/dart-async/Stream-class.html"
          className="external"
        >
          <code className="language-plaintext highlighter-rouge">Stream</code>
        </a>{" "}
        객체를 반환하는 함수가 매우 많습니다. 이런 함수들을{" "}
        <span className="italic">비동기(asynchronous)</span> 함수라고 합니다. 이
        함수들은 I/O 같이 시간이 오래 걸릴 수도 있는 작업이 완료되기를 기다리지
        않고, 값을 반환 할 수 있게 해줍니다.
      </p>
      <p>
        <Ccode text="async" />나 <Ccode text="await" /> 같은 키워드들은 동기적인
        코드처럼 보이는 비동기적인 코드를 이용해 비동기 프로그래밍을 가능하게
        합니다.
      </p>
    </>
  );
};

export default Index;
