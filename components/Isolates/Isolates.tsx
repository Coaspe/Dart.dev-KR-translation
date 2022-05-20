const Isolates = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="isolates"
        className="font-noto text-primaryTitleTextColor"
      >
        Isolates
      </h2>
      <p>
        대부분의 컴퓨터는, 모바일에서도, 멀티 코어 CPUs를 가집니다. 이 모든
        코어를 적절히 사용하기 위해서, 개발자는 예로부터 공유 메모리 쓰레드들을
        동시에 사용해왔습니다. 그러나 상태를 공유하며 동시 실행(shared-state
        concurrency) 하는 것은 에러를 발생 시킬 수 있고, 코드 또한 복잡해집니다.
      </p>
      <p>
        쓰레드를 대체하기 위해, Dart는 <span className="italic">isolates</span>
        의 안에서 코드를 실행합니다. 각각의 Dart isoate는 하나의 실행 쓰레드를
        가지고, 다른 isolates 들과 변할 수 있는 객체들에 대해 공유하지 않습니다.
      </p>
      <p>더 자세히 알고 싶다면, 다음을 참고하세요.</p>
      <ul className="ll">
        <li>
          <a href="/guides/language/concurrency">Concurrency in Dart</a>
        </li>
        <li>
          <a
            href="https://api.dart.dev/stable/dart-isolate"
            className="external"
          >
            dart:isolate API reference,
          </a>
          including{" "}
          <a
            href="https://api.dart.dev/stable/dart-isolate/Isolate/spawn.html"
            className="external"
          >
            Isolate.spawn()
          </a>{" "}
          and
          <a
            href="https://api.dart.dev/stable/dart-isolate/TransferableTypedData-class.html"
            className="external"
          >
            TransferableTypedData
          </a>
        </li>
        <li>
          <a
            href="https://docs.flutter.dev/cookbook/networking/background-parsing"
            className="external"
          >
            Background parsing
          </a>{" "}
          cookbook on the Flutter site
        </li>
        <li>
          <a
            href="https://github.com/flutter/samples/tree/master/isolate_example"
            className="external"
          >
            Isolate sample app
          </a>
        </li>
      </ul>
    </>
  );
};

export default Isolates;
