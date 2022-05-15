import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const ExtensionMethods = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="constructors"
        className="font-noto text-primaryTitleTextColor"
      >
        확장 메서드(Extension methods)
      </h2>
      <p>
        확장 메서드는 이미 존제하는 라이브러리에 기능을 추가하는 방법 입니다.
        당신은 확장 메서드가 무엇인지 모른채 사용 할 수도 있습니다. 예를 들면,
        만약 IDE를 사용해서 코드를 구현하면, IDE는 regular 메서드가 아닌 확장
        메서드를 추천 할 수도 있습니다.
      </p>
      <p>
        다음은 <Ccode text="string_apis.dart" />에 정의되어 있는{" "}
        <Ccode text="String" />의 확장 메서드인 <Ccode text="parseInt()" />의
        예제 입니다.
      </p>
      <div className="language-dart highlighter-rouge">
        <div className="highlight">
          <pre className="highlight">
            <code>
              <span className="kn">import</span>{" "}
              <span className="s">&#39;string_apis.dart&#39;</span>
              <span className="o">;</span>
              <div />
              <span className="o">...</span>
              <div />
              <span className="n">print</span>
              <span className="o">(</span>
              <span className="s">&#39;42&#39;</span>
              <span className="o">.</span>
              <span className="na">padLeft</span>
              <span className="o">(</span>
              <span className="mi">5</span>
              <span className="o">));</span>{" "}
              <span className="c1">&#47;&#47; Use a String method.</span>
              <div />
              <span className="n">print</span>
              <span className="o">(</span>
              <span className="s">&#39;42&#39;</span>
              <span className="o">.</span>
              <span className="na">parseInt</span>
              <span className="o">());</span>{" "}
              <span className="c1">&#47;&#47; Use an extension method.</span>
            </code>
          </pre>
        </div>
      </div>
      <p>
        확장 메서드의 구현과 활용을 더 자세히 알고 싶다면,{" "}
        <CAnchor
          text="extension methods page"
          href="https://dart.dev/guides/language/extension-methods"
        />
        를 참고하세요.
      </p>
    </>
  );
};

export default ExtensionMethods;
