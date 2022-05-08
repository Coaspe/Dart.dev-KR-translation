import CAnchor from "../Custom/CAnchor";

const Symbols = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="symbols"
        className="font-noto text-primaryTitleTextColor"
      >
        Symbols
      </h2>
      <p>
        <CAnchor
          text="Symbol"
          href="https://api.dart.dev/stable/dart-core/Symbol-class.html"
        />{" "}
        객체는 Dart 프로그램에 선언된 연산자나 식별자를 나타냅니다.
      </p>
      <p>
        아마도 symbol을 사용할 필요가 없을 수도 있지만, 축소(minification)를하면
        식별자의 이름은 변경되지만 식별자의 symbol은 변경되지 않기 때문에
        이름으로 식별자를 참조하는 API에는 매우 유용합니다.
      </p>
      <p>
        {" "}
        식별자에 대한 symbol를 가져오려면 symbol 리터럴을 사용하면 됩니다.
        symbol 리터럴은 # 뒤에 식별자를 위치시키면 됩니다.{" "}
      </p>
      <pre>
        <code style={{ color: "black" }} className="language-nocode">
          #radix <div />
          #bar
        </code>
      </pre>
      <p>Symbol 리터럴은 컴파일 타임 상수입니다.</p>
    </>
  );
};

export default Symbols;
