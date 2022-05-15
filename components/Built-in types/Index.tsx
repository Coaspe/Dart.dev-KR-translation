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
        id="built-in-types"
        className="font-noto text-primaryTitleTextColor"
      >
        Built-in types
      </h2>
      <p>Dart는 다음의 타입들을 지원합니다.</p>
      <ul
        style={{
          marginBottom: "1rem",
          fontWeight: 600,
          margin: "0px 0px 0px 40px",
        }}
        className="list-disc font-noto"
      >
        <li>
          <p style={{ marginBottom: "0" }}>
            <CAnchor
              text="Numbers"
              className="mr-1"
              href="https://dart.dev/guides/language/language-tour#numbers"
            />
            &#40;
            <Ccode text="int" />,
            <Ccode text="double" className="ml-1" />
            &#41;
          </p>
        </li>
        <li>
          <p style={{ marginBottom: "0" }}>
            <CAnchor
              text="Strings"
              className="mr-1"
              href="https://dart.dev/guides/language/language-tour#strings"
            />
            &#40;
            <Ccode text="String" />
            &#41;
          </p>
        </li>
        <li>
          <p style={{ marginBottom: "0" }}>
            <CAnchor
              text="Booleans"
              className="mr-1"
              href="https://dart.dev/guides/language/language-tour#booleans"
            />
            &#40;
            <Ccode text="bool" />
            &#41;
          </p>
        </li>
        <li>
          <p style={{ marginBottom: "0" }}>
            <CAnchor
              text="Lists"
              className="mr-1"
              href="https://dart.dev/guides/language/language-tour#lists"
            />
            &#40;
            <Ccode className="mr-1" text="List," />
            <span className="italic">arrays</span>라고도 불립니다.&#41;
          </p>
        </li>
        <li>
          <p style={{ marginBottom: "0" }}>
            <CAnchor
              text="Sets"
              className="mr-1"
              href="https://dart.dev/guides/language/language-tour#sets"
            />
            &#40;
            <Ccode text="Set" />
            &#41;
          </p>
        </li>
        <li>
          <p style={{ marginBottom: "0" }}>
            <CAnchor
              text="Maps"
              className="mr-1"
              href="https://dart.dev/guides/language/language-tour#maps"
            />
            &#40;
            <Ccode text="Map" />
            &#41;
          </p>
        </li>
        <li>
          <p style={{ marginBottom: "0" }}>
            <CAnchor
              text="Runes"
              className="mr-1"
              href="https://dart.dev/guides/language/language-tour#characters"
            />
            &#40;
            <Ccode text="Runes" />; 종종
            <Ccode className="ml-1" text="characters" /> API로 대체됩니다.&#41;
          </p>
        </li>
        <li>
          <p style={{ marginBottom: "0" }}>
            <CAnchor
              text="Symbols"
              className="mr-1"
              href="https://dart.dev/guides/language/language-tour#characters"
            />
            &#40;
            <Ccode text="Symbol" />
            &#41;
          </p>
        </li>
        <li>
          <p style={{ marginBottom: "1rem" }}>
            The value
            <Ccode className="mx-1" text="null" />
            &#40;
            <Ccode text="Null" />
            &#41;
          </p>
        </li>
      </ul>
      <p>
        위와 같은 타입들은 literals를 사용해 객채를 생성하는 것이 가능합니다.
        예를 들면, <Ccode text="'this is a string'" />는 문자 리터럴 이고,{" "}
        <Ccode text="true" />는 boolean 리터럴 입니다.
      </p>
      <p>
        Dart의 모든 변수들은 <span className="italic">className=</span>의
        인스턴스인 객체이므로, 변수를 초기화 할 때,{" "}
        <span className="italic">생성자&#40;constructors&#41;</span>를
        사용합니다. 예를 들면, <Ccode className="mr-1" text="Map()" />
        생성자를 map을 생성하기 위해 사용합니다.
      </p>
      <p>아래와 같은 다른 타입들도 Dart에서 특별한 역할을 수행합니다.</p>
      <ul
        style={{
          marginBottom: "1rem",
          fontWeight: 600,
          margin: "0px 0px 0px 40px",
        }}
        className="list-disc font-noto"
      >
        <li>
          <p style={{ marginBottom: "0" }}>
            <Ccode text="Object" />
            :
            <Ccode className="ml-1" text="Null" />을 제외한 모든 Dart
            className=es의 superclassName=
          </p>
        </li>
        <li>
          <p style={{ marginBottom: "0" }}>
            <Ccode text="Enum" />: enums의 superclassName=
          </p>
        </li>
        <li>
          <p style={{ marginBottom: "0" }}>
            <Ccode className="mr-1" text="Future" />과
            <Ccode className="ml-1" text="Stream" />
            <span className="mr-1">&#58;</span>{" "}
            <CAnchor
              text="asynchrony support"
              className="mr-1"
              href="https://dart.dev/guides/language/language-tour#asynchrony-support"
            />{" "}
            작업을 할 때 사용합니다.
          </p>
        </li>
        <li>
          <p style={{ marginBottom: "0" }}>
            <Ccode text="Iterable" />
            <span className="mr-1">&#58;</span>
            <CAnchor
              text="for-in loops"
              className="mr-1"
              href="https://dart.dev/guides/libraries/library-tour#iteration"
            />{" "}
            와 동기
            <CAnchor
              text="generator functions"
              className="ml-1"
              href="https://dart.dev/guides/libraries/library-tour#iteration"
            />
            에 사용됩니다.
          </p>
        </li>
        <li>
          <p style={{ marginBottom: "0" }}>
            <Ccode text="Never" />: expression의 평가(실행 정도로 봐도 됨)를
            성공하지 못함을 나타냅니다. 항상 예외(exception)을 발생시키는 함수에
            많이 사용됩니다.
          </p>
        </li>
        <li>
          <p style={{ marginBottom: "0" }}>
            <Ccode text="dynamic" />: 정적인 타입 체킹을 불가능하게 합니다. 보통{" "}
            <Ccode text="Object" />
            이나 <Ccode text="Object?" />
            을 사용합니다. &#40;
            <Ccode text="Map" />
            &#41;
          </p>
        </li>
        <li>
          <p>
            <Ccode text="void" />: 어떤 값이 사용되지 않을 것이라는 뜻을
            나타냅니다. 보통 반환 값의 타입으로 사용됩니다.
          </p>
        </li>
      </ul>
      <p>
        <CAnchor
          text="Understanding null safety"
          href="https://dart.dev/null-safety/understanding-null-safety"
        />
        의{" "}
        <CAnchor
          text="top-and-bottom"
          href="https://dart.dev/null-safety/understanding-null-safety#top-and-bottom"
        />
        에 묘사되어 있는 것 처럼, <Ccode text="Object" />,{" "}
        <Ccode text="Object?" />, <Ccode text="Null" />, <Ccode text="Never" />{" "}
        클래스들은 클래스 계층에서 특별한 역할을 수행합니다.
      </p>
    </>
  );
};

export default Index;
