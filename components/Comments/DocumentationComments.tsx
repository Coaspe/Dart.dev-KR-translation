import Link from "next/link";
import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const DocumentationComments = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="documentation-comments"
        className="font-noto text-primaryTitleTextColor"
      >
        문서 주석(Documentation comments )
      </h2>
      <p>
        문서 주석은 <Ccode text="///" />나 <Ccode text="/**" />로 시작하는 멀티
        라인 또는 싱글 라인 주석 입니다. 연이은 라인에 <Ccode text="///" />를
        사용하는 것은 멀티 라인 문서 주석과 같은 효과를 발휘합니다.
      </p>
      <p>
        문서 주석 안에, 괄호로 감싸진 텍스트를 제외한 것은 모두 analyzer가
        무시합니다. 괄호를 사용하여, 클래스, 메소드, 필드, 최상위 변수, 함수,
        매개변수를 참조 할 수 있습니다. 괄호 안에 있는 이름은 문서화된 프로그램
        요소의 렉시컬 스코프 안에서 해석됩니다.
      </p>
      <p>
        다음은 클래스와 인자들에 대한 참조를 가지고 있는 문서 주석에 대한
        예제입니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="com">
              &#47;&#47;&#47; A domesticated South American camelid (Lama
              glama).
            </span>
            <div />
            <span className="pln"></span>
            <span className="com">&#47;&#47;&#47;</span>
            <span className="pln"></span>
            <div />
            <span className="com">
              &#47;&#47;&#47; Andean cultures have used llamas as meat and pack
            </span>
            <div />
            <span className="pln"></span>
            <span className="com">
              &#47;&#47;&#47; animals since pre-Hispanic times.
            </span>
            <div />
            <span className="pln"></span>
            <span className="com">&#47;&#47;&#47;</span>
            <span className="pln"></span>
            <div />
            <span className="com">
              &#47;&#47;&#47; Just like any other animal, llamas need to eat,
            </span>
            <div />
            <span className="pln"></span>
            <span className="com">
              &#47;&#47;&#47; so don&#39;t forget to [feed] them some [Food].
            </span>
            <div />
            <span className="pln"></span>
            <span className="kwd">class</span>
            <span className="pln"> </span>
            <span className="typ">Llama</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}String</span>
            <span className="pun">?</span>
            <span className="pln"> name</span>
            <span className="pun">;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="com">
              {"  "}&#47;&#47;&#47; Feeds your llama [food].
            </span>
            <div />
            <span className="pln"></span>
            <span className="com">{"  "}&#47;&#47;&#47;</span>
            <span className="pln"></span>
            <div />
            <span className="com">
              {"  "}&#47;&#47;&#47; The typical llama eats one bale of hay per
              week.
            </span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}void</span>
            <span className="pln"> feed</span>
            <span className="pun">(</span>
            <span className="typ">Food</span>
            <span className="pln"> food</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="com">{"    "}&#47;&#47; ...</span>
            <div />
            <span className="pln"></span>
            <span className="pun">{"  "}&#125;</span>
            <span className="pln"></span>
            <div> </div>
            <span className="com">
              {"  "}&#47;&#47;&#47; Exercises your llama with an [activity] for
            </span>
            <div />
            <span className="pln"></span>
            <span className="com">
              {"  "}&#47;&#47;&#47; [timeLimit] minutes.
            </span>
            <span className="pln"></span>
            <div />
            <span className="typ">{"  "}void</span>
            <span className="pln"> exercise</span>
            <span className="pun">(</span>
            <span className="typ">Activity</span>
            <span className="pln"> activity</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="typ">int</span>
            <span className="pln"> timeLimit</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="com">{"    "}&#47;&#47; ...</span>
            <span className="pln"></span>
            <div />
            <span className="pun">{"  "}&#125;</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
      <p>
        위 클래스의 생성된 문서에서, <Ccode text="[feed]" />는 문서의{" "}
        <Ccode text="feed" /> 메소드로 링크가 되고, <Ccode text="[Food]" /> 는{" "}
        <Ccode text="Food" /> 클래스로 링크가 됩니다.
      </p>
      <p>
        Dart 코드를 parse하고 HTML 문서를 생성하고 싶다면,{" "}
        <CAnchor text="dart doc" href="https://dart.dev/tools/dart-doc" />
        라는 Dart의 문서 생성 툴을 사용하면 됩니다. 생성된 문서의 예를 보고
        싶다면,{" "}
        <CAnchor
          text="Dart API documentation"
          href="https://api.dart.dev/stable"
        />{" "}
        를 참고하세요. 주석을 어떻게 달아야하는지 조언을 얻고 싶다면,{" "}
        <Link href="/guides/language/effective-dart/documentation">
          <a>Effective Dart: Documentation</a>
        </Link>
        를 참고하세요.
      </p>
    </>
  );
};

export default DocumentationComments;
