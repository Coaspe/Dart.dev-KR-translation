import Ccode from "../Custom/Ccode";

const LateVariables = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="late-variables"
        className="font-noto text-primaryTitleTextColor"
      >
        Late 변수
      </h2>
      <p>
        Dart 2.12 에서 <Ccode text="late" /> 수식어가 추가 되었고 2가지 사용
        방법이 있습니다.
      </p>
      <ul
        style={{
          fontWeight: 600,
          marginLeft: "40px",
          marginBottom: "1rem",
        }}
        className="list-disc font-noto"
      >
        <li>선언 후에 초기화된 non-nullable 변수를 선언하는 것</li>
        <li>느리게(Lazily) 변수를 초기화하는 것</li>
      </ul>
      <p>
        Dart의 제어 흐름 분석&#40;control flow anlysis&#41;이 언제 non-nullable
        변수가 사용되기 전에 non-null 값으로 할당 되는지 감지할 수 있지만, 종종
        실패할 때도 있습니다. top-level 변수나 instance 변수는 종종 Dart가
        그것들이 언제 할당 되는지 결정하지 못하기 때문에, 결정하는 것을 시도하지
        않습니다.
      </p>
      <p>
        만약 당신이 어떤 변수가 사용되기 전에 할당 되는 것이 확실하다면, 하지만
        Dart는 그것을 모를 때, 변수를 <Ccode text="late" />로 선언하므로서
        에러를 방지할 수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <div>
          <span className="kwd">late</span>
          <span className="pln"> </span>
          <span className="typ">String</span>
          <span className="pln"> description</span>
          <span className="pun">;</span>
        </div>
        <div> </div>
        <div>
          <span className="typ">void</span>
          <span className="pln"> main</span>
          <span className="pun">&#40;&#41;</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
        </div>
        <div>
          <span className="pln"> description </span>
          <span className="pun">=</span>
          <span className="pln"> </span>
          <span className="str">&#39;Feijoada!&#39;</span>
          <span className="pun">;</span>
        </div>
        <div>
          <span className="pln"> print</span>
          <span className="pun">&#40;</span>
          <span className="pln">description</span>
          <span className="pun">&#41;;</span>
          <span className="pln"></span>
        </div>
        <span className="pun">&#125;</span>
      </pre>
      <aside
        style={{ fontWeight: 600 }}
        className="alert alert-warning"
        role="alert"
      >
        <i className="inline-block mr-1">
          <svg
            className="svg-inline--fa fa-exclamation-triangle fa-w-18"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="exclamation-triangle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
            ></path>
          </svg>
        </i>
        <Ccode text="late" /> 변수의 초기화에 실패한다면, 그 변수를 사용 할 때
        런타임 에러가 발생합니다.
      </aside>
      <p>
        변수를 <Ccode text="late" />로 선언하면서 동시에 초기화하는 경우,
        initializer가 변수를 처음 사용할 때 실행됩니다. 이러한 느린
        초기화&#40;lazy initialization&#41;은 때때로 유용합니다:
      </p>
      <ul
        style={{
          marginBottom: "1rem",
          fontWeight: 600,
          margin: "0px 0px 0px 40px",
        }}
        className="list-disc"
      >
        <li>
          <p className="mb-0">
            사용되지 않을 변수를 초기화하는 것은 낭비가 됩니다.
          </p>
        </li>
        <li>
          <p>
            instance 변수를 초기화하는 중에, 그 변수의 initializer는{" "}
            <Ccode text="this" />에 접근을 해야합니다.
          </p>
        </li>
      </ul>
      <p>
        다음의 예에서,
        <Ccode text="late" className="ml-1" />로 선언한
        <Ccode text="temperature" className="ml-1" /> 변수가 사용되지 않는 다면,
        리소스가 많이 소모되는 <Ccode text="_readThermometer()" /> 함수는 호출
        되지 않습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="com">
          &#47;&#47; This is the program&#39;s only call to
          _readThermometer&#40;&#41;.
        </span>
        <div />
        <span className="pln"></span>
        <span className="highlight">
          <span className="kwd">late</span>
        </span>
        <span className="pln"> </span>
        <span className="typ">String</span>
        <span className="pln"> temperature </span>
        <span className="pun">=</span>
        <span className="pln"> _readThermometer</span>
        <span className="pun">&#40;&#41;;</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Lazily initialized.</span>
      </pre>
    </>
  );
};

export default LateVariables;
