import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const InstanceVariables = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="instance-variables"
        className="font-noto text-primaryTitleTextColor"
      >
        인스턴스 변수
      </h2>
      <p>인스턴스 변수는 다음과 같이 선언합니다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">class</span>
        <span className="pln"> </span>
        <span className="typ">Point</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="typ">{"  "}double</span>
        <span className="pun">?</span>
        <span className="pln"> x</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">
          &#47;&#47; Declare instance variable x, initially null.
        </span>
        <div />
        <span className="pln"></span>
        <span className="typ">{"  "}double</span>
        <span className="pun">?</span>
        <span className="pln"> y</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Declare y, initially null.</span>
        <div />
        <span className="pln"></span>
        <span className="typ">{"  "}double</span>
        <span className="pln"> z </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Declare z, initially 0.</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <p>
        초기화 되지 않은 인스턴스 변수는 <Ccode text="null" /> 값을 가집니다.
      </p>
      <p>
        모든 인스턴스 변수는 내부적으로 <span className="italic">getter</span>{" "}
        메서드를 실행합니다. initializers가 없는 final이 아닌 변수 그리고{" "}
        <Ccode text="late final" /> 인스턴스 변수 또한 내부적으로{" "}
        <span className="italic">setter</span> 메서드를 실행합니다. 더 자세히
        알고 싶다면,{" "}
        <CAnchor
          text="Getters and setters"
          href="https://dart.dev/guides/language/language-tour#getters-and-setters"
        />
        를 참고하세요.
      </p>
      <p>
        <Ccode text="late" />가 아닌 인스턴스 변수가 선언 된 동시에 초기화 되면,
        생성자와 해당 initializer 목록이 실행되기 전에 값이 설정됩니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">class</span>
        <span className="pln"> </span>
        <span className="typ">Point</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <span className="pln"></span>
        <div />
        <span className="typ">{"  "}double</span>
        <span className="pun">?</span>
        <span className="pln"> x</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">
          &#47;&#47; Declare instance variable x, initially null.
        </span>
        <div />
        <span className="pln"></span>
        <span className="typ">{"  "}double</span>
        <span className="pun">?</span>
        <span className="pln"> y</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Declare y, initially null.</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="typ">void</span>
        <span className="pln"> main</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}var</span>
        <span className="pln"> point </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">Point</span>
        <span className="pun">();</span>
        <div />
        <span className="pln">{"  "}point</span>
        <span className="pun">.</span>
        <span className="pln">x </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">4</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Use the setter method for x.</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}assert</span>
        <span className="pun">(</span>
        <span className="pln">point</span>
        <span className="pun">.</span>
        <span className="pln">x </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">4</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Use the getter method for x.</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}assert</span>
        <span className="pun">(</span>
        <span className="pln">point</span>
        <span className="pun">.</span>
        <span className="pln">y </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="typ">null</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Values default to null.</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <p>
        인스턴스 변수는 <Ccode text="final" />로 선언 될 수 있고, 그런 경우에는
        단 한 번만 값이 정확하게 할당됩니다. <Ccode text="final" />과{" "}
        <Ccode text="non-late" /> 인스턴스 변수를 선언 할 때 생성자 매개변수나,
        생성자의{" "}
        <CAnchor
          text="initializer list"
          href="https://dart.dev/guides/language/language-tour#initializer-list"
        />{" "}
        를 사용해 초기화 하세요.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">class</span>
        <span className="pln"> </span>
        <span className="typ">ProfileMark</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}final</span>
        <span className="pln"> </span>
        <span className="typ">String</span>
        <span className="pln"> name</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}final</span>
        <span className="pln"> </span>
        <span className="typ">DateTime</span>
        <span className="pln"> start </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">DateTime</span>
        <span className="pun">.</span>
        <span className="pln">now</span>
        <span className="pun">();</span>
        <div> </div>
        <span className="pln"></span>
        <span className="typ">{"  "}ProfileMark</span>
        <span className="pun">(</span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">name</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="typ">{"  "}ProfileMark</span>
        <span className="pun">.</span>
        <span className="pln">unnamed</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">:</span>
        <span className="pln"> name </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;&#39;</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <p>
        생성자 바디가 시작된 후에 <Ccode text="final" /> 인스턴스 변수의 값을
        할당하고 싶다면, 다음 중 하나를 사용하세요.
      </p>
      <ul className="ll">
        <li>
          Use a <a href="#factory-constructors">factory constructor</a>.
        </li>
        <li>
          <code className="language-plaintext highlighter-rouge">
            late final
          </code>
          를
          <a href="/guides/language/effective-dart/design#avoid-public-late-final-fields-without-initializers">
            <em>주의해서 </em>
          </a>
          사용하세요: initializer가 없는{" "}
          <code className="language-plaintext highlighter-rouge">
            late final
          </code>{" "}
          는 API에 setter를 추가합니다.
        </li>
      </ul>
    </>
  );
};

export default InstanceVariables;
