import Ccode from "../Custom/Ccode";

const Cascade = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="cascade-notation"
        className="font-noto text-primaryTitleTextColor"
      >
        Cascade notation
      </h2>
      <p>
        Cascades (<Ccode text=".." />, <Ccode text="?.." />
        )는 같은 객체에 대해 연속적인 operations을 적용할 수 있게 해줍니다.
        함수를 호출 또한 가능합니다. 이런 기능은 임시 변수를 만드는 과정을
        줄이고 코드를 더 유동적으로 만들어 줍니다.
      </p>
      <p>다음 예를 봅시다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> paint </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">Paint</span>
        <span className="pun">()</span>
        <div />
        <span className="pln"></span>
        <span className="pun">{"  "}..</span>
        <span className="pln">color </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">Colors</span>
        <span className="pun">.</span>
        <span className="pln">black</span>
        <div />
        <span className="pun">{"  "}..</span>
        <span className="pln">strokeCap </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">StrokeCap</span>
        <span className="pun">.</span>
        <span className="pln">round</span>
        <div />
        <span className="pun">{"  "}..</span>
        <span className="pln">strokeWidth </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">5.0</span>
        <span className="pun">;</span>
      </pre>
      <p>
        <Ccode text="Paint()" /> 생성자는 <Ccode text="Paint" /> 객체를
        반환합니다. casade notaition 뒤에 오는 코드들은 반환 될 값들을 무시하며,
        해당 객체에 대해 작동합니다.
      </p>
      <p>위의 코드는 아래의 예제와 같은 코드입니다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> paint </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">Paint</span>
        <span className="pun">();</span>
        <div />
        <span className="pln">paint</span>
        <span className="pun">.</span>
        <span className="pln">color </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">Colors</span>
        <span className="pun">.</span>
        <span className="pln">black</span>
        <span className="pun">;</span>
        <div />
        <span className="pln">paint</span>
        <span className="pun">.</span>
        <span className="pln">strokeCap </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">StrokeCap</span>
        <span className="pun">.</span>
        <span className="pln">round</span>
        <span className="pun">;</span>
        <div />
        <span className="pln">paint</span>
        <span className="pun">.</span>
        <span className="pln">strokeWidth </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">5.0</span>
        <span className="pun">;</span>
      </pre>
      <p>
        만약 cascade를 사용하려는 객체의 field가 null 일 수도 있다면{" "}
        <span className="italic">null-shorting</span> cascade (
        <Ccode text="?.." />
        )를 첫 번째 operation에 사용하세요. <Ccode text="?.." />로 시작하는 것은
        뒤에 오는 cascade operations이 null 객체 일 수도 있는 객체에 대해
        실행되지 않을 것을 보장합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="pln">querySelector</span>
        <span className="pun">(</span>
        <span className="str">&#39;#confirm&#39;</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Get an object.</span>
        <div />
        <span className="pln"></span>
        <span className="pun">{"  "}?..</span>
        <span className="pln">text </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;Confirm&#39;</span>
        <span className="pln"> </span>
        <span className="com">&#47;&#47; Use its members.</span>
        <div />
        <span className="pln"></span>
        <span className="pun">{"  "}..</span>
        <span className="pln">class</span>
        <span className="pun">.</span>
        <span className="pln">add</span>
        <span className="pun">(</span>
        <span className="str">&#39;important&#39;</span>
        <div />
        <span className="pun">)</span>
        <span className="pln"></span>
        <span className="pun">{"  "}..</span>
        <span className="pln">onClick</span>
        <span className="pun">.</span>
        <span className="pln">listen</span>
        <span className="pun">((</span>
        <span className="pln">e</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> window</span>
        <span className="pun">.</span>
        <span className="pln">alert</span>
        <span className="pun">(</span>
        <span className="str">&#39;Confirmed!&#39;</span>
        <span className="pun">));</span>
      </pre>
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
        The <code className="language-plaintext highlighter-rouge">
          ?..
        </code>{" "}
        문법은 최소 2.12.
        <a href="/guides/language/evolution#language-versioning">버젼</a>을
        요구합니다.
      </p>
      <p>위의 코드는 다음의 코드와 동일합니다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> button </span>
        <span className="pun">=</span>
        <span className="pln"> querySelector</span>
        <span className="pun">(</span>
        <span className="str">&#39;#confirm&#39;</span>
        <span className="pun">);</span>
        <div />
        <span className="pln">button</span>
        <span className="pun">?.</span>
        <span className="pln">text </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;Confirm&#39;</span>
        <span className="pun">;</span>
        <div />
        <span className="pln">button</span>
        <span className="pun">?.</span>
        <span className="pln">class</span>
        <span className="pun">.</span>
        <span className="pln">add</span>
        <span className="pun">(</span>
        <span className="str">&#39;important&#39;</span>
        <span className="pun">);</span>
        <div />
        <span className="pln">button</span>
        <span className="pun">?.</span>
        <span className="pln">onClick</span>
        <span className="pun">.</span>
        <span className="pln">listen</span>
        <span className="pun">((</span>
        <span className="pln">e</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> window</span>
        <span className="pun">.</span>
        <span className="pln">alert</span>
        <span className="pun">(</span>
        <span className="str">&#39;Confirmed!&#39;</span>
        <span className="pun">));</span>
      </pre>
      <p>다음과 같이 중첩 cascades를 사용하는 것도 가능합니다.</p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">final</span>
        <span className="pln"> addressBook </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="typ">AddressBookBuilder</span>
        <span className="pun">()</span>
        <div />
        <span className="pln"></span>
        <span className="pun">{"    "}..</span>
        <span className="pln">name </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;jenny&#39;</span>
        <div />
        <span className="pln"></span>
        <span className="pun">{"    "}..</span>
        <span className="pln">email </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;jenny@example.com&#39;</span>
        <div />
        <span className="pln"></span>
        <span className="pun">{"    "}..</span>
        <span className="pln">phone </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="typ">PhoneNumberBuilder</span>
        <span className="pun">()</span>
        <div />
        <span className="pln"></span>
        <span className="pun">{"        "}..</span>
        <span className="pln">number </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;415-555-0100&#39;</span>
        <div />
        <span className="pln"></span>
        <span className="pun">{"        "}..</span>
        <span className="pln">label </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="str">&#39;home&#39;</span>
        <span className="pun">)</span>
        <div />
        <span className="pln"></span>
        <span className="pun">{"      "}.</span>
        <span className="pln">build</span>
        <span className="pun">())</span>
        <div />
        <span className="pln"></span>
        <span className="pun">{"  "}.</span>
        <span className="pln">build</span>
        <span className="pun">();</span>
      </pre>
      <p>
        실제 객체를 반환하는 함수에 대해서만 cascade를 사용해야 합니다. void를
        반환하는 함수에는 사용 할 수 없습니다. 다음과 같은 코드는 에러가
        발생합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> sb </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">StringBuffer</span>
        <span className="pun">();</span>
        <div />
        <span className="pln">sb</span>
        <span className="pun">.</span>
        <span className="pln">write</span>
        <span className="pun">(</span>
        <span className="str">&#39;foo&#39;</span>
        <div />
        <span className="pun">)</span>
        <span className="pln"></span>
        <span className="pun">{"  "}..</span>
        <span className="pln">write</span>
        <span className="pun">(</span>
        <span className="str">&#39;bar&#39;</span>
        <span className="pun">);</span>
        <span className="pln"> </span>
        <span className="com">
          &#47;&#47; Error: method &#39;write&#39; isn&#39;t defined for
          &#39;void&#39;.
        </span>
      </pre>
      <p>
        <Ccode text="sb.write()" /> 호출은 void를 반환하고,{" "}
        <Ccode text="void" />
        에는 cascade를 사용 할 수 없습니다.
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
          <strong>Note:</strong>
          엄밀히 말하자면, cascades를 위한 “double dot” 표기법은
          연산자(operator)가 아닙니다. 이것은 그저 Dart 문법의 일부입니다.
        </p>
      </aside>
    </>
  );
};
export default Cascade;
