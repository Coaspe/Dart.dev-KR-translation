import Link from "next/link";
import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Parameters = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="parameters"
        className="font-noto text-primaryTitleTextColor"
      >
        Parameters
      </h2>
      <p>
        함수는 <span className="itailc">required positional</span> 매개변수를
        가질 수 있습니다. 이 과정은 <span className="itailc">named</span>{" "}
        매개변수나 <span className="itailc">optional positinal</span> 매개변수로
        이루어 집니다. (한 매개변수가 동시에 둘의 속성을 가지는 것은 불가능
        합니다.)
        <span className="itailc">required positional</span>과{" "}
        <span className="itailc">optional positinal</span>의 차이를 알고 싶다면,{" "}
        <CAnchor
          text="Named and positional parameters in Dart"
          href="https://stackoverflow.com/questions/13264230/what-is-the-difference-between-named-and-positional-parameters-in-dart#:~:text=Optional%20parameters%20can%20have%20a,%5D)%20%7B%20%2F%2F%20...%20%7D"
        />
        를 참고하세요.
      </p>
      <aside className="alert alert-info" role="alert">
        <p>
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
          </i>{" "}
          <strong>Note:</strong>{" "}
          <Link href="https://flutter.dev" className="external">
            Flutter
          </Link>{" "}
          의 widget 생성자 처럼 몇몇 APIs는 오직 named parameters만을 사용하고,
          강제되는(mandatory) 매개변수에도 똑같이 합니다. 다음 섹션에서 더
          자세히 보시죠.
        </p>
        <p className="mb-0">
          함수의 매개변수를 정의하거나, 넘겨줄 때{" "}
          <CAnchor
            text="trailing commas"
            href="https://dart.dev/guides/language/language-tour#trailing-comma"
          />
          를 사용 할 수 있습니다.
        </p>
      </aside>
      <h3
        style={{
          fontSize: "18px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        className="font-noto text-primaryTitleTextColor"
      >
        Named parameters
      </h3>
      <p>
        Named 매개변수는 <Ccode text="required" />로 마크되지 않는 이상 선택사항
        입니다.
      </p>
      <p>
        함수를 호출 할 때, <Ccode text="paramName: value" className="italic" />{" "}
        을 사용하여 named 매개변수를 정의 할 수 있습니다. 다음의 예를 보시죠.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="pln">enableFlags</span>
        <span className="pun">(</span>
        <span className="pln">bold</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="kwd">true</span>
        <span className="pun">,</span>
        <span className="pln"> hidden</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="kwd">false</span>
        <span className="pun">);</span>
      </pre>
      <p>
        함수를 정의 할 때{" "}
        <Ccode text="{param1, param2, …}" className="italic" /> 을 사용하여
        named 매개변수를 정의 할 수도 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="com">
          &#47;&#47;&#47; Sets the [bold] and [hidden] flags ...
        </span>
        <div />
        <span className="pln"></span>
        <span className="typ">void</span>
        <span className="pln"> enableFlags</span>
        <span className="pun">(&#123;</span>
        <span className="typ">bool</span>
        <span className="pun">?</span>
        <span className="pln"> bold</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="typ">bool</span>
        <span className="pun">?</span>
        <span className="pln"> hidden</span>
        <span className="pun">&#125;)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;...&#125;</span>
      </pre>
      <aside className="alert alert-success" role="alert">
        <p className="mb-0">
          <i className="" data-fa-i2svg="">
            <svg
              className="svg-inline--fa fa-lightbulb fa-w-11"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="lightbulb"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"
              ></path>
            </svg>
          </i>{" "}
          <strong>Tip:</strong>
          만약 매개변수가 optional이지만,{" "}
          <code className="language-plaintext highlighter-rouge">null</code>이
          되는 것을 막고 싶다면{" "}
          <a href="#default-parameter-values">default value</a>을 사용하세요.
        </p>
      </aside>
      <p>
        named 매개변수도 optinal 매개변수의 일종이지만, 두 속성 모두 사용자가 꼭
        전달해야하는 매개변수라는 것을 나타내는 <Ccode text="required" />를 명시
        할 수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <code>
          <span className="kwd">const</span>
          <span className="pln"> </span>
          <span className="typ">Scrollbar</span>
          <span className="pun">(&#123;</span>
          <span className="typ">Key</span>
          <span className="pun">?</span>
          <span className="pln"> key</span>
          <span className="pun">,</span>
          <span className="pln"> </span>
          <span className="highlight">
            <span className="kwd">required</span>
          </span>
          <span className="pln"> </span>
          <span className="typ">Widget</span>
          <span className="pln"> child</span>
          <span className="pun">)</span>
        </code>
      </pre>
      <p>
        위 코드에서의 <Ccode text="child" />를 전달하지 않고,{" "}
        <Ccode text="Scrollbar" />를 생성하려고 한다면, analyer가 이슈를
        리포트합니다.
      </p>
      <h3
        style={{
          fontSize: "18px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        className="font-noto text-primaryTitleTextColor"
      >
        Optional positinal parameters
      </h3>
      <p>
        함수 매개변수 셋을 <Ccode text="[]" />로 감싸면 optional positional
        매개변수가 됩니다.
      </p>
      <div className="code-excerpt__code">
        <pre className="prettyprint lang-dart prettyprinted">
          <span className="typ">String</span>
          <span className="pln"> say</span>
          <span className="pun">(</span>
          <span className="typ">String</span>
          <span className="pln"> from</span>
          <span className="pun">,</span>
          <span className="pln"> </span>
          <span className="typ">String</span>
          <span className="pln"> msg</span>
          <span className="pun">,</span>
          <span className="pln"> </span>
          <span className="pun">[</span>
          <span className="typ">String</span>
          <span className="pun">?</span>
          <span className="pln"> device</span>
          <span className="pun">])</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln">{"  "}</span>
          <span className="kwd">var</span>
          <span className="pln"> result </span>
          <span className="pun">=</span>
          <span className="pln"> </span>
          <span className="str">&#39;&#36;from says &#36;msg&#39;</span>
          <span className="pun">;</span>
          <div />
          <span className="pln">{"  "}</span>
          <span className="kwd">if</span>
          <span className="pln"> </span>
          <span className="pun">(</span>
          <span className="pln">device </span>
          <span className="pun">!=</span>
          <span className="pln"> </span>
          <span className="typ">null</span>
          <span className="pun">)</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln">{"    "}result </span>
          <span className="pun">=</span>
          <span className="pln"> </span>
          <span className="str">&#39;&#36;result with a &#36;device&#39;</span>
          <span className="pun">;</span>
          <div />
          <span className="pln">{"  "}</span>
          <span className="pun">&#125;</span>
          <div />
          <span className="pln">{"  "}</span>
          <span className="kwd">return</span>
          <span className="pln"> result</span>
          <span className="pun">;</span>
          <div />
          <span className="pln"></span>
          <span className="pun">&#125;</span>
        </pre>
      </div>
      <p>
        아래는 위의 함수에서 optional 매개변수를 넘기지 않고 호출하는 예제
        입니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">say</span>
        <span className="pun">(</span>
        <span className="str">&#39;Bob&#39;</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="str">&#39;Howdy&#39;</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="str">&#39;Bob says Howdy&#39;</span>
        <span className="pun">);</span>
      </pre>
      <p>아래는 세번째 매개변수(optional)을 넘겨주며 호출하는 예제 입니다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">say</span>
        <span className="pun">(</span>
        <span className="str">&#39;Bob&#39;</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="str">&#39;Howdy&#39;</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="str">&#39;smoke signal&#39;</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <div />
        <span className="pln">{"    "}</span>
        <span className="str">
          &#39;Bob says Howdy with a smoke signal&#39;
        </span>
        <span className="pun">);</span>
      </pre>
      <h3
        style={{
          fontSize: "18px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        className="font-noto text-primaryTitleTextColor"
      >
        Default parameter values
      </h3>
      <p>
        named와 positinal의 optional 매개변수 초기 값을 할당하려면{" "}
        <Ccode text="=" />를 사용하면 됩니다. 초기 값은 컴파일 타임 상수입니다.
        만약 초기 값이 주어지지 않는다면, 초기 값은 <Ccode text="null" /> 값이
        됩니다.
      </p>
      <p>다음은 named 매개변수의 초기 값을 설정하는 예제 입니다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="com">
          &#47;&#47;&#47; Sets the [bold] and [hidden] flags ...
        </span>
        <div />
        <span className="pln"></span>
        <span className="typ">void</span>
        <span className="pln"> enableFlags</span>
        <span className="pun">(&#123;</span>
        <span className="typ">bool</span>
        <span className="pln"> bold </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">false</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="typ">bool</span>
        <span className="pln"> hidden </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">false</span>
        <span className="pun">&#125;)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;...&#125;</span>
        <span className="pln"></span>
        <div> </div>
        <span className="com">
          &#47;&#47; bold will be true; hidden will be false.
        </span>
        <div />
        <span className="pln">enableFlags</span>
        <span className="pun">(</span>
        <span className="pln">bold</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="kwd">true</span>
        <span className="pun">);</span>
      </pre>
      <aside className="alert alert-info" role="alert">
        <p className="mb-0">
          <i data-fa-i2svg="">
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
          <strong>Deprecation note:</strong> 오래된 코드는 (
          <code className="language-plaintext highlighter-rouge">=</code>)
          대신에 <code className="language-plaintext highlighter-rouge">:</code>
          을 named 매개변수의 초기 값을 설정하는 데 사용 합니다. 원래, 오직{" "}
          <code className="language-plaintext highlighter-rouge">:</code>
          만을 named 매개변수를 위해 지원했습니다. 하지만 더 이상 지원하지 않게
          되었고, 우리(Dart)는{" "}
          <strong>
            <a href="/guides/language/effective-dart/usage#do-use--to-separate-a-named-parameter-from-its-default-value">
              초기 값을 위해{" "}
              <code className="language-plaintext highlighter-rouge">=</code> 을
              사용하는 것
            </a>
          </strong>
          을 추천합니다.
        </p>
      </aside>
      <p>다음은 positional 매개변수의 초기 값을 설정하는 예제 입니다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="typ">String</span>
        <span className="pln"> say</span>
        <span className="pun">(</span>
        <span className="typ">String</span>
        <span className="pln"> from</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="typ">String</span>
        <span className="pln"> msg</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="typ">String</span>
        <span className="pln"> device </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;carrier pigeon&#39;</span>
        <span className="pun">])</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}</span>
        <span className="kwd">var</span>
        <span className="pln"> result </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;$from says $msg with a $device&#39;</span>
        <span className="pun">;</span>
        <div />
        <span className="pln">{"  "}</span>
        <span className="kwd">return</span>
        <span className="pln"> result</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">say</span>
        <span className="pun">(</span>
        <span className="str">&#39;Bob&#39;</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="str">&#39;Howdy&#39;</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="str">
          &#39;Bob says Howdy with a carrier pigeon&#39;
        </span>
        <span className="pun">);</span>
      </pre>
      <p>
        list나 map을 초기 값으로 넘겨줄 수 있습니다. 다음 예제는{" "}
        <Ccode text="doStuff()" /> 함수를 정의하고 <Ccode text="list" />{" "}
        매개변수로 list 초기 값을, <Ccode text="gifts" /> 매개변수로 map 초기
        값을 받습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="typ">void</span>
        <span className="pln"> doStuff</span>
        <span className="pun">(</span>
        <div />
        <span className="pln">{"   "}</span>
        <span className="pun">&#123;</span>
        <span className="typ">List</span>
        <span className="pun">&lt;</span>
        <span className="typ">int</span>
        <span className="pun">&gt;</span>
        <span className="pln"> list </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="lit">1</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">3</span>
        <span className="pun">],</span>
        <div />
        <span className="pln">{"   "}</span>
        <span className="typ">Map</span>
        <span className="pun">&lt;</span>
        <span className="typ">String</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="typ">String</span>
        <span className="pun">&gt;</span>
        <span className="pln"> gifts </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"     "}</span>
        <span className="str">&#39;first&#39;</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">&#39;paper&#39;</span>
        <span className="pun">,</span>
        <div />
        <span className="pln">{"     "}</span>
        <span className="str">&#39;second&#39;</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">&#39;cotton&#39;</span>
        <span className="pun">,</span>
        <div />
        <span className="pln">{"     "}</span>
        <span className="str">&#39;third&#39;</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">&#39;leather&#39;</span>
        <div />
        <span className="pln">{"   "}</span>
        <span className="pun">&#125;&#125;)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"> print</span>
        <span className="pun">(</span>
        <span className="str">&#39;list: $list&#39;</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"> print</span>
        <span className="pun">(</span>
        <span className="str">&#39;gifts: $gifts&#39;</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
    </>
  );
};

export default Parameters;
