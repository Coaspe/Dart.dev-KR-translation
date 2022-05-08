import { text } from "stream/consumers";
import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const FinalAndConst = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        className="font-noto text-primaryTitleTextColor"
        id="final-and-const"
      >
        Final And Const
      </h2>
      <p>
        만약 어떤 변수의 값을 바꿀 생각이 없다면, <Ccode text="var" />
        이나 다른 타입으로 변수를 선언하는 대신, <Ccode text="final" />
        이나 <Ccode text="const" />를 사용하세요. final 변수는 오직 한 번만 선언
        될 수 있고, const 변수는 컴파일 타임 상수&#40;constant&#41;
        입니다.&#40;Const 변수는 암묵적으로 final와 같습니다.&#41;
      </p>
      <aside className="font-noto font-bold">
        <p style={{ marginBottom: 0 }}>
          <div className="flex items-center">
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
            <strong className="mx-1">Note:</strong>
            <CAnchor
              text="Instance variables"
              href="https://dart.dev/guides/language/language-tour#instance-variables"
            />{" "}
            는 <Ccode text="final" className="ml-1" />일 수 있지만,
            <Ccode text="const" className="ml-1" /> 일 수 없습니다.
          </div>
        </p>
      </aside>
      <p>
        다음은 <Ccode text="final" className="mr-1" />
        변수를 선언하고 할당하는 예 입니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">final</span>
        <span className="pln"> name </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;Bob&#39;</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Without a type annotation</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">final</span>
        <span className="pln"> </span>
        <span className="typ">String</span>
        <span className="pln"> nickname </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;Bobby&#39;</span>
        <span className="pun">;</span>
      </pre>
      <p>
        <Ccode text="final" className="mr-1" />
        변수는 값을 수정할 수 없습니다.
      </p>
      <div className="code-excerpt fails-sa">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="pln">name </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="str">&#39;Alice&#39;</span>
            <span className="pun">;</span>
            <span className="pln"> </span>
            <span className="com">
              &#47;&#47; Error: a final variable can only be set once.
            </span>
          </pre>
        </div>
      </div>
      <p>
        <span className="font-sans" style={{ fontWeight: 700 }}>
          컴파일 타임 상수&#40;compile time constant&#41;
        </span>
        를 생성하고 싶다면, <Ccode text="const" />를 사용하세요. 만약 const
        변수가 class level 이라면, <Ccode text="static const" />로 선언하세요.
        변수를 선언 할 때 숫자나 문자 리터럴 같은 컴파일 타임 상수로 선언하거나,
        산술 연산의 결과를 숫자 상수로 설정합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> bar </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">1000000</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">
          &#47;&#47; Unit of pressure &#40;dynes/cm2&#41;
        </span>
        <div />
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">double</span>
        <span className="pln"> atm </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">1.01325</span>
        <span className="pln"> </span>
        <span className="pun">*</span>
        <span className="pln"> bar</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Standard atmosphere</span>
      </pre>
      <p>
        <Ccode text="const" /> 키워드는 단지 상수 변수를 선언할 때만 쓰이는 것은
        아닙니다. 상수 값을 생성할 뿐만 아니라 상수 값을 생성하는 생성자를
        선언하는 데도 사용할 수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> foo </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="pun">&#91;&#93;;</span>
        <div />
        <span className="kwd">final</span>
        <span className="pln"> bar </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="pun">&#91;&#93;;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> baz </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">&#91;&#93;;</span>
        <span className="pln"> </span>
        <span className="com">
          &#47;&#47; Equivalent to &#96;const &#91;&#93;&#96;
        </span>
      </pre>
      <p>
        당신은 <Ccode text="const" />를 선언 할 때, 위의 <Ccode text="baz" />{" "}
        처럼
        <Ccode text="const" className="ml-1" />를 생략 할 수 있습니다. 더 자세한
        정보를 원한다면,{" "}
        <CAnchor
          text="DON’T use const redundantly"
          href="https://dart.dev/guides/language/effective-dart/usage#dont-use-const-redundantly"
        />
        를 참고하세요.
      </p>
      <p>
        당신은 final, const가 아닌 변수의 값을 변경 할 수 있습니다. 그 변수가{" "}
        <Ccode text="const" /> 였다고 해도 말이죠.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="pln">foo </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="lit">1</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">3</span>
        <span className="pun">];</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Was const []</span>
      </pre>
      <p>
        하지만 <Ccode text="const" /> 변수는 수정 할 수 없습니다.
      </p>
      <div className="code-excerpt fails-sa">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="pln">baz </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="pun">[</span>
            <span className="lit">42</span>
            <span className="pun">];</span>
            <span className="pln"> </span>
            <span className="com">
              &#47;&#47; Error: Constant variables can&#39;t be assigned a
              value.
            </span>
          </pre>
        </div>
      </div>
      <p>
        <CAnchor
          className="mr-1"
          text="type checks와 casts"
          href="https://dart.dev/guides/language/language-tour#type-test-operators"
        />
        &#40;
        <Ccode text="is" className="mr-1" />와
        <Ccode text="as" className="ml-1" />
        &#41;,{" "}
        <CAnchor
          text="collection if"
          href="https://dart.dev/guides/language/language-tour#collection-operators"
        />
        ,
        <CAnchor
          className="ml-1"
          text="spread operators"
          href="https://dart.dev/guides/language/language-tour#spread-operator"
        />
        &#40;
        <Ccode text="..." /> 와 <Ccode text="...?" />
        &#41; 를 사용해서 상수를 정의 할 수도 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">Object</span>
        <span className="pln"> i </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">3</span>
        <span className="pun">;</span>
        <span className="com">
          &#47;&#47; Where i is a const Object with an int value...
        </span>
        <div />
        <span className="kwd">const</span>
        <span className="pln"> list </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="pln">i </span>
        <span className="kwd">as</span>
        <span className="pln"> </span>
        <span className="typ">int</span>
        <span className="pun">];</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Use a typecast.</span>
        <div />
        <span className="kwd">const</span>
        <span className="pln"> map </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">i </span>
        <span className="kwd">is</span>
        <span className="pln"> </span>
        <span className="typ">int</span>
        <span className="pun">)</span>
        <span className="pln"> i</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">&#39;int&#39;</span>
        <span className="pun">&#125;;</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Use is and collection if.</span>
        <div />
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="kwd">set</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">list </span>
        <span className="kwd">is</span>
        <span className="pln"> </span>
        <span className="typ">List</span>
        <span className="pun">&lt;</span>
        <span className="typ">int</span>
        <span className="pun">&gt;)</span>
        <span className="pln"> </span>
        <span className="pun">...</span>
        <span className="pln">list</span>
        <span className="pun">&#125;;</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; ...and a spread.</span>
      </pre>
      <aside className="font-noto font-bold">
        <i className="inline-block align-middle">
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
        <strong className="mx-1">Note:</strong>
        <Ccode text="final" /> 객체는 수정이 불가능 하지만, 그것의 fields는
        변경이 가능합니다. 하지만 <Ccode text="const" /> 객체는 fields 또한
        변경이 불가능 하고 그것을 <span className="italic">immutable</span>{" "}
        하다고 합니다.
      </aside>
      <p>
        <Ccode text="const" />를 사용한 상수 선언에 대해 더 알아보고 싶다면,{" "}
        <CAnchor
          text="Lists"
          href="https://dart.dev/guides/language/language-tour#lists"
        />
        ,
        <CAnchor
          className="ml-1"
          text="Maps"
          href="https://dart.dev/guides/language/language-tour#maps"
        />
        ,
        <CAnchor
          className="ml-1"
          text="Classes"
          href="https://dart.dev/guides/language/language-tour#classes"
        />
        를 참고하세요.
      </p>
    </>
  );
};

export default FinalAndConst;
