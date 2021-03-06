import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Constructors = () => {
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
        생성자
      </h2>
      <p>
        해당 클라스와 동일한 이름을 가지는 함수를 생성하면서 생성자를 선언 할 수
        있습니다.(선택적으로{" "}
        <CAnchor
          text="Named constructors"
          href="https://dart.dev/guides/language/language-tour#named-constructors"
        />
        에 명시되어 있는 식별자를 사용해도 됩니다.)
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">class</span>
        <span className="pln"> </span>
        <span className="typ">Point</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="typ">{"  "}double</span>
        <span className="pln"> x </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="typ">{"  "}double</span>
        <span className="pln"> y </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="typ">{"  "}Point</span>
        <span className="pun">(</span>
        <span className="typ">double</span>
        <span className="pln"> x</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="typ">double</span>
        <span className="pln"> y</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="com">
          {"    "}&#47;&#47; See initializing formal parameters for a better way
        </span>
        <div />
        <span className="pln"></span>
        <span className="com">
          {"    "}&#47;&#47; to initialize instance variables.
        </span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"    "}this</span>
        <span className="pun">.</span>
        <span className="pln">x </span>
        <span className="pun">=</span>
        <span className="pln"> x</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"    "}this</span>
        <span className="pun">.</span>
        <span className="pln">y </span>
        <span className="pun">=</span>
        <span className="pln"> y</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="pun">{"  "}&#125;</span>
        <span className="pln"></span>
        <div />
        <span className="pun">&#125;</span>
      </pre>
      <p>
        현재 인스턴스를 참조하고 싶다면, <Ccode text="this" /> 키워드를
        사용하세요.
      </p>
      <aside className="alert alert-info" role="alert">
        <p className="mb-0">
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
          이름이 중복 될 때만{" "}
          <code className="language-plaintext highlighter-rouge">this</code> 을
          사용하세요. 그 경우 외에는, Dart style은{" "}
          <code className="language-plaintext highlighter-rouge">this</code>를
          생략합니다.
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
        Initializing formal parameters
      </h3>
      <p>
        생성자 인수를 인스턴스 변수에 할당하는 패턴은 자주 쓰입니다. Dart에서는
        그것을 더 쉽게 수행합니다.
      </p>
      <p>
        매개변수로 인스턴스 변수를 초기화 하는 것은, 무조건 초기화 되어야만
        하거나 기본 값이 주어져야하는, null이 아니거나 <Ccode text="final" />{" "}
        인스턴스 변수만 가능합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">class</span>
        <span className="pln"> </span>
        <span className="typ">Point</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}final</span>
        <span className="pln"> </span>
        <span className="typ">double</span>
        <span className="pln"> x</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}final</span>
        <span className="pln"> </span>
        <span className="typ">double</span>
        <span className="pln"> y</span>
        <span className="pun">;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="com">
          {"  "}&#47;&#47; Sets the x and y instance variables
        </span>
        <div />
        <span className="pln"></span>
        <span className="com">
          {"  "}&#47;&#47; before the constructor body runs.
        </span>
        <div />
        <span className="pln"></span>
        <span className="typ">{"  "}Point</span>
        <span className="pun">(</span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">x</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">y</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      {/* 나중에 수정 */}
      <p>
        initializing formals로 주어진 변수는 초기화 리스트 범위에서 암묵적으로
        final 입니다.
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
        Default constructors
      </h3>
      <p>
        생성자를 선언하지 않았다면, 기본 생성자가 주어집니다. 기본 생성자는
        인수가 없고, superclass의 인수가 없는 생성자를 호출합니다.
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
        생성자는 상속되지 않는다.
      </h3>
      <p>
        Subclass는 superclass로 부터 생성자를 상속받지 않습니다. 생성자를
        선언하지 않은 subclass는 기본 생성자만을 가집니다.
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
        이름이 있는(Named) 생성자
      </h3>
      <p>
        다수의 생성자를 구현하거나, 코드의 명확성을 더하고 싶다면 이름이 있는
        생성자를 사용하세요.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <code>
          <span className="kwd">const</span>
          <span className="pln"> </span>
          <span className="typ">double</span>
          <span className="pln"> xOrigin </span>
          <span className="pun">=</span>
          <span className="pln"> </span>
          <span className="lit">0</span>
          <span className="pun">;</span>
          <div />
          <span className="pln"></span>
          <span className="kwd">const</span>
          <span className="pln"> </span>
          <span className="typ">double</span>
          <span className="pln"> yOrigin </span>
          <span className="pun">=</span>
          <span className="pln"> </span>
          <span className="lit">0</span>
          <span className="pun">;</span>
          <div> </div>
          <span className="pln"></span>
          <span className="kwd">class</span>
          <span className="pln"> </span>
          <span className="typ">Point</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <span className="pln"></span>
          <div />
          <span className="kwd">{"  "}final</span>
          <span className="pln"> </span>
          <span className="typ">double</span>
          <span className="pln"> x</span>
          <span className="pun">;</span>
          <div />
          <span className="pln"></span>
          <span className="kwd">{"  "}final</span>
          <span className="pln"> </span>
          <span className="typ">double</span>
          <span className="pln"> y</span>
          <span className="pun">;</span>
          <span className="pln"></span>
          <div />
          <span className="typ">{"  "}Point</span>
          <span className="pun">(</span>
          <span className="kwd">this</span>
          <span className="pun">.</span>
          <span className="pln">x</span>
          <span className="pun">,</span>
          <span className="pln"> </span>
          <span className="kwd">this</span>
          <span className="pun">.</span>
          <span className="pln">y</span>
          <span className="pun">);</span>
          <div> </div>
          <span className="pln"></span>
          <span className="com">&#47;&#47; Named constructor</span>
          <div />
          <span className="pln"></span>
          <span className="highlight">
            <span className="typ">Point</span>
            <span className="pun">.</span>
            <span className="pln">origin</span>
            <span className="pun">()</span>
          </span>
          <div />
          <span className="pln"></span>
          <span className="pun">{"    "}:</span>
          <span className="pln"> x </span>
          <span className="pun">=</span>
          <span className="pln"> xOrigin</span>
          <span className="pun">,</span>
          <div />
          <span className="pln">{"       "}y </span>
          <span className="pun">=</span>
          <span className="pln"> yOrigin</span>
          <span className="pun">;</span>
          <div />
          <span className="pln"></span>
          <span className="pun">&#125;</span>
        </code>
      </pre>
      <p>
        superclass&#39;s의 생성자는 subclass로 상속되지 않는 다는 것을 꼭
        기억하세요. 만약 subclass에서 superclass와 같은 생성자를 사용하고
        싶다면, subclass에서도 똑같이 구현해야 합니다.
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
        Superclass의 Non-default 생성자 호출
      </h3>
      <p>
        디폴트로, sublcass의 생성자는 superclass의 이름이 없고(unnamed), 인수가
        없는(no-argument) 생성자를 호출합니다. superclass의 생성자는 생성자
        바디의 처음에 호출됩니다. 만약{" "}
        <CAnchor
          text="initializer list"
          href="https://dart.dev/guides/language/language-tour#initializer-list"
        />
        가 사용되면, superclass가 호출되기 전에 실행됩니다. 요약하자면, 실행
        순서는 다음과 같습니다.
      </p>
      <ol>
        <li>initializer list</li>
        <li>superclass’s no-arg(인수가 없는) constructor</li>
        <li>main class’s no-arg constructor</li>
      </ol>
      <p>
        만약 superclass가 이름이 없고, 인수가 없는 생성자가 없다면, 반드시
        superclass의 생성자 중 하나를 선택해서 호출해야 합니다. 생성자 바디에
        콜론(
        <Ccode text=":" />
        )를 붙혀서 선택한 superclass의 생성자를 명시하세요.
      </p>
      {/* 추가 */}
      <p>
        superclass의 생성자로 전해지는 인수가, 생성자가 실행되기 전에 평가되기
        때문에 인수는 함수 호출에서 처럼 표현식이 될 수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">class</span>
        <span className="pln"> </span>
        <span className="typ">Employee</span>
        <span className="pln"> </span>
        <span className="kwd">extends</span>
        <span className="pln"> </span>
        <span className="typ">Person</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="typ">{"  "}Employee</span>
        <span className="pun">()</span>
        <span className="pln"> </span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="kwd">super</span>
        <span className="pun">.</span>
        <span className="pln">fromJson</span>
        <span className="pun">(</span>
        <span className="pln">fetchDefaultData</span>
        <span className="pun">());</span>
        <div />
        <span className="pln"></span>
        <span className="com">{"  "}&#47;&#47; ···</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <aside className="alert alert-warning" role="alert">
        <p>
          <i className="" data-fa-i2svg="">
            <svg
              className="svg-inline--fa fa-exclamation-triangle fa-w-18"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="exclamation-triangle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
              ></path>
            </svg>
          </i>{" "}
          <strong>Warning:</strong> superclass의 생성자로 전달되는 인수는
          <code className="language-plaintext highlighter-rouge"> this</code>에
          접근 할 수 없습니다. 예를 들면, 인수는 정적 메서드를 호출 할 수
          있지만, 인스턴스 메서드는 호출 할 수 없습니다.
        </p>
      </aside>
      <p>
        수동으로 superclass의 생성자 매개변수를 넘겨주는 것을 피하기 위해서,
        super-initializer 매개변수를 superclass의 생성자로 넘겨주면 됩니다. 이
        피쳐를 리다이랙팅 생성자와 사용하는 것은 불가능합니다. Super-initializer
        매개변수는{" "}
        <CAnchor
          text="initializing formal 매개변수"
          href="https://dart.dev/guides/language/language-tour#initializing-formal-parameters"
        />{" "}
        와 비슷한 문법과 의미를 가집니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">class</span>
        <span className="pln"> </span>
        <span className="typ">Vector2d</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <span className="pln"></span>
        <div />
        <span className="kwd">{"  "}final</span>
        <span className="pln"> </span>
        <span className="typ">double</span>
        <span className="pln"> x</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}final</span>
        <span className="pln"> </span>
        <span className="typ">double</span>
        <span className="pln"> y</span>
        <span className="pun">;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="typ">{"  "}Vector2d</span>
        <span className="pun">(</span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">x</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">y</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="kwd">class</span>
        <span className="pln"> </span>
        <span className="typ">Vector3d</span>
        <span className="pln"> </span>
        <span className="kwd">extends</span>
        <span className="pln"> </span>
        <span className="typ">Vector2d</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}final</span>
        <span className="pln"> </span>
        <span className="typ">double</span>
        <span className="pln"> z</span>
        <span className="pun">;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="com">
          {"  "}&#47;&#47; Forward the x and y parameters to the default super
          constructor like:
        </span>
        <div />
        <span className="pln"></span>
        <span className="com">
          {"  "}&#47;&#47; Vector3d(final double x, final double y, this.z) :
          super(x, y);
        </span>
        <div />
        <span className="pln"></span>
        <span className="typ">{"  "}Vector3d</span>
        <span className="pun">(</span>
        <span className="kwd">super</span>
        <span className="pun">.</span>
        <span className="pln">x</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="kwd">super</span>
        <span className="pun">.</span>
        <span className="pln">y</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">z</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <p>
        만약 super 생성자 호출에 이미 선택(optional positional) 인수가 있는
        경우, super-initializer 매개변수는 선택 인수가 될 수 없습니다. 하지만,
        명명된(named) 매개변수로 선언하는 것은 가능합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">class</span>
        <span className="pln"> </span>
        <span className="typ">Vector2d</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="com">{"  "}&#47;&#47; ...</span>
        <div> </div>
        <span className="pln"></span>
        <span className="typ">{"  "}Vector2d</span>
        <span className="pun">.</span>
        <span className="pln">named</span>
        <span className="pun">(&#123;</span>
        <span className="kwd">required</span>
        <span className="pln"> </span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">x</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="kwd">required</span>
        <span className="pln"> </span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">y</span>
        <span className="pun">&#125;);</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="kwd">class</span>
        <span className="pln"> </span>
        <span className="typ">Vector3d</span>
        <span className="pln"> </span>
        <span className="kwd">extends</span>
        <span className="pln"> </span>
        <span className="typ">Vector2d</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="com">{"  "}&#47;&#47; ...</span>
        <div> </div>
        <span className="pln"></span>
        <span className="com">
          {"  "}&#47;&#47; Forward the y parameter to the named super
          constructor like:
        </span>
        <div />
        <span className="pln"></span>
        <span className="com">
          {"  "}&#47;&#47; Vector3d.yzPlane(&#123;required double y, required
          this.z&#125;)
        </span>
        <div />
        <span className="pln"></span>
        <span className="com">
          {"  "}&#47;&#47;{"           "} : super.named(x: 0, y: y);
        </span>
        <div />
        <span className="pln"></span>
        <span className="typ">{"  "}Vector3d</span>
        <span className="pun">.</span>
        <span className="pln">yzPlane</span>
        <span className="pun">(&#123;</span>
        <span className="kwd">required</span>
        <span className="pln"> </span>
        <span className="kwd">super</span>
        <span className="pun">.</span>
        <span className="pln">y</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="kwd">required</span>
        <span className="pln"> </span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">z</span>
        <span className="pun">&#125;)</span>
        <span className="pln"> </span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="kwd">super</span>
        <span className="pun">.</span>
        <span className="pln">named</span>
        <span className="pun">(</span>
        <span className="pln">x</span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <aside className="alert alert-info" role="alert">
        <p>
          <i>
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
          Super-initializer 매개변수를 사용하는 것은 최소 2.17{" "}
          <a href="/guides/language/evolution#language-versioning">
            language version
          </a>{" "}
          을 요구합니다. 만약 더 앞 버젼을 사용하고 있다면, 수동으로 모든 super
          생성자 매개변수를 넘겨줘야 합니다.
        </p>
      </aside>
      <h3
        style={{
          fontSize: "18px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="initializer-list"
        className="font-noto text-primaryTitleTextColor"
      >
        Initializer list
      </h3>
      <p>
        superclass 생성자를 호출할 뿐만 아니라 생성자 바디가 실행되기 전에
        인스턴스 변수를 초기화할 수도 있습니다. 이니셜라이저는 쉼표로
        구분합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="com">
          &#47;&#47; Initializer list sets instance variables before
        </span>
        <div />
        <span className="pln"></span>
        <span className="com">&#47;&#47; the constructor body runs.</span>
        <div />
        <span className="pln"></span>
        <span className="typ">Point</span>
        <span className="pun">.</span>
        <span className="pln">fromJson</span>
        <span className="pun">(</span>
        <span className="typ">Map</span>
        <span className="pun">&lt;</span>
        <span className="typ">String</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="typ">double</span>
        <span className="pun">&gt;</span>
        <span className="pln"> json</span>
        <span className="pun">)</span>
        <div />
        <span className="pln"></span>
        <span className="pun">{"    "}:</span>
        <span className="pln"> x </span>
        <span className="pun">=</span>
        <span className="pln"> json</span>
        <span className="pun">[</span>
        <span className="str">&#39;x&#39;</span>
        <span className="pun">]!,</span>
        <div />
        <span className="pln">{"      "}y </span>
        <span className="pun">=</span>
        <span className="pln"> json</span>
        <span className="pun">[</span>
        <span className="str">&#39;y&#39;</span>
        <span className="pun">]!</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}print</span>
        <span className="pun">(</span>
        <span className="str">&#39;In Point.fromJson(): ($x, $y)&#39;</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <aside className="alert alert-warning" role="alert">
        <p>
          <i>
            <svg
              className="svg-inline--fa fa-exclamation-triangle fa-w-18"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="exclamation-triangle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
              ></path>
            </svg>
          </i>{" "}
          <strong>Warning:</strong>
          initializer의 오른쪽은{" "}
          <code className="language-plaintext highlighter-rouge">this</code>에
          접근 할 수 없습니다.
        </p>
      </aside>
      <p>
        개발하는 동안, <Ccode text="assert" />를 초기화 리스트 안에 넣어서
        input에 조건을 추가 할 수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <code>
          <span className="typ">Point</span>
          <span className="pun">.</span>
          <span className="pln">withAssert</span>
          <span className="pun">(</span>
          <span className="kwd">this</span>
          <span className="pun">.</span>
          <span className="pln">x</span>
          <span className="pun">,</span>
          <span className="pln"> </span>
          <span className="kwd">this</span>
          <span className="pun">.</span>
          <span className="pln">y</span>
          <span className="pun">)</span>
          <span className="pln"> </span>
          <span className="pun">:</span>
          <span className="pln"> </span>
          <span className="highlight">
            <span className="kwd">assert</span>
            <span className="pun">(</span>
            <span className="pln">x </span>
            <span className="pun">&gt;=</span>
            <span className="pln"> </span>
            <span className="lit">0</span>
            <span className="pun">)</span>
          </span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln">{"  "}print</span>
          <span className="pun">(</span>
          <span className="str">&#39;In Point.withAssert(): ($x, $y)&#39;</span>
          <span className="pun">);</span>
          <div />
          <span className="pln"></span>
          <span className="pun">&#125;</span>
        </code>
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
        리디렉팅 생성자(Redirecting constructors)
      </h3>
      <p>
        가끔 생성자의 목적이 같은 클래스 내의 다른 생성자로 리디렉트하는 겨우 일
        때가 있습니다. 리디렉팅 생성자의 바디는 비어있고, 콜론(
        <Ccode text=":" />) 뒤에 나오는, 클래스 이름 대신에{" "}
        <Ccode text="this" />를 사용한 생성자 호출로 구성됩니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">class</span>
        <span className="pln"> </span>
        <span className="typ">Point</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="typ">{"  "}double</span>
        <span className="pln"> x</span>
        <span className="pun">,</span>
        <span className="pln"> y</span>
        <span className="pun">;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="com">
          {"  "}&#47;&#47; The main constructor for this class.
        </span>
        <div />
        <span className="pln"></span>
        <span className="typ">{"  "}Point</span>
        <span className="pun">(</span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">x</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">y</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="pln"></span>
        <span className="com">
          {"  "}&#47;&#47; Delegates to the main constructor.
        </span>
        <div />
        <span className="pln"></span>
        <span className="typ">{"  "}Point</span>
        <span className="pun">.</span>
        <span className="pln">alongXAxis</span>
        <span className="pun">(</span>
        <span className="typ">double</span>
        <span className="pln"> x</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">:</span>
        <span className="pln"> </span>
        <span className="kwd">this</span>
        <span className="pun">(</span>
        <span className="pln">x</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
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
        상수(Constant) 생성자
      </h3>
      <p>
        어떤 클래스가 절대 바뀌지 않는 객체를 생성한다면, 이 객체를 컴파일 타임
        상수로 만들 수 있습니다. 생성자를 <Ccode text="const" />로 정의하고 모든
        인스턴스 변수를 <Ccode text="final" />로 선언하면 됩니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">class</span>
        <span className="pln"> </span>
        <span className="typ">ImmutablePoint</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">{"  "}static</span>
        <span className="pln"> </span>
        <span className="kwd">const</span>
        <span className="pln"> </span>
        <span className="typ">ImmutablePoint</span>
        <span className="pln"> origin </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">ImmutablePoint</span>
        <span className="pun">(</span>
        <span className="lit">0</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="pln"></span>
        <span className="kwd">{"  "}final</span>
        <span className="pln"> </span>
        <span className="typ">double</span>
        <span className="pln"> x</span>
        <span className="pun">,</span>
        <span className="pln"> y</span>
        <span className="pun">;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="kwd">{"  "}const</span>
        <span className="pln"> </span>
        <span className="typ">ImmutablePoint</span>
        <span className="pun">(</span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">x</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="kwd">this</span>
        <span className="pun">.</span>
        <span className="pln">y</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <p>
        상수 생성자가 항상 상수를 생성하는 건 아닙니다. 더 자세히 알고 싶다면,{" "}
        <CAnchor text="using constructors" href="#using-constructors" />를
        참고하세요.
      </p>
      <h3
        style={{
          fontSize: "18px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="factory-constructors"
        className="font-noto text-primaryTitleTextColor"
      >
        Factory 생성자
      </h3>
      <p>
        항상 어떤 클래스의 새로운 인스턴스를 생성하지 않는 생성자를 구현하고
        싶다면, <Ccode text="factory" /> 키워드를 사용하세요. 예를 들면, factory
        생성자는 인스턴스를 캐쉬나 서브타입에서 반환 할 수 있습니다. Factory
        생성자는, final 변수를 초기화 리스트에서 다루지 않는 로직을 사용하여
        초기화 하는 방법으로도 사용 할 수 있습니다.
      </p>
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
          final 변수의 늦은(late) 초기화를 하기 위한 또 다른 방법으로는,
          <a href="/guides/language/effective-dart/design#avoid-public-late-final-fields-without-initializers">
            {" "}
            <code className="language-plaintext highlighter-rouge">
              late final
            </code>{" "}
            (사용 주의!)
          </a>
          가 있습니다.
        </p>
      </aside>
      <p>
        다음 예제에서 <Ccode text="Logger" /> factory 생성자는 캐쉬에서 객체를
        반환하고, <Ccode text="Logger.fromJson" /> factory 생성자는 final 변수를
        JSON 객체로 부터 초기화 합니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">class</span>
            <span className="pln"> </span>
            <span className="typ">Logger</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <span className="pln"></span>
            <div />
            <span className="kwd">{"  "}final</span>
            <span className="pln"> </span>
            <span className="typ">String</span>
            <span className="pln"> name</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}bool</span>
            <span className="pln"> mute </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="kwd">false</span>
            <span className="pun">;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="com">
              {"  "}&#47;&#47; _cache is library-private, thanks to
            </span>
            <div />
            <span className="pln"></span>
            <span className="com">
              {"  "}&#47;&#47; the _ in front of its name.
            </span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}static</span>
            <span className="pln"> </span>
            <span className="kwd">final</span>
            <span className="pln"> </span>
            <span className="typ">Map</span>
            <span className="pun">&lt;</span>
            <span className="typ">String</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="typ">Logger</span>
            <span className="pun">&gt;</span>
            <span className="pln"> _cache </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="pun">&lt;</span>
            <span className="typ">String</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="typ">Logger</span>
            <span className="pun">&gt;&#123;&#125;;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="kwd">{"  "}factory</span>
            <span className="pln"> </span>
            <span className="typ">Logger</span>
            <span className="pun">(</span>
            <span className="typ">String</span>
            <span className="pln"> name</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"    "}return</span>
            <span className="pln"> _cache</span>
            <span className="pun">.</span>
            <span className="pln">putIfAbsent</span>
            <span className="pun">(</span>
            <span className="pln">name</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="pun">()</span>
            <span className="pln"> </span>
            <span className="pun">=&gt;</span>
            <span className="pln"> </span>
            <span className="typ">Logger</span>
            <span className="pun">.</span>
            <span className="pln">_internal</span>
            <span className="pun">(</span>
            <span className="pln">name</span>
            <span className="pun">));</span>
            <div />
            <span className="pln"></span>
            <span className="pun">{"  "}&#125;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="kwd">{"  "}factory</span>
            <span className="pln"> </span>
            <span className="typ">Logger</span>
            <span className="pun">.</span>
            <span className="pln">fromJson</span>
            <span className="pun">(</span>
            <span className="typ">Map</span>
            <span className="pun">&lt;</span>
            <span className="typ">String</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="typ">Object</span>
            <span className="pun">&gt;</span>
            <span className="pln"> json</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"    "}return</span>
            <span className="pln"> </span>
            <span className="typ">Logger</span>
            <span className="pun">(</span>
            <span className="pln">json</span>
            <span className="pun">[</span>
            <span className="str">&#39;name&#39;</span>
            <span className="pun">].</span>
            <span className="pln">toString</span>
            <span className="pun">());</span>
            <div />
            <span className="pln"></span>
            <span className="pun">{"  "}&#125;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="typ">{"  "}Logger</span>
            <span className="pun">.</span>
            <span className="pln">_internal</span>
            <span className="pun">(</span>
            <span className="kwd">this</span>
            <span className="pun">.</span>
            <span className="pln">name</span>
            <span className="pun">);</span>
            <div> </div>
            <span className="pln"></span>
            <span className="typ">{"  "}void</span>
            <span className="pln"> log</span>
            <span className="pun">(</span>
            <span className="typ">String</span>
            <span className="pln"> msg</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"    "}if</span>
            <span className="pln"> </span>
            <span className="pun">(!</span>
            <span className="pln">mute</span>
            <span className="pun">)</span>
            <span className="pln"> print</span>
            <span className="pun">(</span>
            <span className="pln">msg</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="pun">{"  "}&#125;</span>
            <span className="pln"></span>
            <div />
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
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
          Factory 생성자는{" "}
          <code className="language-plaintext highlighter-rouge">this</code>에
          접근 할 수 없습니다.
        </p>
      </aside>
      <p>다른 생성자를 호출 할 때 처럼, factory 생성자를 호출하세요.</p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">var</span>
            <span className="pln"> logger </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="typ">Logger</span>
            <span className="pun">(</span>
            <span className="str">&#39;UI&#39;</span>
            <span className="pun">);</span>
            <div />
            <span className="pln">logger</span>
            <span className="pun">.</span>
            <span className="pln">log</span>
            <span className="pun">(</span>
            <span className="str">&#39;Button clicked&#39;</span>
            <span className="pun">);</span>
            <div> </div>
            <span className="pln"></span>
            <span className="kwd">var</span>
            <span className="pln"> logMap </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <span className="str">&#39;name&#39;</span>
            <span className="pun">:</span>
            <span className="pln"> </span>
            <span className="str">&#39;UI&#39;</span>
            <span className="pun">&#125;;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">var</span>
            <span className="pln"> loggerJson </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="typ">Logger</span>
            <span className="pun">.</span>
            <span className="pln">fromJson</span>
            <span className="pun">(</span>
            <span className="pln">logMap</span>
            <span className="pun">);</span>
          </pre>
        </div>
      </div>
    </>
  );
};

export default Constructors;
