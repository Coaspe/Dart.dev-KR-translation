import CAnchor from "../Custom/CAnchor";

const Summary = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="summary"
        className="font-noto text-primaryTitleTextColor"
      >
        요약(Summary)
      </h2>
      <p>
        이 페이지는 Dart 언어에서 자주 사용하는 피쳐들을 요약했습니다. 더 많은
        피쳐들이 개발되고 있지만, 그것들이 이미 존재하는 코드들을 해치지는 않을
        것 입니다. Dart에 대해 더 자세히 알고 싶다면,{" "}
        <CAnchor
          text="Dart language specification"
          href="https://dart.dev/guides/language/spec"
        />{" "}
        와{" "}
        <CAnchor
          text="Effective Dart"
          href="https://dart.dev/guides/language/effective-dart"
        />
        를 참고하세요.
      </p>
      <p>
        Dart 코어 라이브러리에 대해 더 배우고 싶다면,{" "}
        <CAnchor
          text="A Tour of the Dart Libraries"
          href="https://dart.dev/guides/libraries/library-tour"
        />
        를 참고하세요.
      </p>
    </>
  );
};

export default Summary;
