import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Strings = () => {
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
      >
        Numbers
      </h2>
      <p>
        Dart의 string(
        <Ccode text="String" /> 객체)는 UTF-16 인코딩 방식으로 표현됩니다.
        작은따옴표, 큰따옴표를 사용해서 string을 생성 할 수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> s1 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">
          &#39;Single quotes work well for string literals.&#39;
        </span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> s2 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#34;Double quotes work just as well.&#34;</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> s3 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">
          &#39;It\&#39;s easy to escape the string delimiter.&#39;
        </span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> s4 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">
          &#34;It&#39;s even easier to use the other delimiter.&#34;
        </span>
        <span className="pun">;</span>
      </pre>
      <p>
        <Ccode text="${expression}" />를 사용하여 string 안에 식(expression)을
        삽입할 수 있습니다. 만약에 식이 식별자라면, &#123;&#125; 를 생략해도
        됩니다. 어떤 object와 동일한 string을 얻기 위해서, Dart는 object의{" "}
        <Ccode text="toString()" /> 함수를 호출합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> s </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;string interpolation&#39;</span>
        <span className="pun">;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="str">&#39;Dart has $s, which is very handy.&#39;</span>
        <span className="pln"> </span>
        <span className="pun">=={"\n"}</span>
        <span className="pln"></span>
        <span className="str">
          &#39;Dart has string interpolation, &#39;{"\n"}
        </span>
        <span className="pln"></span>
        <span className="str">{"   "}&#39;which is very handy.&#39;</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="str">&#39;That deserves all caps. &#39;{"\n"}</span>
        <span className="pln"></span>
        <span className="str">
          {"   "}
          &#39;&#36;&#123;s&#46;toUpperCase()&#125; is very handy!&#39;
        </span>
        <span className="pln"> </span>
        <span className="pun">=={"\n"}</span>
        <span className="pln"></span>
        <span className="str">&#39;That deserves all caps. &#39;{"\n"}</span>
        <span className="pln"></span>
        <span className="str">
          {"   "}&#39;STRING INTERPOLATION is very handy!&#39;
        </span>
        <span className="pun">);</span>
      </pre>
      <aside className="font-noto font-bold">
        <i className="inline-block">
          <svg
            className="svg-inline--fa fa-info-circle fa-w-16"
            style={{ width: "1rem" }}
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
        <strong className="mx-1">Note:</strong>
        <Ccode text="==" /> 연산자는 두개의 객체가 동일한지 확인합니다. 만약
        두개의 strings이 같은 순서의 코드 유닛을 가진다면 동일하다고 판단합니다.
      </aside>
      <p>
        <Ccode text="+" /> 연산자를 사용하거나, adjacent string literals 를
        사용하여 strings를 합칠 수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> s1 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;String &#39;</span>
        <div />
        <span className="pln"></span>
        <span className="str">{"   "}&#39;concatenation&#39;</span>
        <div />
        <span className="pln"></span>
        <span className="str">
          {"   "}&#34; works even over line breaks.&#34;
        </span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">s1 </span>
        <span className="pun">==</span>
        <div />
        <span className="pln"></span>
        <span className="str">
          {"   "}&#39;String concatenation works even over &#39;
        </span>
        <div />
        <span className="pln"></span>
        <span className="str">{"     "}&#39;line breaks.&#39;</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> s2 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;The + operator &#39;</span>
        <span className="pln"> </span>
        <span className="pun">+</span>
        <span className="pln"> </span>
        <span className="str">&#39;works, as well.&#39;</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">s2 </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="str">&#39;The + operator works, as well.&#39;</span>
        <span className="pun">);</span>
      </pre>
      <p>
        multi-line string을 만드는 또 다른 방법은 삼중 따옴표( &#39;&#39;&#39;
        or &#34;&#34;&#34; )를 사용하는 것 입니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> s1 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">
          &#39;&#39;&#39; You can create{"\n"}multi-line strings like this one.
          {"\n"}
          &#39;&#39;&#39;
        </span>
        <span className="pun">;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> s2 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">
          &#34;&#34;&#34;This is also a{"\n"}multi-line string.&#34;&#34;&#34;
        </span>
        <span className="pun">;</span>
      </pre>
      <p>
        <Ccode text="r" />을 prefixing(접두사)하면 &#34;raw&#34; string을 만들
        수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> s </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">
          r&#39;In a raw string, not even \n gets special treatment.&#39;
        </span>
        <span className="pun">;</span>
      </pre>
      <p>
        유니코드 문자가 어떻게 stirng으로 표현되는지 자세히 알고 싶다면,{" "}
        <CAnchor
          text="Runes and grapheme clusters"
          href="https://dart.dev/guides/language/language-tour#characters"
        />
        를 참고하세요.
      </p>
      <p>
        Interplated 수식이 null, numeric, string, boolean 값을 판단하는 컴파일
        상수라면, 리터럴 문자는 컴파일 타임 상수입니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="com">&#47;&#47; These work in a const string.</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> aConstNum </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> aConstBool </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">true</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> aConstString </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#34;a constant string&#34;</span>
        <span className="pun">;</span>
        <div> </div>
        <span className="pln"></span>
        <span className="com">
          &#47;&#47; These do NOT work in a const string.
        </span>
        <div />
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> aNum </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> aBool </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="kwd">true</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> aString </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#34;a string&#34;</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> aConstList </span>
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
        <div> </div>
        <span className="pln"></span>
        <span className="kwd">const</span>
        <span className="pln"> validConstString </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">
          &#34;$aConstNum $aConstBool $aConstString&#34;
        </span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="com">
          &#47;&#47; const invalidConstString = &#34;$aNum $aBool $aString
          $aConstList&#34;;
        </span>
      </pre>
      <p>
        Strings에 대한 더 자세한 정보를 원한다면,{" "}
        <CAnchor
          text="Strings and regular expressions"
          href="https://dart.dev/guides/libraries/library-tour#strings-and-regular-expressions"
        />
        를 참고하세요.
      </p>
    </>
  );
};

export default Strings;
