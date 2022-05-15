import CAnchor from "../Custom/CAnchor";

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
        id="exceptions"
        className="font-noto text-primaryTitleTextColor"
      >
        예외(Exceptions)
      </h2>
      <p>
        Dart 코드는 예외를 발생(throw)시키고, 캐치(catch) 할 수 있습니다. 예외는
        예상하지 못한 상황이 발생했다는 것을 의미합니다. 만약 예외가 발생하지
        않았다면, 예외를 발생시키는{" "}
        <CAnchor
          text="isolate"
          href="https://dart.dev/guides/language/language-tour#isolates"
        />
        는 동작이 연기되고, 보통 isolate와 이것의 프로그램은 종료됩니다.
      </p>
      <p>
        자바와 대조적으로, Dart의 모든 exceptions는 unchecked exceptions 입니다.
        메서드는 어떤 예외를 발생 시킬 것인지 선언하지 못하고, 예외를 캐치할
        필요도 없습니다.
      </p>
      <p>
        Dart는 다양한 서브 타입들을 제공하는{" "}
        <CAnchor
          text="Exception"
          href="https://api.dart.dev/stable/dart-core/Exception-className=.html"
        />
        와{" "}
        <CAnchor
          text="Error"
          href="https://api.dart.dev/stable/dart-core/Error-className=.html"
        />
        를 제공합니다. 물론 예외를 정의하는 것이 가능합니다. 그러나 Dart
        프로그램은 Exception이나 Error 객체 이 외에도 null이 아닌(non-null)
        객체를 예외로 발생(throw)시킬 수 있습니다.
      </p>
    </>
  );
};

export default Index;
