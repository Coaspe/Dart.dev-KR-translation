import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

// Runces and grapheme clusters
const RAGC = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="runes-and-grapheme-clusters"
        className="font-noto text-primaryTitleTextColor"
      >
        Runces and grapheme clusters
      </h2>
      <p>
        Dart에서{" "}
        <CAnchor
          text="runes"
          href="https://api.dart.dev/stable/dart-core/Runes-class.html"
        />
        는 string의 유니코드 코드 포인트를 나타냅니다.{" "}
        <CAnchor
          text="characters package"
          href="https://pub.dev/packages/characters"
        />
        를 사용하여{" "}
        <CAnchor
          text="Unicode (extended) grapheme clusters"
          href="https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries"
        />
        라고도 하는, 사용자가 인식하는 문자를 보거나 조작할 수 있습니다.
      </p>
      <p>
        유니코드는 세상의 모든 문자, 숫자, 기호 시스템에 대해 고유한 숫자 값을
        정의합니다. Dart의 문자열은 UTF-16 코드 단위의 시퀀스이기 때문에 문자열
        내에서 유니코드 코드 포인트를 표현하려면 특별한 구문이 필요합니다.
        유니코드 코드 포인트를 표현하는 가장 흔한 방법은 <Ccode text="\uXXXX" />{" "}
        형태로 나타내는 것 이고, XXXX는 16진수 4-digit 값 입니다. 예를 들면 하트
        문자(♥)는 <Ccode text="\u2665" />
        입니다. 4개의 16진수 보다 적거나, 많이 사용하고 싶다면, 중괄호 안에 값을
        넣으면 됩니다. 예를 들면 웃는 이모지(😆)는 <Ccode text="\u{1f606}" />
        으로 나타냅니다.
      </p>
      <p>
        만약 유니코드 문자 각각을 읽고 써야한다면, characters package에 의해
        String에 정의 되어 있는 <Ccode text="characters" /> getter를 사용하세요.
        반환된{" "}
        <CAnchor
          text="Characters"
          href="https://pub.dev/documentation/characters/latest/characters/Characters-class.html"
        />
        객체는 graphem clusters의 시퀀스로 이루어진 string 입니다. 아래는
        characters API를 사용한 예제 입니다:
      </p>
      <pre className="highlight">
        <span className="kn">import</span>{" "}
        <span className="s">&#39;package:characters/characters.dart&#39;</span>
        <span className="o">;</span>
        <div />
        <span className="o">...</span>
        <div />
        <span className="kd">var</span> <span className="n">hi</span>{" "}
        <span className="o">=</span> <span className="s">&#39;Hi 🇩🇰&#39;</span>
        <span className="o">;</span>
        <div />
        <span className="n">print</span>
        <span className="o">(</span>
        <span className="n">hi</span>
        <span className="o">);</span>
        <div />
        <span className="n">print</span>
        <span className="o">(</span>
        <span className="s">&#39;The end of the string: </span>
        <span className="si">$&#123;hi.substring(hi.length - 1)&#125;</span>
        <span className="s">&#39;</span>
        <span className="o">);</span>
        <div />
        <span className="n">print</span>
        <span className="o">(</span>
        <span className="s">&#39;The last character: </span>
        <span className="si">$&#123;hi.characters.last&#125;</span>
        <span className="se">\n</span>
        <span className="s">&#39;</span>
        <span className="o">);</span>
      </pre>
      <p>실행 환경에 따라서 결과는 다음과 같을 것 입니다:</p>
      <div className="language-terminal highlighter-rouge">
        <div className="highlight">
          <pre className="highlight">
            <span className="gp">$</span>
            <span className="w"> </span>dart run bin/main.dart
            <div />
            <span className="go">
              Hi 🇩🇰 The end of the string: ???
              <div />
              The last character: 🇩🇰
            </span>
          </pre>
        </div>
      </div>
      <p>
        String 조작을 위한 characters 패키지 사용에 대해 더 자세히 알고 싶다면,{" "}
        <CAnchor
          text="example"
          href="https://pub.dev/packages/characters/example"
        />
        과{" "}
        <CAnchor
          text="API reference"
          href="https://pub.dev/documentation/characters"
        />{" "}
        를 참고하세요.
      </p>
    </>
  );
};
export default RAGC;
