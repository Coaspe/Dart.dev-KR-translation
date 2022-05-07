import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Lists = () => {
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
        Lists
      </h2>
      <p>
        거의 모든 프로그래밍 언어에서 가장 많이 사용되는 collection은{" "}
        <span className="italic">array</span>이나, 순서가 있는 객체의 그룹일
        것입니다. Dart에서 arrays는{" "}
        <CAnchor
          text="List"
          href="https://api.dart.dev/stable/dart-core/List-class.html"
        />{" "}
        객체이므로 많은 사람들이 <span className="italic">lists</span>라고
        부릅니다.
      </p>
      <p>
        Dart의 list 리터럴은 Javascript의 array 리터럴과 비슷합니다. 다음은 Dart
        list의 예입니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> list </span>
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
      </pre>
      <aside className="font-noto font-bold">
        <p style={{ marginBottom: 0 }}>
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
          <strong className="mx-1">Note:</strong> Dart는 위의{" "}
          <Ccode text="list" />를 <Ccode text="List<int>" /> 타입으로
          추정합니다. 만약 정수가 아닌 객체를 list에 추가하는 것을 시도한다면,
          analyzer나 런타임이 에러를 발생시킬 것입니다. 타입 추론에 대해 더
          자세히 알고 싶다면,{" "}
          <CAnchor
            text="type inference"
            href="https://dart.dev/guides/language/type-system#type-inference"
          />
          를 참고하세요.
        </p>
      </aside>
      <p>
        Dart collection literal의 마지막 아이템에 콤마를 붙일 수 있습니다.
        이것은 <span className="italic">trailing comma</span>이라 부르고, 별다른
        효과는 없지만 복사-붙혀넣기를 할 때 발생할 수 있는 에러를 방지해줍니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> list </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <div />
        <span className="pln"></span>
        <span className="str">{"  "}&#39;Car&#39;</span>
        <span className="pun">,</span>
        <div />
        <span className="pln"></span>
        <span className="str">{"  "}&#39;Boat&#39;</span>
        <span className="pun">,</span>
        <div />
        <span className="pln"></span>
        <span className="str">{"  "}&#39;Plane&#39;</span>
        <span className="pun">,</span>
        <div />
        <span className="pln"></span>
        <span className="pun">];</span>
      </pre>
      <p>
        Lists는 0 이 시작 값의 인덱스이고, <Ccode text="list.length - 1" />이
        마지막 값의 인덱스인 zero-based 인덱싱을 합니다. Javascript에서 하는 것
        처럼 list의 길이를 얻거나, list의 값에 접근 할 수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> list </span>
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
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">list</span>
        <span className="pun">.</span>
        <span className="pln">length </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">3</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">list</span>
        <span className="pun">[</span>
        <span className="lit">1</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">);</span>
        <div> </div>
        <span className="pln">list</span>
        <span className="pun">[</span>
        <span className="lit">1</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">;</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">list</span>
        <span className="pun">[</span>
        <span className="lit">1</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">1</span>
        <span className="pun">);</span>
      </pre>
      <p>
        컴파일 타임 상수인 list를 선언하고 싶다면 <Ccode text="const" />를 list
        리터럴 앞에 추가하면 됩니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> constantList </span>
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
        <span className="pun">];</span>
        <div />
        <span className="pln"></span>
        <span className="com">
          &#47;&#47; constantList[1] = 1; &#47;&#47; This line will cause an
          error.
        </span>
      </pre>
      <p>
        Dart 2.3에서 <span className="font-sans font-bold">spread 연산자</span>(
        <Ccode text="..." />) 와{" "}
        <span className="font-sans font-bold">null-aware spread 연산자</span>(
        <Ccode text="...?" />) 가 추가되었습니다. 두 연산자 모두 collection에
        다수의 값을 간결하게 삽입할 수 있게 해줍니다.
      </p>
      <p>
        예를들면 다른 list에 어떤 list의 모든 값을 삽입하기 위해 spread 연산자(
        <Ccode text="..." />) 를 사용할 수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> list </span>
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
        <div />
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> list2 </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="lit">0</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="pun">...</span>
        <span className="pln">list</span>
        <span className="pun">];</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">list2</span>
        <span className="pun">.</span>
        <span className="pln">length </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="lit">4</span>
        <span className="pun">);</span>
      </pre>
      <p>
        만약 spread 연산자 값이 null 일 수도 있다면, null-aware spread 연산자(
        <Ccode text="...?" />) 를 사용해서 exceptions을 방지 할 수 있습니다.
      </p>
      <p>
        spread 연산자에 대해 더 자세이 알고 싶다면,{" "}
        <CAnchor
          href="https://github.com/dart-lang/language/blob/master/accepted/2.3/spread-collections/feature-specification.md"
          text="spread operator proposal"
        />
        을 참고하세요.
      </p>
      <p>
        Dart에서는 조건(
        <Ccode text="if" />
        )과 반복(
        <Ccode text="for" />
        )을 사용해서 collection을 만들 수 있게{" "}
        <span className="font-sans font-bold">collection if</span> 와{" "}
        <span className="font-sans font-bold">collection for</span>을
        지원합니다.
      </p>
      <p>
        다음은 길이가 3 또는 4가 되는 list를{" "}
        <span className="font-sans font-bold">collection if</span>를 사용해
        생성하는 예입니다.{" "}
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> nav </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="str">&#39;Home&#39;</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="str">&#39;Furniture&#39;</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="str">&#39;Plants&#39;</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="kwd">if</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="pln">promoActive</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="str">&#39;Outlet&#39;</span>
        <span className="pun">];</span>
      </pre>
      <p>
        다음은 <span className="font-sans font-bold">collection for</span>를
        활용하는 예 입니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> listOfInts </span>
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
        <div />
        <span className="pln"></span>
        <span className="kwd">var</span>
        <span className="pln"> listOfStrings </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[</span>
        <span className="str">&#39;#0&#39;</span>
        <span className="pun">,</span>
        <span className="pln"> </span>
        <span className="kwd">for</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="kwd">var</span>
        <span className="pln"> i </span>
        <span className="kwd">in</span>
        <span className="pln"> listOfInts</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="str">&#39;#$i&#39;</span>
        <span className="pun">];</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">assert</span>
        <span className="pun">(</span>
        <span className="pln">listOfStrings</span>
        <span className="pun">[</span>
        <span className="lit">1</span>
        <span className="pun">]</span>
        <span className="pln"> </span>
        <span className="pun">==</span>
        <span className="pln"> </span>
        <span className="str">&#39;#1&#39;</span>
        <span className="pun">);</span>
      </pre>
      <p>
        collection <Ccode text="if" /> 와 <Ccode text="for" />에 대해 더 자세히
        알고 싶다면,{" "}
        <CAnchor
          text="control flow collections proposal"
          href="https://github.com/dart-lang/language/blob/master/accepted/2.3/control-flow-collections/feature-specification.md"
        />
        를 참고하세요.
      </p>
      <p>
        List 타입은 lists를 조작 할 수 있는 간단하고 많은 메소드를 가지고
        있습니다. lists에 대해 더 자세히 알고 싶다면,{" "}
        <CAnchor
          text="Generics"
          href="https://dart.dev/guides/language/language-tour#generics"
        />
        과{" "}
        <CAnchor
          text="Collections"
          href="https://dart.dev/guides/libraries/library-tour#collections"
        />
        를 참고하세요.
      </p>
    </>
  );
};

export default Lists;
