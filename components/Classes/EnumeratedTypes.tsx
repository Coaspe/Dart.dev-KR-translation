import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const EnumeratedTypes = () => {
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
        열거 타입(Enumerated types)
      </h2>
      <p>
        열거 타입(Enumerated types), 종종 <em>enumerations</em> 나{" "}
        <em>enums</em>로도 불립니다, 는 정해진 수의 상수 값을 가지는 특별한
        종류의 클래스 입니다.
      </p>
      <aside className="alert alert-info" role="alert">
        <p>
          <i>
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
          모든 enums는 자동으로{" "}
          <a
            href="https://api.dart.dev/stable/dart-core/Enum-class.html"
            className="external"
          >
            <code className="language-plaintext highlighter-rouge">Enum</code>
          </a>{" "}
          클래스를 확장(extend)합니다. 이들은 가려져(sealed) 있으며, 이는
          subclass가 될 수 없고, 구현, 혼합 또는 명시적으로 인스턴스화할 수
          없다는 것을 의미한다.
        </p>

        <p>
          추상 클래스와 믹스인은 명시적으로{" "}
          <code className="language-plaintext highlighter-rouge">Enum</code>을
          구현하거나 확장합니다. 그러나 enum 선언에 의해 구현되거나 enum 선언에
          믹스되지 않는 한, 어떤 개체도 실제로 해당 클래스나 mixin의 타입을
          구현할 수 없습니다.
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
        Enums 선언하기
      </h3>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">enum</span>
            <span className="pln"> </span>
            <span className="typ">Color</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <span className="pln"> red</span>
            <span className="pun">,</span>
            <span className="pln"> green</span>
            <span className="pun">,</span>
            <span className="pln"> blue </span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
      <aside className="alert alert-success" role="alert">
        <p>
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
          Enumerated type을 선언 할 때 복사-붙혀넣기 에러를 방지하기 위해,{" "}
          <a href="#trailing-comma">trailing commas</a>를 사용 할 수 있습니다.
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
        더 발전된 Enums 사용하기
      </h3>
      <p>
        Dart는 필드, 메서드, 상수 생성자 같이 수가 정해져 있는 상수 인스턴스가
        있는 클래스를 선언하는 데 enum을 사용하는 것이 가능합니다.
      </p>
      <p>
        더 발전된 enum을 선언하려면,{" "}
        <CAnchor
          text="클래스"
          href="https://dart.dev/guides/language/language-tour#classes"
        />
        와 비슷하지만 몇가지 다른 문법을 따라야 합니다.
      </p>
      <ul className="ll">
        <li>
          including those added by <a href="#mixins">mixins</a>으로 추가되는
          변수를 포함한 인스턴스 변수들은 모두{" "}
          <code className="language-plaintext highlighter-rouge">final</code>로
          선언되어야만 합니다.
        </li>
        <li>
          모든 <a href="#constant-constructors">generative constructors</a>는
          상수어야만 합니다.
        </li>
        <li>
          <a href="#factory-constructors">Factory constructors</a>는 고정된 enum
          인스턴스 중 하나를 반환 할 수 있습니다.
        </li>
        <li>
          다른 클래스들은
          <a
            href="https://api.dart.dev/stable/dart-core/Enum-class.html"
            className="external"
          >
            <code className="language-plaintext highlighter-rouge">Enum</code>
          </a>{" "}
          으로 확장 될 수 없습니다.
        </li>
        <li>
          <code className="language-plaintext highlighter-rouge">index</code>,{" "}
          <code className="language-plaintext highlighter-rouge">hashCode</code>
          , 항등 연산자인{" "}
          <code className="language-plaintext highlighter-rouge">==</code>는
          오버라이드 할 수 없습니다.
        </li>
        <li>
          <code className="language-plaintext highlighter-rouge">values</code>로
          named된 멤버는 enum에 선언 될 수 없습니다. 만약 enum에 선언한다면,
          자동으로 생성된 정적
          <code className="language-plaintext highlighter-rouge">
            values
          </code>{" "}
          getter와 충돌합니다.
        </li>
        <li>
          Enum의 모든 인스턴스들은 선언의 처음 부분에 선언되어야 하고, 반드시 한
          개 이상의 인스턴스가 선언되어야 합니다.
        </li>
      </ul>
      <p>
        다음은 다수의 인스턴스, 인스턴스 변수, getter 그리고 인터페이스를 가지는
        enum의 선언 예제 입니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">enum</span>
            <span className="pln"> </span>
            <span className="typ">Vehicle</span>
            <span className="pln"> </span>
            <span className="kwd">implements</span>
            <span className="pln"> </span>
            <span className="typ">Comparable</span>
            <span className="pun">&lt;</span>
            <span className="typ">Vehicle</span>
            <span className="pun">&gt;</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln">{"  "}car</span>
            <span className="pun">(</span>
            <span className="pln">tires</span>
            <span className="pun">:</span>
            <span className="pln"> </span>
            <span className="lit">4</span>
            <span className="pun">,</span>
            <span className="pln"> passengers</span>
            <span className="pun">:</span>
            <span className="pln"> </span>
            <span className="lit">5</span>
            <span className="pun">,</span>
            <span className="pln"> carbonPerKilometer</span>
            <span className="pun">:</span>
            <span className="pln"> </span>
            <span className="lit">400</span>
            <span className="pun">),</span>
            <div />
            <span className="pln">{"  "}bus</span>
            <span className="pun">(</span>
            <span className="pln">tires</span>
            <span className="pun">:</span>
            <span className="pln"> </span>
            <span className="lit">6</span>
            <span className="pun">,</span>
            <span className="pln"> passengers</span>
            <span className="pun">:</span>
            <span className="pln"> </span>
            <span className="lit">50</span>
            <span className="pun">,</span>
            <span className="pln"> carbonPerKilometer</span>
            <span className="pun">:</span>
            <span className="pln"> </span>
            <span className="lit">800</span>
            <span className="pun">),</span>
            <div />
            <span className="pln">{"  "}bicycle</span>
            <span className="pun">(</span>
            <span className="pln">tires</span>
            <span className="pun">:</span>
            <span className="pln"> </span>
            <span className="lit">2</span>
            <span className="pun">,</span>
            <span className="pln"> passengers</span>
            <span className="pun">:</span>
            <span className="pln"> </span>
            <span className="lit">1</span>
            <span className="pun">,</span>
            <span className="pln"> carbonPerKilometer</span>
            <span className="pun">:</span>
            <span className="pln"> </span>
            <span className="lit">0</span>
            <span className="pun">);</span>
            <div> </div>
            <span className="pln"></span>
            <span className="kwd">{"  "}const</span>
            <span className="pln"> </span>
            <span className="typ">Vehicle</span>
            <span className="pun">(&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"    "}required</span>
            <span className="pln"> </span>
            <span className="kwd">this</span>
            <span className="pun">.</span>
            <span className="pln">tires</span>
            <span className="pun">,</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"    "}required</span>
            <span className="pln"> </span>
            <span className="kwd">this</span>
            <span className="pun">.</span>
            <span className="pln">passengers</span>
            <span className="pun">,</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"    "}required</span>
            <span className="pln"> </span>
            <span className="kwd">this</span>
            <span className="pun">.</span>
            <span className="pln">carbonPerKilometer</span>
            <span className="pun">,</span>
            <div />
            <span className="pln"></span>
            <span className="pun">{"  "}&#125;);</span>
            <div> </div>
            <span className="pln"></span>
            <span className="kwd">{"  "}final</span>
            <span className="pln"> </span>
            <span className="typ">int</span>
            <span className="pln"> tires</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}final</span>
            <span className="pln"> </span>
            <span className="typ">int</span>
            <span className="pln"> passengers</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}final</span>
            <span className="pln"> </span>
            <span className="typ">int</span>
            <span className="pln"> carbonPerKilometer</span>
            <span className="pun">;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="typ">{"  "}int</span>
            <span className="pln"> </span>
            <span className="kwd">get</span>
            <span className="pln"> carbonFootprint </span>
            <span className="pun">=&gt;</span>
            <span className="pln"> </span>
            <span className="pun">(</span>
            <span className="pln">carbonPerKilometer </span>
            <span className="pun">/</span>
            <span className="pln"> passengers</span>
            <span className="pun">).</span>
            <span className="pln">round</span>
            <span className="pun">();</span>
            <div />
            <span className="pln">{"  "}@override</span>
            <div />
            <span className="typ">{"  "}int</span>
            <span className="pln"> compareTo</span>
            <span className="pun">(</span>
            <span className="typ">Vehicle</span>
            <span className="pln"> other</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">=&gt;</span>
            <span className="pln"> carbonFootprint </span>
            <span className="pun">-</span>
            <span className="pln"> other</span>
            <span className="pun">.</span>
            <span className="pln">carbonFootprint</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
      <p>
        발전된 enums를 선언하는 것을 더 자세히 알고 싶다면,{" "}
        <CAnchor
          text="Classes"
          href="https://dart.dev/guides/language/language-tour#classes"
        />
        를 참고하세요.
      </p>
      <aside className="alert alert-info" role="alert">
        <p>
          <i className="" data-fa-i2svg="">
            <svg
              className="svg-inline--fa fa-code-branch fa-w-12"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="code-branch"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"
              ></path>
            </svg>
          </i>{" "}
          <strong>Version note:</strong>
          발전된 enums 최소 2.17. a{" "}
          <a href="/guides/language/evolution#language-versioning">
            language version
          </a>{" "}
          을 요구합니다.
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
        Enums 사용하기
      </h3>
      <p>
        <CAnchor
          text="정적 변수"
          href="https://dart.dev/guides/language/language-tour#static-variables"
        />
        에 접근하는 것 처럼 열거 값에 접근하면 됩니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">final</span>
            <span className="pln"> favoriteColor </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="typ">Color</span>
            <span className="pun">.</span>
            <span className="pln">blue</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">if</span>
            <span className="pln"> </span>
            <span className="pun">(</span>
            <span className="pln">favoriteColor </span>
            <span className="pun">==</span>
            <span className="pln"> </span>
            <span className="typ">Color</span>
            <span className="pun">.</span>
            <span className="pln">blue</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln">{"  "}print</span>
            <span className="pun">(</span>
            <span className="str">&#39;Your favorite color is blue!&#39;</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
      <p>
        Enum 각각의 값들은, 0 부터 시작해서 enum의 값을 가져오는,{" "}
        <Ccode text="index" /> getter를 가집니다. 예를 들면, 첫 번째 값은 index
        0을 가지고 두 번째 값은 index 1을 가집니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">assert</span>
            <span className="pun">(</span>
            <span className="typ">Color</span>
            <span className="pun">.</span>
            <span className="pln">red</span>
            <span className="pun">.</span>
            <span className="pln">index </span>
            <span className="pun">==</span>
            <span className="pln"> </span>
            <span className="lit">0</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">assert</span>
            <span className="pun">(</span>
            <span className="typ">Color</span>
            <span className="pun">.</span>
            <span className="pln">green</span>
            <span className="pun">.</span>
            <span className="pln">index </span>
            <span className="pun">==</span>
            <span className="pln"> </span>
            <span className="lit">1</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">assert</span>
            <span className="pun">(</span>
            <span className="typ">Color</span>
            <span className="pun">.</span>
            <span className="pln">blue</span>
            <span className="pun">.</span>
            <span className="pln">index </span>
            <span className="pun">==</span>
            <span className="pln"> </span>
            <span className="lit">2</span>
            <span className="pun">);</span>
          </pre>
        </div>
      </div>
      <p>
        열거 값의 리스트를 얻고 싶다면, enum의 <Ccode text="values" /> 상수를
        사용하세요.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="typ">List</span>
            <span className="pun">&lt;</span>
            <span className="typ">Color</span>
            <span className="pun">&gt;</span>
            <span className="pln"> colors </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="typ">Color</span>
            <span className="pun">.</span>
            <span className="pln">values</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">assert</span>
            <span className="pun">(</span>
            <span className="pln">colors</span>
            <span className="pun">[</span>
            <span className="lit">2</span>
            <span className="pun">]</span>
            <span className="pln"> </span>
            <span className="pun">==</span>
            <span className="pln"> </span>
            <span className="typ">Color</span>
            <span className="pun">.</span>
            <span className="pln">blue</span>
            <span className="pun">);</span>
          </pre>
        </div>
      </div>
      <p>
        <CAnchor text="Switch 구문" href="#switch-and-case" />에 enum을 사용해도
        됩니다. 하지만 enum의 모든 값들을 처리하지 않으면 경고가 발생합니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">var</span>
            <span className="pln"> aColor </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="typ">Color</span>
            <span className="pun">.</span>
            <span className="pln">blue</span>
            <span className="pun">;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="kwd">switch</span>
            <span className="pln"> </span>
            <span className="pun">(</span>
            <span className="pln">aColor</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}case</span>
            <span className="pln"> </span>
            <span className="typ">Color</span>
            <span className="pun">.</span>
            <span className="pln">red</span>
            <span className="pun">:</span>
            <div />
            <span className="pln">{"    "}print</span>
            <span className="pun">(</span>
            <span className="str">&#39;&#39;Red as roses!&#39;&#39;</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"    "}break</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}case</span>
            <span className="pln"> </span>
            <span className="typ">Color</span>
            <span className="pun">.</span>
            <span className="pln">green</span>
            <span className="pun">:</span>
            <div />
            <span className="pln">{"    "}print</span>
            <span className="pun">(</span>
            <span className="str">&#39;&#39;Green as grass!&#39;&#39;</span>
            <span className="pun">);</span>
            <span className="pln"></span>
            <span className="kwd">{"    "}break</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}default</span>
            <span className="pun">:</span>
            <span className="pln"> </span>
            <span className="com">
              &#47;&#47; Without this, you see a WARNING.
            </span>
            <div />
            <span className="pln">{"    "}print</span>
            <span className="pun">(</span>
            <span className="pln">aColor</span>
            <span className="pun">);</span>
            <span className="pln"> </span>
            <span className="com">&#47;&#47; &#39;Color.blue&#39;</span>
            <span className="pln"></span>
            <div />
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
      <p>
        만약 이름이 있는 열거 값에 접근하고 싶다면, <Ccode text="Color.blue" />
        의 <Ccode text="'blue'" />
        처럼 <Ccode text=".name" /> 프로퍼티를 사용하면 됩니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="pln">print</span>
            <span className="pun">(</span>
            <span className="typ">Color</span>
            <span className="pun">.</span>
            <span className="pln">blue</span>
            <span className="pun">.</span>
            <span className="pln">name</span>
            <span className="pun">);</span>
            <span className="pln"> </span>
            <span className="com">&#47;&#47;&#39;blue&#39;</span>
          </pre>
        </div>
      </div>
    </>
  );
};

export default EnumeratedTypes;
