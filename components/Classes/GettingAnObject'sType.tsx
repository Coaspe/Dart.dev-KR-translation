import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const GettingAnObjectsType = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="getting-an-objects-type"
        className="font-noto text-primaryTitleTextColor"
      >
        객체의 타입 검출
      </h2>
      <p>
        런타임에서 객체의 타입을 얻고 싶다면,{" "}
        <CAnchor
          text="Type"
          href="https://api.dart.dev/stable/dart-core/Type-className=.html"
        />{" "}
        객체를 반환하는 <Ccode text="Object" />의 프로퍼티인{" "}
        <Ccode text="runtimeType" />을 사용하세요.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="pln">print</span>
        <span className="pun">(</span>
        <span className="str">
          &#39;The type of a is $&#123;a.runtimeType&#125;&#39;
        </span>
        <span className="pun">);</span>
      </pre>
      <p className="mb-0">
        <i>
          <svg
            className="svg-inline--fa fa-exclamation-triangle fa-w-18"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="exclamation-triangle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
            ></path>
          </svg>
        </i>
        객체의 타입을 테스트하려면,
        <code className="language-plaintext highlighter-rouge">
          runtimeType
        </code>{" "}
        대신
        <a href="#type-test-operators">타입 테스트 연산자</a>를 사용하세요.
        프로덕션 환경에서,{" "}
        <code className="language-plaintext highlighter-rouge">
          object is Type
        </code>{" "}
        테스트가
        <code className="language-plaintext highlighter-rouge">
          object.runtimeType == Type
        </code>
        테스트 보다 더 안전합니다.
      </p>
      <p>
        여기까지 클래스를 어떻게 <span className="italic">사용</span>하는지에
        대해 알아보았습니다. 나머지 섹션에서는 어떻게{" "}
        <span className="italic">구현</span>하는지에 대해 알아보겠습니다.
      </p>
    </>
  );
};

export default GettingAnObjectsType;
