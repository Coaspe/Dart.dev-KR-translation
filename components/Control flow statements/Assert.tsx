import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Assert = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="assert"
        className="font-noto text-primaryTitleTextColor"
      >
        Assert
      </h2>
      <p>
        개발 도중에 boolean 조건이 false 일 때 코드 진행을 멈추고 싶다면{" "}
        <Ccode text="assert(condition, optionalMessage);" />를 사용하세요. 이
        페이지에서 많은 assert의 예제를 볼 수 있을 겁니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="com">
          &#47;&#47; Make sure the variable has a non-null value.
        </span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">text </span>
        <span className="pun">!=</span>
        <span className="pln"> </span>
        <span className="typ">null</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="pln"></span>
        <span className="com">
          &#47;&#47; Make sure the value is less than 100.
        </span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">number </span>
        <span className="pun">&lt;</span>
        <span className="pln"> </span>
        <span className="lit">100</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="pln"></span>
        <span className="com">&#47;&#47; Make sure this is an https URL.</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">urlString</span>
        <span className="pun">.</span>
        <span className="pln">startsWith</span>
        <span className="pun">(</span>
        <span className="str">&#39;https&#39;</span>
        <span className="pun">));</span>
      </pre>
      <p>
        assertion에 메시지를 추가하고 싶다면, <Ccode text="assert" />의 두번째
        인자에 string을 넘겨주세요.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">urlString</span>
        <span className="pun">.</span>
        <span className="pln">startsWith</span>
        <span className="pun">(</span>
        <span className="str">&#39;https&#39;</span>
        <span className="pun">),</span>
        <div />
        <span className="pln"></span>
        <span className="str">
          {"    "}&#39;URL ($urlString) should start with &#34;https&#34;.&#39;
        </span>
        <span className="pun">);</span>
      </pre>
      <p>
        <Ccode text="assert" />의 첫 번째 인자는 boolean 값을 내놓는 표현식이
        전해집니다. 만약 표현식이 참이라면, assertion은 성공하고 코드가 계속
        진행됩니다. 만약 false라면, assertion은 실패하고 exception(
        <CAnchor
          text="AssertionError"
          href="https://api.dart.dev/stable/dart-core/AssertionError-class.html"
        />
        ) 이 발생합니다.
      </p>
      <p>
        Assertions은 언제 효과적일까? 그건 어떤 툴과 프레임워크를 사용하는 지에
        달려있습니다.
      </p>
      <ul className="list-disc ll">
        <li>
          플러터는 assertions을{" "}
          <a
            href="https://docs.flutter.dev/testing/debugging#debug-mode-assertions"
            className="external"
          >
            debug mode.
          </a>{" "}
          에서 사용 할 수 있습니다.
        </li>
        <li>
          <a href="/tools/dartdevc">dartdevc</a> 같은 오직 개발만을 위한 툴은
          보통 assertions이 기본적으로 가능합니다.
        </li>
        <li>
          <a href="/tools/dart-run">
            <code className="language-plaintext highlighter-rouge">
              dart run
            </code>
          </a>{" "}
          이나 <a href="/tools/dart2js">dart2js</a> 같은 툴들은{" "}
          <code className="language-plaintext highlighter-rouge">
            --enable-asserts
          </code>{" "}
          커맨드를 이용해 assertion 사용이 가능합니다. .
        </li>
      </ul>
      <p>
        실제 사용하는 소스코드(production code)에서는 assertion이 무시되고,{" "}
        <Ccode text="assert" />의 첫번째 인자는 평가되지 않습니다.
      </p>
    </>
  );
};

export default Assert;
