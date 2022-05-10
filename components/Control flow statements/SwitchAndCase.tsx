import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const SwitchAndCase = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="switch-and-case"
        className="font-noto text-primaryTitleTextColor"
      >
        Switch와 case
      </h2>
      <p>
        Dart의 Switch문은 정수, string, 컴파일 타임 상수를 <Ccode text="==" />{" "}
        를 사용해서 비교합니다. 비교 되는 두 객체는 반드시 같은 클래스의
        인스턴스여야 합니다. 그리고 그 클래스는 <Ccode text="==" /> 를 override
        해서는 안 됩니다.{" "}
        <CAnchor
          text="Enumerated types"
          href="https://dart.dev/guides/language/language-tour#enumerated-types"
        />
        은 <Ccode text="switch" />
        문에서 효과적입니다.
      </p>
      <p>
        비어있지 않은 <Ccode text="case" />는 <Ccode text="break" />로 끝이
        납니다. 비어있지 않은 <Ccode text="case" />를 끝내는 다른 방법으로는{" "}
        <Ccode text="continue" />, <Ccode text="throw" />,{" "}
        <Ccode text="return" />이 있습니다.
      </p>
      <p>
        <Ccode text="default" />는 매치되는 <Ccode text="case" />가 없을 때
        실행됩니다.
      </p>

      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> command </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;OPEN&#39;</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">switch</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">command</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}case</span>
        <span className="pln"> </span>
        <span className="str">&#39;CLOSED&#39;</span>
        <span className="pun">:</span>
        <div />
        <span className="pln">{"    "}executeClosed</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"    "}break</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <div />
        <span className="kwd">{"  "}case</span>
        <span className="pln"> </span>
        <span className="str">&#39;PENDING&#39;</span>
        <span className="pun">:</span>
        <div />
        <span className="pln">{"    "}executePending</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"    "}break</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}case</span>
        <span className="pln"> </span>
        <span className="str">&#39;APPROVED&#39;</span>
        <span className="pun">:</span>
        <div />
        <span className="pln">{"    "}executeApproved</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"    "}break</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}case</span>
        <span className="pln"> </span>
        <span className="str">&#39;DENIED&#39;</span>
        <span className="pun">:</span>
        <div />
        <span className="pln">{"    "}executeDenied</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"    "}break</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}case</span>
        <span className="pln"> </span>
        <span className="str">&#39;OPEN&#39;</span>
        <span className="pun">:</span>
        <div />
        <span className="pln">{"    "}executeOpen</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"    "}break</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}default</span>
        <span className="pun">:</span>
        <div />
        <span className="pln">{"    "}executeUnknown</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <p>
        다음 예제에서 <Ccode text="case" /> 안에서 <Ccode text="break" />를
        생략하고, 에러가 발생합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> command </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&339;OPEN&339;</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">switch</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">command</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&3123;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}case</span>
        <span className="pln"> </span>
        <span className="str">&#39;OPEN&#39;</span>
        <span className="pun">:</span>
        <div />
        <span className="pln">{"    "}executeOpen</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <div />
        <span className="com">{"    "}&#47;&#47; ERROR: Missing break</span>
        <span className="pln"></span>
        <div />
        <span className="kwd">{"  "}case</span>
        <span className="pln"> </span>
        <span className="str">&#39;CLOSED&#39;</span>
        <span className="pun">:</span>
        <div />
        <span className="pln">{"    "}executeClosed</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"    "}break</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <p>
        그러나, Dart는 &#34;구현되지 않음&#34;을 나타내기 위해,{" "}
        <Ccode text="case" />를 비울 수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> command </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;CLOSED&#39;</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">switch</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">command</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}case</span>
        <span className="pln"> </span>
        <span className="str">&#39;CLOSED&#39;</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Empty case falls through.</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}case</span>
        <span className="pln"> </span>
        <span className="str">&#39;NOW_CLOSED&#39;</span>
        <span className="pun">:</span>
        <div />
        <span className="pln"></span>
        <span className="com">
          {"    "}&#47;&#47; Runs for both CLOSED and NOW_CLOSED.
        </span>
        <div />
        <span className="pln">{"    "}executeNowClosed</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"    "}break</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <p>
        만약 &#34;구현되지 않음&#34;을 정말 사용하고 싶다면,{" "}
        <Ccode text="contiune" />를 라벨과 함께 사용하면 됩니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> command </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;CLOSED&#39;</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">switch</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">command</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}case</span>
        <span className="pln"> </span>
        <span className="str">&#39;CLOSED&#39;</span>
        <span className="pun">:</span>
        <span className="pln">{"    "}executeClosed</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"    "}continue</span>
        <span className="pln"> nowClosed</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="com">
          {"  "}&#47;&#47; Continues executing at the nowClosed label.
        </span>
        <div> </div>
        <span className="pln">{"  "}nowClosed</span>
        <span className="pun">:</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}case</span>
        <span className="pln"> </span>
        <span className="str">&#39;NOW_CLOSED&#39;</span>
        <span className="pun">:</span>
        <div />
        <span className="pln"></span>
        <span className="com">
          {"    "}&#47;&#47; Runs for both CLOSED and NOW_CLOSED.
        </span>
        <div />
        <span className="pln">{"    "}executeNowClosed</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"    "}break</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <p>
        <Ccode text="case" />는 해당 법위 안에서만 존재하는 지역 변수를 가질 수
        있습니다.
      </p>
    </>
  );
};

export default SwitchAndCase;
