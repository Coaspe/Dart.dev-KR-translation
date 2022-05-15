import Link from "next/link";
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
        id="functions"
        className="font-noto text-primaryTitleTextColor"
      >
        Functions
      </h2>
      <p>
        Dart는 객체지향 언어입니다. 그렇기에 함수또한 객체이고 타입을 가집니다.{" "}
        <CAnchor
          text="함수"
          href="https://api.dart.dev/stable/dart-core/Function-className=.html"
        />{" "}
        이것은 함수가 변수에 할당되고, 다른 함수의 매개변수로 전달 될 수 있다는
        것을 의미합니다. Dart 클래스의 인스턴스를 함수처럼 호출하는 것 또한
        가능합니다. 더 자세한 정보를 원한다면,{" "}
        <CAnchor
          text="Callable className=es"
          href="https://dart.dev/guides/language/language-tour#callable-className=es"
        />
        를 참고하세요.
      </p>
      <p>다음은 함수를 구현하는 예제 입니다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="typ">bool</span>
        <span className="pln"> isNoble</span>
        <span className="pun">(</span>
        <span className="typ">int</span>
        <span className="pln"> atomicNumber</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}</span>
        <span className="kwd">return</span>
        <span className="pln"> _nobleGases</span>
        <span className="pun">[</span>
        <span className="pln">atomicNumber</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">!=</span>
        <span className="pln"> </span>
        <span className="typ">null</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <p>
        Effective Dart는{" "}
        <CAnchor
          text="public APIs의 타입 명시"
          href="https://dart.dev/guides/language/effective-dart/design#do-type-annotate-fields-and-top-level-variables-if-the-type-isnt-obvious"
        />
        를 추천하지만, 타입을 생략해도 여전히 잘 동작합니다:
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="pln">isNoble</span>
        <span className="pun">(</span>
        <span className="pln">atomicNumber</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}</span>
        <span className="kwd">return</span>
        <span className="pln"> _nobleGases</span>
        <span className="pun">[</span>
        <span className="pln">atomicNumber</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">!=</span>
        <span className="pln"> </span>
        <span className="typ">null</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <p>
        하나의 식만 가지고 있는 함수라면, 다음과 같은 생략된 문법을 사용 할 수
        있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="typ">bool</span>
        <span className="pln"> isNoble</span>
        <span className="pun">(</span>
        <span className="typ">int</span>
        <span className="pln"> atomicNumber</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> _nobleGases</span>
        <span className="pun">[</span>
        <span className="pln">atomicNumber</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">!=</span>
        <span className="pln"> </span>
        <span className="typ">null</span>
        <span className="pun">;</span>
      </pre>
      <p>
        <Ccode text="=> 수식" /> 문법은 <Ccode text="{ return 수식; }" />의 약칭
        입니다. <Ccode text="=>" /> 표기법은{" "}
        <span className="italic">화살표(arrow)</span> 문법이라고 불립니다.
      </p>
      <aside className="alert alert-info" role="alert">
        <p className="mb-0">
          <i className="" data-fa-i2svg="">
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
          </i>{" "}
          <strong>Note:</strong>
          <em>statement</em>가 아닌, <em>수식(expression)</em> 만이 화살표
          (=&gt;) 와 세미콜론 (;) 사이에 위치 할 수 있습니다. 예를 들면,{" "}
          <Link href="#if-and-else">if 문</Link>은 사용 할 수 없지만,{" "}
          <Link href="#conditional-expressions">conditional expression</Link>은
          사용 할 수 있습니다.
        </p>
      </aside>
    </>
  );
};

export default Index;
