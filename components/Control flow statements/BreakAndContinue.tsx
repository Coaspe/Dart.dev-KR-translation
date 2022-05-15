import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const BreakAndContinue = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="break-and-continue"
        className="font-noto text-primaryTitleTextColor"
      >
        Break 와 continue
      </h2>
      <p>
        Looping을 멈추고 싶다면 <Ccode text="break" />를 사용하세요.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">while</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="kwd">true</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">shutDownRequested</span>
        <span className="pun">())</span>
        <span className="pln"> </span>
        <span className="kwd">break</span>
        <span className="pun">;</span>
        <div />
        <span className="pln">{"  "}processIncomingRequests</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <p>
        다음 loop 반복을 건너 뛰고 싶다면, <Ccode text="continue" />를
        사용하세요.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">for</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="typ">int</span>
        <span className="pln"> i </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <span className="pln"> i </span>
        <span className="pun">&lt;</span>
        <span className="pln"> candidates</span>
        <span className="pun">.</span>
        <span className="pln">length</span>
        <span className="pun">;</span>
        <span className="pln"> i</span>
        <span className="pun">++)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}var</span>
        <span className="pln"> candidate </span>
        <span className="pun">=</span>
        <span className="pln"> candidates</span>
        <span className="pun">[</span>
        <span className="pln">i</span>
        <span className="pun">];</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">candidate</span>
        <span className="pun">.</span>
        <span className="pln">yearsExperience </span>
        <span className="pun">&lt;</span>
        <span className="pln"> </span>
        <span className="lit">5</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"    "}continue</span>
        <span className="pun">;</span>
        <span className="pln"></span>
        <span className="pun">{"  "}&#125;</span>
        <div />
        <span className="pln">{"  "}candidate</span>
        <span className="pun">.</span>
        <span className="pln">interview</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <p>
        만약 list와 set 같은{" "}
        <CAnchor
          text="Iterable"
          href="https://api.dart.dev/stable/dart-core/Iterable-className=.html"
        />{" "}
        을 사용한다면, 위의 예를 다음과 같이 바꿀 수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="pln">candidates</span>
        <div />
        <span className="pun">{"    "}.</span>
        <span className="pln">where</span>
        <span className="pun">((</span>
        <span className="pln">c</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> c</span>
        <span className="pun">.</span>
        <span className="pln">yearsExperience </span>
        <span className="pun">&gt;=</span>
        <span className="pln"> </span>
        <span className="lit">5</span>
        <span className="pun">)</span>
        <div />
        <span className="pln"></span>
        <span className="pun">{"    "}.</span>
        <span className="pln">forEach</span>
        <span className="pun">((</span>
        <span className="pln">c</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> c</span>
        <span className="pun">.</span>
        <span className="pln">interview</span>
        <span className="pun">());</span>
      </pre>
    </>
  );
};

export default BreakAndContinue;
