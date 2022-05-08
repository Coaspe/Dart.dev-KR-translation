import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Maps = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="maps"
        className="font-noto text-primaryTitleTextColor"
      >
        Maps
      </h2>
      <p>
        일반적으로, map은 keys와 values를 사용하는 객체입니다. keys와 values
        모두 어떤 타입의 객체든 가능합니다. 모든{" "}
        <span className="italic">key</span>는 고유하지만,{" "}
        <span className="italic">value</span>는 중복된 값을 사용하는 것이
        가능합니다. Dart는 map 리터럴과{" "}
        <CAnchor
          text="Map"
          href="https://api.dart.dev/stable/dart-core/Map-class.html"
        />{" "}
        타입으로 maps를 지원합니다.
      </p>
      <p>다음은 map 리터럴을 사용한 여러가지 예제 입니다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> gifts </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="com"> &#47;&#47; Key: Value</span>
        <div />
        <span className="pln"></span>
        <span className="str"> &#39;first&#39;</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str"> &#39;partridge&#39;</span>
        <span className="pun">,</span>
        <div />
        <span className="pln"></span>
        <span className="str"> &#39;second&#39;</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str"> &#39;turtledoves&#39;</span>
        <span className="pun">,</span>
        <div />
        <span className="pln"></span>
        <span className="str"> &#39;fifth&#39;</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str"> &#39;golden rings&#39;</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> nobleGases </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="lit">{"  "}2</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">&#39;helium&#39;</span>
        <span className="pun">,</span>
        <div />
        <span className="pln"></span>
        <span className="lit">{"  "}10</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">&#39;neon&#39;</span>
        <span className="pun">,</span>
        <div />
        <span className="pln"></span>
        <span className="lit">{"  "}18</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">&#39;argon&#39;</span>
        <span className="pun">,</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;;</span>
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
          </i>{" "}
          <strong>Note:</strong>
          Dart는{" "}
          <code className="language-plaintext highlighter-rouge">gifts</code> 의
          타입을{" "}
          <code className="language-plaintext highlighter-rouge">
            Map&lt;String, String&gt;
          </code>
          로{" "}
          <code className="language-plaintext highlighter-rouge">
            nobleGases
          </code>
          의 타입을{" "}
          <code className="language-plaintext highlighter-rouge">
            Map&lt;int, String&gt;
          </code>
          로 추정합니다. 만약 map에 다른 타입을 추가하려고 시도하면, analyzer나
          런타임이 에러를 발생시킵니다. 더 많은 정보를 원한다면,{" "}
          <CAnchor
            href="/guides/language/type-system#type-inference"
            text="type inference"
          />
          를 확인하세요.
        </p>
      </aside>
      <p>Map 생성자를 사용해도 같은 객체를 생성할 수 있습니다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> gifts </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">Map</span>
        <span className="pun">&lt;</span>
        <span className="typ">String</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="typ">String</span>
        <span className="pun">&gt;();</span>
        <div />
        <span className="pln">gifts</span>
        <span className="pun">[</span>
        <span className="str">&#39;first&#39;</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;partridge&#39;</span>
        <span className="pun">;</span>
        <div />
        <span className="pln">gifts</span>
        <span className="pun">[</span>
        <span className="str">&#39;second&#39;</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;turtledoves&#39;</span>
        <span className="pun">;</span>
        <div />
        <span className="pln">gifts</span>
        <span className="pun">[</span>
        <span className="str">&#39;fifth&#39;</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;golden rings&#39;</span>
        <span className="pun">;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> nobleGases </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">Map</span>
        <span className="pun">&lt;</span>
        <span className="typ">int</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="typ">String</span>
        <span className="pun">&gt;();</span>
        <div />
        <span className="pln">nobleGases</span>
        <span className="pun">[</span>
        <span className="lit">2</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;helium&#39;</span>
        <span className="pun">;</span>
        <div />
        <span className="pln">nobleGases</span>
        <span className="pun">[</span>
        <span className="lit">10</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;neon&#39;</span>
        <span className="pun">;</span>
        <div />
        <span className="pln">nobleGases</span>
        <span className="pun">[</span>
        <span className="lit">18</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;argon&#39;</span>
        <span className="pun">;</span>
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
          </i>{" "}
          <strong>Note:</strong> 만약 C#이나 Java에 익숙하다면{" "}
          <code className="language-plaintext highlighter-rouge">Map()</code>{" "}
          보다{" "}
          <code className="language-plaintext highlighter-rouge">
            new Map()
          </code>
          를 사용하는 것에 더 익숙할 것 입니다.{" "}
          <code className="language-plaintext highlighter-rouge">new</code>{" "}
          keyword는 선택적입니다. 더 자세한 정보를 원한다면,{" "}
          <CAnchor
            text="Using constructors"
            href="https://dart.dev/guides/language/language-tour#using-constructors"
          />
          를 참고하세요.
        </p>
      </aside>
      <p>
        Javascript에서 처럼 새로운 key-value 쌍을 map에 추가 할 수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> gifts </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <span className="str">&#39;first&#39;</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">&#39;partridge&#39;</span>
        <span className="pun">&#125;;</span>
        <div />
        <span className="pln">gifts</span>
        <span className="pun">[</span>
        <span className="str">&#39;fourth&#39;</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;calling birds&#39;</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Add a key-value pair</span>
      </pre>
      <p>
        Map으로 부터 value를 얻는 것도, Javascript와 같은 방법을 사용합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> gifts </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <span className="str">&#39;first&#39;</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">&#39;partridge&#39;</span>
        <span className="pun">&#125;;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">gifts</span>
        <span className="pun">[</span>
        <span className="str">&#39;first&#39;</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="str">&#39;partridge&#39;</span>
        <span className="pun">);</span>
      </pre>
      <p>만약 key가 map에 존재하지 않는다면, null 값을 반환합니다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> gifts </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <span className="str">&#39;first&#39;</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">&#39;partridge&#39;</span>
        <span className="pun">&#125;;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">gifts</span>
        <span className="pun">[</span>
        <span className="str">&#39;fifth&#39;</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="typ">null</span>
        <span className="pun">);</span>
      </pre>
      <p>
        Map의 key-value 쌍의 수를 알고 싶다면, <Ccode text=".length" />를
        사용하세요.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> gifts </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <span className="str">&#39;first&#39;</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">&#39;partridge&#39;</span>
        <span className="pun">&#125;;</span>
        <div />
        <span className="pln">gifts</span>
        <span className="pun">[</span>
        <span className="str">&#39;fourth&#39;</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;calling birds&#39;</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">gifts</span>
        <span className="pun">.</span>
        <span className="pln">length </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">);</span>
      </pre>
      <p>
        Map을 컴파일 타임 상수로 선언하고 싶다면, <Ccode text="const" />를 map
        리터럴에 추가하세요.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">final</span>
        <span className="pln"> constantMap </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="lit">{"  "}2</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">&#39;helium&#39;</span>
        <span className="pun">,</span>
        <div />
        <span className="pln"></span>
        <span className="lit">{"  "}10</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">&#39;neon&#39;</span>
        <span className="pun">,</span>
        <div />
        <span className="pln"></span>
        <span className="lit">{"  "}18</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="str">&#39;argon&#39;</span>
        <span className="pun">,</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;;</span>
        <span className="pln"></span>
        <div> </div>
        <span className="com">
          &#47;&#47; constantMap[2] = &#39;Helium&#39;; &#47;&#47; This line
          will cause an error.
        </span>
      </pre>
      <p>
        Maps에 대한 더 자세한 정보를 원한다면,{" "}
        <CAnchor
          text="generics"
          href="https://dart.dev/guides/language/language-tour#generics"
        />{" "}
        섹션과{" "}
        <CAnchor
          text="Maps API"
          href="https://dart.dev/guides/libraries/library-tour#maps"
        />
        를 참고하세요.
      </p>
    </>
  );
};
export default Maps;
