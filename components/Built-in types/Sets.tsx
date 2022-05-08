import Link from "next/link";
import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Sets = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="sets"
        className="font-noto text-primaryTitleTextColor"
      >
        Sets
      </h2>
      <p>
        Dart에서의 set은 고유한 항목들의 순서가 없는 집합 입니다. Dart의 Sets 은
        set 리터럴 및{" "}
        <CAnchor
          text="Sets"
          href="https://api.dart.dev/stable/dart-core/Set-class.html"
        />{" "}
        type로 지원됩니다.
      </p>
      <p>다음은 set 리터럴을 이용한 간단한 Dart의 set 예제입니다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> halogens </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <span className="str">&#39;fluorine&#39;</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="str">&#39;chlorine&#39;</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="str">&#39;bromine&#39;</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="str">&#39;iodine&#39;</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="str">&#39;astatine&#39;</span>
        <span className="pun">&#125;;</span>
      </pre>
      <aside className="font-noto font-bold">
        <i className="inline-block ">
          <svg
            style={{ width: "1rem" }}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="info-circle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
            ></path>
          </svg>
        </i>
        <strong className="mx-1">Note:</strong>Dart는 <Ccode text="halogens" />
        을 <Ccode text="Set<String>" /> 타입으로 추정합니다. 만약 set에 다른
        타입을 추가하려고 시도하면, analyzer나 런타임이 에러를 발생시킵니다. 더
        자세한 정보를 원한다면,{" "}
        <Link
          className="text-selectedText hover:text-selectedTextHover mx-1"
          href="https://dart.dev/guides/language/type-system#type-inference"
        >
          type inference
        </Link>
        를 참고하세요.
      </aside>
      <p>
        빈 set을 생성하고 싶다면, <Ccode text="{}" />나 <Ccode text="Set" />에
        타입을 붙혀서 사용하면 됩니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> names </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">&lt;</span>
        <span className="typ">String</span>
        <span className="pun">&gt;&#123;&#125;;</span>
        <div />
        <span className="pln"></span>
        <span className="com">
          &#47;&#47; Set&lt;String&gt; names = &#123;&#125;; // This works, too.
        </span>
        <div />
        <span className="pln"></span>
        <span className="com">
          &#47;&#47; var names = &#123;&#125;; // Creates a map, not a set.
        </span>
      </pre>
      <aside className="alert alert-info" role="alert">
        <p className="mb-0">
          <i className="" data-fa-i2svg="">
            <svg
              className="svg-inline--fa fa-info-circle fa-w-16"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="info-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
              ></path>
            </svg>
          </i>
          <strong>Set or map?</strong> map 리터럴과 set 리터럴 문법은
          유사합니다.
          <code className="language-plaintext highlighter-rouge">
            &#123;&#125;
          </code>
          은 기본적으로{" "}
          <code className="language-plaintext highlighter-rouge">Map</code>{" "}
          type을 생성하기 때문입니다. 만약{" "}
          <code className="language-plaintext highlighter-rouge">
            &#123;&#125;
          </code>
          이나 이것이 할당될 변수에 타입을 명시하는 것을 잊었다면, Dart는{" "}
          <code className="language-plaintext highlighter-rouge">
            Map&lt;dynamic, dynamic&gt;
          </code>
          의 객체를 생성합니다. .
        </p>
      </aside>
      <p>
        <Ccode text="add()" />나 <Ccode text="addAll()" />를 사용하여 존재하는
        set에 아이템을 추가할 수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> elements </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">&lt;</span>
        <span className="typ">String</span>
        <span className="pun">&gt;&#123;&#125;;</span>
        <div />
        <span className="pln">elements</span>
        <span className="pun">.</span>
        <span className="pln">add</span>
        <span className="pun">(</span>
        <span className="str">&#39;fluorine&#39;</span>
        <span className="pun">);</span>
        <div />
        <span className="pln">elements</span>
        <span className="pun">.</span>
        <span className="pln">addAll</span>
        <span className="pun">(</span>
        <span className="pln">halogens</span>
        <span className="pun">);</span>
      </pre>
      <p>
        <Ccode text=".length" />를 사용하여 set의 크기를 알 수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> elements </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">&lt;</span>
        <span className="typ">String</span>
        <span className="pun">&gt;{};</span>
        <div />
        <span className="pln">elements</span>
        <span className="pun">.</span>
        <span className="pln">add</span>
        <span className="pun">(</span>
        <span className="str">&#39;fluorine&#39;</span>
        <span className="pun">);</span>
        <div />
        <span className="pln">elements</span>
        <span className="pun">.</span>
        <span className="pln">addAll</span>
        <span className="pun">(</span>
        <span className="pln">halogens</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">elements</span>
        <span className="pun">.</span>
        <span className="pln">length </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">5</span>
        <span className="pun">);</span>
      </pre>
      <p>
        set을 컴파일 타임 상수로 선언하고 싶다면, <Ccode text="const" />를 set
        리터럴 앞에 추가하세요.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">final</span>
        <span className="pln"> constantSet </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}</span>
        <span className="str">&#39;fluorine&#39;</span>
        <span className="pun">,</span>
        <div />
        <span className="pln">{"  "}</span>
        <span className="str">&#39;chlorine&#39;</span>
        <span className="pun">,</span>
        <div />
        <span className="pln">{"  "}</span>
        <span className="str">&#39;bromine&#39;</span>
        <span className="pun">,</span>
        <div />
        <span className="pln">{"  "}</span>
        <span className="str">&#39;iodine&#39;</span>
        <span className="pun">,</span>
        <div />
        <span className="pln">{"  "}</span>
        <span className="str">&#39;astatine&#39;</span>
        <span className="pun">,</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;;</span>
        <span className="pln"></span>
        <div />
        <span className="com">
          &#47;&#47; constantSet.add(&#39;helium&#39;); // This line will cause
          an error.
        </span>
      </pre>
      <p>
        Set은 list와 마찬가지로 spread 연산자 (<Ccode text="..." /> 과{" "}
        <Ccode text="...?" />
        ) collection <Ccode text="if, for" />을 지원합니다. 더 자세한 정보를
        얻고 싶다면,{" "}
        <CAnchor
          text="list spread 연산자"
          href="https://dart.dev/guides/language/language-tour#spread-operator"
        />
        와{" "}
        <CAnchor
          text="list collection 연산자"
          href="https://dart.dev/guides/language/language-tour#collection-operators"
        />
        를 참고하세요.
      </p>
      <p>
        Sets에 대한 더 자세한 정보를 얻고 싶다면,{" "}
        <CAnchor
          text="Generics"
          href="https://dart.dev/guides/language/language-tour#generics"
        />
        와{" "}
        <CAnchor
          text="Sets"
          href="https://dart.dev/guides/libraries/library-tour#sets"
        />
        를 참고하세요.
      </p>
    </>
  );
};

export default Sets;
