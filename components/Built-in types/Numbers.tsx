import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Numbers = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="numbers"
        className="font-noto text-primaryTitleTextColor"
      >
        Numbers
      </h2>
      <p>Dart에서는 숫자를 두 가지 방법으로 표현합니다:</p>
      <dl>
        <dt>
          <CAnchor
            text="int"
            href="https://api.dart.dev/stable/dart-core/int-class.html"
          />
        </dt>
        <dd>
          <p>
            <CAnchor
              text="사용하는 플랫폼에 따라서"
              href="http://localhost:3000/guides/language/numbers"
            />{" "}
            정수 값은 64비트 이하로 표현됩니다. 네이티브 플랫폼에서는 -2
            <sup>63</sup> to 2<sup>63</sup> - 1 까지 표현됩니다. 웹에서는
            Javascript numbers (가수부가 없는 64-bits 부동소수점 표현) -2
            <sup>53</sup> to 2<sup>53</sup> - 1 사이의 수로 표현됩니다.
          </p>
        </dd>
        <dt>
          <CAnchor
            text="double"
            href="https://api.dart.dev/stable/dart-core/double-class.html"
          />
        </dt>
        <dd>
          <p>
            IEEE 754 standard를 따라 64-bit (배정도) 부동 소수점 표현을
            사용합니다.
          </p>
        </dd>
      </dl>
      <p>
        <Ccode text="int" />와 <Ccode text="double" />은 모두{" "}
        <CAnchor
          text="num"
          href="https://api.dart.dev/stable/dart-core/num-class.html"
        />
        의 subtypes 입니다. num 타입은 +, -, /, * 같은 기본적인 연산자 사용이
        가능하고, <Ccode text="abs()" />, <Ccode text="ceil()" />,{" "}
        <Ccode text="floor()" /> 같은 함수 사용도 가능합니다. ( &#62;&#62; 같은
        Bitwise 연산자는 <Ccode text="int" /> 클래스에 정의되어 있습니다.) 만약
        당신이 찾는 것을 num과 num의 subtypes가 갖고있지 않다면,{" "}
        <CAnchor
          text="dart:math"
          href="https://api.dart.dev/stable/dart-math"
        />{" "}
        라이브러리를 참고하세요.
      </p>
      <p>
        Integers는 소수점을 갖지 않는 수를 말합니다. 아래는 리터럴 inteager를
        정의하는 예입니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> x </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">;</span>
        <div />
        <span className="kwd">var</span>
        <span className="pln"> hex </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0xDEADBEEF</span>
        <span className="pun">;</span>
        <div />
        <span className="kwd">var</span>
        <span className="pln"> exponent </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">8e5</span>
        <span className="pun">;</span>
      </pre>
      <p>
        만약 숫자가 소수점을 가진다면, double이 됩니다. 아래는 리터럴 double을
        정의하는 예입니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> y </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">1.1</span>
        <span className="pun">;</span>
        <div />
        <span className="kwd">var</span>
        <span className="pln"> exponents </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">1.42e5</span>
        <span className="pun">;</span>
      </pre>
      <p>
        변수를 num 타입으로 선언하는 것 또한 가능합니다. 그렇게 한다면 변수는
        integer이면서 double 값이 됩니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="typ">num</span>
        <span className="pln"> x </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">
          &#47;&#47; x can have both int and double values
        </span>
        <div />
        <span className="pln">x </span>
        <span className="pun">+=</span>
        <span className="pln"> </span>
        <span className="lit">2.5</span>
        <span className="pun">;</span>
      </pre>
      <p>Integer 리터럴은 필요할 때 자동으로 double 형으로 바뀝니다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="typ">double</span>
        <span className="pln"> z </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">;</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Equivalent to double z = 1.0.</span>
      </pre>
      <p>
        다음은 string을 number로 바꾸고 그 반대의 경우도 보여주는 코드 입니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="com">&#47;&#47; String -&gt; int</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> one </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">int</span>
        <span className="pun">.</span>
        <span className="pln">parse</span>
        <span className="pun">(</span>
        <span className="str">&#39;1&#39;</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">one </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="com">&#47;&#47; String -&gt; double</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> onePointOne </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">double</span>
        <span className="pun">.</span>
        <span className="pln">parse</span>
        <span className="pun">(</span>
        <span className="str">&#39;1.1&#39;</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">onePointOne </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">1.1</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="com">&#47;&#47; int -&gt; String</span>
        <div />
        <span className="pln"></span>
        <span className="typ">String</span>
        <span className="pln"> oneAsString </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">1.</span>
        <span className="pln">toString</span>
        <span className="pun">();</span>
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">oneAsString </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="str">&#39;1&#39;</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="com">&#47;&#47; double -&gt; String</span>
        <div />
        <span className="pln"></span>
        <span className="typ">String</span>
        <span className="pln"> piAsString </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">3.14159</span>
        <span className="pun">.</span>
        <span className="pln">toStringAsFixed</span>
        <span className="pun">(</span>
        <span className="lit">2</span>
        <span className="pun">);</span>
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">piAsString </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="str">&#39;3.14&#39;</span>
        <span className="pun">);</span>
      </pre>
      <p>
        <Ccode text="int" /> 타입은 전통적인 bitwise shift({" "}
        <Ccode text="&#62;&#62;" />,
        <Ccode text="&#62;&#62;&#62;" />, <Ccode text="&#60;&#60;" />, ),
        complement(
        <Ccode text="~" />
        ), AND (<Ccode text="&#38;" />
        ), OR (<Ccode text="&#124;" />) and XOR (<Ccode text="&#94;" />) 연산자
        사용이 가능합니다. 그리고 그러한 지원은 bit fields를 마스킹하거나 조작
        할 때 매우 편리합니다. 예를 들면
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">assert</span>
        <span className="pun">((</span>
        <span className="lit">3</span>
        <span className="pln"> </span>
        <span className="pun">&lt;&lt;</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">6</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; 0011 &lt;&lt; 1 == 0110</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">((</span>
        <span className="lit">3</span>
        <span className="pln"> </span>
        <span className="pun">|</span>
        <span className="pln"> </span>
        <span className="lit">4</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">7</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; 0011 | 0100 == 0111</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">((</span>
        <span className="lit">3</span>
        <span className="pln"> </span>
        <span className="pun">&amp;</span>
        <span className="pln"> </span>
        <span className="lit">4</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; 0011 &amp; 0100 == 0000</span>
      </pre>
      <p>
        더 많은 예를 보고 싶다면{" "}
        <CAnchor
          text="bitwise and shift operator"
          href="https://dart.dev/guides/language/language-tour#bitwise-and-shift-operators"
        />
        를 참고하세요.
      </p>
    </>
  );
};

export default Numbers;
