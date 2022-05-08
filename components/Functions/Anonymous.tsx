import Ccode from "../Custom/Ccode";

const Anonymous = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="functions-as-first-class-objects"
        className="font-noto text-primaryTitleTextColor"
      >
        익명 함수
      </h2>
      <p>
        대부분의 함수들은 <Ccode text="main()" />나{" "}
        <Ccode text="printElement()" /> 처럼 이름이 있습니다. 하지만{" "}
        <span className="italic">익명(anonymous) 함수</span>,{" "}
        <span className="italic">람다(lambda)</span>,{" "}
        <span className="italic">클로져(closure)</span> 같이 이름이 없는 함수가
        있습니다. 익명 함수를 변수에 선언해서 collection에 추가하고 제거하는
        것도 가능합니다.
      </p>
      <p>
        익명 함수는 괄호 안에 콤마로 분리된 매개변수들, optional 타입 표기까지,
        이름이 있는 함수들과 비슷합니다.
      </p>
      <p>다음 코드 블럭은 함수 바디를 포함합니다.</p>
      <p>
        <code>
          ([[<em>Type</em>] <em>param1</em>[, …]]) &#123; <br />
          &nbsp;&nbsp;<em>codeBlock</em>; <br />
          &#125;; <br />
        </code>
      </p>
      <p>
        다음 예제는 타입을 명시하지 않은 <Ccode text="item" />
        으로 익명 함수를 정의했습니다. 이 함수는 list의 모든 아이템을 순회하며,
        인덱스에 해당하는 string 값을 출력합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> list </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="str">&#39;apples&#39;</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="str">&#39;bananas&#39;</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="str">&#39;oranges&#39;</span>
        <span className="pun">];</span>
        <div />
        <span className="pln">list</span>
        <span className="pun">.</span>
        <span className="pln">forEach</span>
        <span className="pun">((</span>
        <span className="pln">item</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}print</span>
        <span className="pun">(</span>
        <span className="str">
          &#39;$&#123;list.indexOf(item)&#125;: $item&#39;
        </span>
        <div />
        <span className="pun">);</span>
        <span className="pln"></span>
        <span className="pun">&#125;);</span>
      </pre>
      <p>
        만약 함수가 하나의 수식이나 구문을 반환한다면, 화살표 표기법을 사용하여
        코드를 간결하게 만들 수 있습니다. 다음 코드는 위의 코드와 같은 결과를
        출력합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="pln">list</span>
        <span className="pun">.</span>
        <span className="pln">forEach</span>
        <span className="pun">((</span>
        <span className="pln">item</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> print</span>
        <span className="pun">(</span>
        <span className="str">
          &#39;$&#123;list.indexOf(item)&#125;: $item&#39;
        </span>
        <span className="pun">));</span>
      </pre>
    </>
  );
};

export default Anonymous;
