import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const ForLoop = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="for-loops"
        className="font-noto text-primaryTitleTextColor"
      >
        For 반복
      </h2>
      <p>
        <Ccode text="for" />
        문을 활용해 반복을 수행 할 수 있습니다. 예:
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> message </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="typ">StringBuffer</span>
        <span className="pun">(</span>
        <span className="str">&#39;Dart is fun&#39;</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">for</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="kwd">var</span>
        <span className="pln"> i </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <span className="pln"> i </span>
        <span className="pun">&lt;</span>
        <span className="pln"> </span>
        <span className="lit">5</span>
        <span className="pun">;</span>
        <span className="pln"> i</span>
        <span className="pun">++)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}message</span>
        <span className="pun">.</span>
        <span className="pln">write</span>
        <span className="pun">(</span>
        <span className="str">&#39;!&#39;</span>
        <span className="pun">);</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
      </pre>
      <p>
        Dart의 <Ccode text="for" /> loops 안의 클로저는, Javascript에서 흔히
        발생하는 위험을 피하면서, 해당 인덱스의 값을 기억합니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">var</span>
        <span className="pln"> callbacks </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="pun">[];</span>
        <div />
        <span className="pln"></span>
        <span className="kwd">for</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="kwd">var</span>
        <span className="pln"> i </span>
        <span className="pun">=</span>
        <span className="pln"> </span>
        <span className="lit">0</span>
        <span className="pun">;</span>
        <span className="pln"> i </span>
        <span className="pun">&lt;</span>
        <span className="pln"> </span>
        <span className="lit">2</span>
        <span className="pun">;</span>
        <span className="pln"> i</span>
        <span className="pun">++)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}callbacks</span>
        <span className="pun">.</span>
        <span className="pln">add</span>
        <span className="pun">(()</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> print</span>
        <span className="pun">(</span>
        <span className="pln">i</span>
        <span className="pun">));</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
        <span className="pln">callbacks</span>
        <span className="pun">.</span>
        <span className="pln">forEach</span>
        <span className="pun">((</span>
        <span className="pln">c</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">=&gt;</span>
        <span className="pln"> c</span>
        <span className="pun">());</span>
      </pre>
      <p>
        실행 결과는 <Ccode text="0" />과 <Ccode text="1" /> 입니다. 대조적으로,
        위의 예는 Javascript에서 <Ccode text="2" />와 <Ccode text="2" />를
        출력합니다.
      </p>
      <p>
        만약 반복하려는 객체가 List나 Set 처럼 반복 될 수 있고, 현재 반복
        카운터를 알 필요가 없다면, <Ccode text="for-in" /> 형태의{" "}
        <CAnchor
          text="iteration"
          href="https://dart.dev/guides/libraries/library-tour#iteration"
        />{" "}
        을 사용하세요.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <span className="kwd">for</span>
        <span className="pln"> </span>
        <span className="pun">(</span>
        <span className="kwd">final</span>
        <span className="pln"> candidate </span>
        <span className="kwd">in</span>
        <span className="pln"> candidates</span>
        <span className="pun">)</span>
        <span className="pln"> </span>
        <span className="pun">&#123;</span>
        <div />
        <span className="pln">{"  "}candidate</span>
        <span className="pun">.</span>
        <span className="pln">interview</span>
        <span className="pun">();</span>
        <div />
        <span className="pln"></span>
        <span className="pun">&#125;</span>
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
          <code className="language-plaintext highlighter-rouge">for-in</code>를
          더 사용해보고 싶다면,{" "}
          <a href="/codelabs/iterables">Iterable collections codelab</a>를
          참고하세요.
        </p>
      </aside>
      <p>
        반복 가능한 클래스들은{" "}
        <CAnchor
          text="forEach()"
          href="https://api.dart.dev/stable/dart-core/Iterable/forEach.html"
        />{" "}
        함수를 지원합니다.
      </p>
    </>
  );
};

export default ForLoop;
