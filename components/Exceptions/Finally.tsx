import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Finally = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="finally"
        className="font-noto text-primaryTitleTextColor"
      >
        Finally
      </h2>
      <p>
        예외가 발생했던 아니던 어떤 코드를 실행하고 싶다면,{" "}
        <Ccode text="finally" /> 문을 사용하세요. 만약, 어떠한{" "}
        <Ccode text="catch" />도 예외를 처리하지 못했다면,{" "}
        <Ccode text="finally" />
        문이 실행된 이후에 예외가 전파됩니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">try</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}breedMoreLlamas</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
        <span className="pln"> </span>
        <span className="kwd">finally</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="com">
          {"  "}&#47;&#47; Always clean up, even if an exception is thrown.
        </span>
        <div />
        <span className="pln">{"  "}cleanLlamaStalls</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <div />
        <span className="pun">&#125;</span>
      </pre>
      <p>
        <Ccode text="finally" />
        문은 <Ccode text="catch" />
        문의 매칭을 시도 한 뒤 실행됩니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">try</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}breedMoreLlamas</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
        <span className="pln"> </span>
        <span className="kwd">catch</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">e</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}print</span>
        <span className="pun">(</span>
        <span className="str">&#39;Error: $e&#39;</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Handle the exception first.</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
        <span className="pln"> </span>
        <span className="kwd">finally</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}cleanLlamaStalls</span>
        <span className="pun">();</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Then clean up.</span>
        <span className="pln"></span>
        <div />
        <span className="pun">&#125;</span>
      </pre>
      <p>
        예외에 대해 더 자세히 알고 싶다면,{" "}
        <CAnchor
          text="Exceptions"
          href="https://dart.dev/guides/libraries/library-tour#exceptions"
        />
        를 참고하세요.
      </p>
    </>
  );
};

export default Finally;
