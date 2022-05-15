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
        id="generics"
        className="font-noto text-primaryTitleTextColor"
      >
        제네릭(Generics)
      </h2>
      <p>
        기본 배열 타입의 API 문서를 보면,
        <a
          href="https://api.dart.dev/stable/dart-core/List-class.html"
          className="external"
        >
          <code className="language-plaintext highlighter-rouge">List</code>
        </a>
        , 타입이 사실{" "}
        <code className="language-plaintext highlighter-rouge">
          List&lt;E&gt;
        </code>
        로 되어 있는 걸 볼 수 있다. &lt;…&gt; 표시는 List를 <em>제네릭</em> (or{" "}
        <em>매개변수화</em>)-타입을 매개변수로 받는-타입으로 지정한다.
        <a href="/guides/language/effective-dart/design#do-follow-existing-mnemonic-conventions-when-naming-type-parameters">
          관례상
        </a>
        , 대부분의 타입 변수는 E, T, S, K, V 같은 single-letter 이름을 가집니다.
      </p>
    </>
  );
};

export default Index;
