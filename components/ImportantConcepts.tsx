import CAnchor from "./Custom/CAnchor";
import Ccode from "./Custom/Ccode";
import Link from "next/link";

const ImportantConcepts = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="important-concepts"
        className="font-noto text-primaryTitleTextColor"
      >
        중요한 컨셉
      </h2>
      <p
        style={{ fontWeight: 600, marginBottom: "1rem" }}
        className="font-noto"
      >
        Dart를 학습 할 때 다음을 잘 기억해야합니다.
      </p>
      <ul
        style={{
          marginBottom: "1rem",
          fontWeight: 600,
          margin: "0px 0px 0px 40px",
        }}
        className="list-disc font-noto"
      >
        <li>
          <p>
            변수로 할당 할 수 있는 모든 것은 object(객체)이고 모든 object는
            className=의 instance 입니다. numbers, functions 그리고 null까지
            모두 objects 입니다. null을 제외하고(만약 sound null safety가
            가능하다면) 모든 objects들은 Object className=를 상속받습니다.
          </p>
          <aside className="font-noto font-bold">
            <i className="inline-block">
              <svg
                style={{ width: "0.7rem" }}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="code-branch"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"
                ></path>
              </svg>
            </i>
            <strong className="mx-1">Version note:</strong>
            <Link
              className="text-selectedText hover:text-selectedTextHover"
              href="https://dart.dev/null-safety"
            >
              Null safety
            </Link>
            는 Dart 2.12에서 처음 소개되었습니다. null safety를 사용하기 위해서
            적어도 2.12. 이상의 버젼이 필요합니다.
          </aside>
        </li>
        <li>
          <p style={{ marginBottom: "1rem" }}>
            Dart는 타입에 엄격하지만(strongly typed), Dart는 타입을 추정할 수
            있기 때문에 타입을 명시하는 것(type annotations)은 자율에 맡깁니다.{" "}
          </p>
        </li>
        <li>
          <p>
            만약 당신이{" "}
            <Link
              className="text-selectedText hover:text-selectedTextHover"
              href="https://dart.dev/null-safety"
            >
              null safety
            </Link>
            가 가능하다면, 당신이 어떤 변수가{" "}
            <code className="text-textGreen">null</code> 값을 갖는 것을 허락하지
            않았을 때 그 변수는 null 값을 갖을 수 없게 할 수 있습니다. 당신은 ?
            표시를 변수의 타입 끝에 붙혀서{" "}
            <code className="text-textGreen">null</code> 값이 할당 될 수
            있게(nullable) 만들 수 있습니다. (<code>String? cat = null</code>{" "}
            이런 식으로, <code>String cat = null</code>
            이건 안 된다는 말이다.) 만약 어떤 변수가{" "}
            <code className="text-textGreen">null</code> 값을 갖지 못하게 하고
            싶다면 ! 를 표시하면 된다. (nullable를 non-nullable로 바꿔준다는
            말이다. )
          </p>
          <aside className="font-noto font-bold">
            <code>error!.toUpperCase()</code> 이런 식으로 사용한다. error에
            <code className="text-textGreen ml-1">null</code> 값이 오면
            exception을 throw한다.
          </aside>
        </li>
        <li>
          <p style={{ marginBottom: "1rem" }}>
            만약에 어떤 타입이든 적용이 가능하다고 명시하고 싶다면{" "}
            <code className="text-textGreen ml-1">Object?</code>나
            <code className="text-textGreen ml-1">Object</code>를 타입으로
            정해주면 된다. 만약에 런타임 까지 타입 체킹을 미뤄야 한다면{" "}
            <Link
              className="text-selectedText hover:text-selectedTextHover"
              href="https://dart.dev/guides/language/effective-dart/design#avoid-using-dynamic-unless-you-want-to-disable-static-checking"
            >
              special type dynamic
            </Link>{" "}
            을 사용하세요.
          </p>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <p>
            Dart는 List <Ccode text="&lt;int&gt;" /> 나{" "}
            <Ccode text="List&lt;Object&gt;" /> 같은 generic 타입을 지원합니다.
          </p>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <p>
            Dart는 className=또는 Object에 있는(tied) 함수뿐 아니라,
            <Ccode className="ml-1" text="main()" /> 같은 top-level 함수를
            지원합니다. 함수 안에 함수를 선언하는 것도 가능합니다.
          </p>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <p>
            비슷하게 Dart는 className=또는 Object에 있는(tied) 변수뿐 아니라,
            top-level 변수를 지원합니다. 인스턴스{" "}
            <span className="italic">변수</span>는{" "}
            <span className="italic">fields</span>나{" "}
            <span className="italic">properties</span>로 알려져 있습니다.
          </p>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <p>
            Java와 다르게 Dart는 <Ccode className="ml-1" text="public," />
            <Ccode className="ml-1" text="protected," />
            <Ccode className="ml-1" text="private" />
            같은 keywords를 사용하지 않습니다. 만약 식별자(identifier 변수의
            이름 정도로 생각)가 underscore(_)로 시작한다면 그것은 해당 library에
            귀속(private)되는 것 입니다. 더 자세한 정보는{" "}
            <CAnchor
              href="https://dart.dev/guides/language/language-tour#libraries-and-visibility"
              text="Libraries
              and visibility"
            />
            에서 확인하세요.
          </p>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <p>
            Dart에는 <span className="itailc">expressions</span>(런타입 values를
            갖는 것)와 statements(갖지 않는 것)가 있습니다. expression의 예를
            들면,
            <CAnchor
              className="ml-1"
              href="https://dart.dev/guides/language/language-tour#conditional-expressions"
              text="conditional expression"
            />{" "}
            <Ccode text="condition ? expr1 : expr2" /> 는{" "}
            <Ccode text="expr1, expr2" />
            이라는 value를 갖습니다. 그것을 value를 갖지 않는{" "}
            <CAnchor
              className="ml-1"
              href="https://dart.dev/guides/language/language-tour#if-and-else"
              text="if-else statement"
            />
            와 비교해 보세요. statement는 한개 혹은 다수의 expressions을 갖을 수
            있지만 expression은 statement를 갖을 수 없습니다.
          </p>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <p>
            Dart tools는 발생되는 문제를 두가지 방법으로 알려줍니다: warnings
            그리고 errors. Warnings는 당신의 코드가 아마도 실행되지 않을
            것이라고 알려주지만, 프로그램 자체가 실행되지 못하게 막지 않습니다.
            Errors는 컴파일 타임, 런타임으로 나뉩니다. 컴파일 타임 에러는 코드가
            실행되는 것 자체를 막습니다. 런타임 에러는 코드가 실행되는 동안{" "}
            <CAnchor
              href="https://dart.dev/guides/language/language-tour#exceptions"
              text="exception"
            />
            을 발생시킵니다.
          </p>
        </li>
      </ul>
    </>
  );
};

export default ImportantConcepts;
