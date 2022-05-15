import Ccode from "../Custom/Ccode";

const Mixins = () => {
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
        클래스에 피쳐(features) 추가하기:Mixins
      </h2>
      <p>
        Mixins은 다수의 클래스 계층에서 클래스의 코드를 재사용 할 수 있는
        방법입니다.
      </p>
      <p>
        Mixin을 사용하려면, 밑의 코드처럼 <Ccode text="with" /> 키워드와 사용 할
        mixin의 이름을 명시하면 됩니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <code>
          <span className="kwd">class</span>
          <span className="pln"> </span>
          <span className="typ">Musician</span>
          <span className="pln"> </span>
          <span className="kwd">extends</span>
          <span className="pln"> </span>
          <span className="typ">Performer</span>
          <span className="pln"> </span>
          <span className="highlight">
            <span className="kwd">with</span>
            <span className="pln"> </span>
            <span className="typ">Musical</span>
          </span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln"></span>
          <span className="com">{"  "}&#47;&#47; ···</span>
          <span className="pln"></span>
          <span className="pun">&#125;</span>
          <div> </div>
          <span className="pln"></span>
          <span className="kwd">class</span>
          <span className="pln"> </span>
          <span className="typ">Maestro</span>
          <span className="pln"> </span>
          <span className="kwd">extends</span>
          <span className="pln"> </span>
          <span className="typ">Person</span>
          <span className="pln"> </span>
          <span className="highlight">
            <span className="kwd">with</span>
            <span className="pln"> </span>
            <span className="typ">Musical</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="typ">Aggressive</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="typ">Demented</span>
          </span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln"></span>
          <span className="typ">{"  "}Maestro</span>
          <span className="pun">(</span>
          <span className="typ">String</span>
          <span className="pln"> maestroName</span>
          <span className="pun">)</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln">{"    "}name </span>
          <span className="pun">=</span>
          <span className="pln"> maestroName</span>
          <span className="pun">;</span>
          <div />
          <span className="pln">{"    "}canConduct </span>
          <span className="pun">=</span>
          <span className="pln"> </span>
          <span className="kwd">true</span>
          <span className="pun">;</span>
          <div />
          <span className="pln"></span>
          <span className="pun">{"  "}&#125;</span>
          <span className="pln"></span>
          <span className="pun">&#125;</span>
        </code>
      </pre>
      <p>
        Mixin을 구현하려면, 객체를 확장하며, 생성자가 없는 클래스를 생성하세요.
        Mixin을 일반 클래스로 사용할 수 있도록 하려면 <Ccode text="class" />{" "}
        대신 <Ccode text="mixin" /> 키워드를 사용하십시오.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">mixin</span>
            <span className="pln"> </span>
            <span className="typ">Musical</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}bool</span>
            <span className="pln"> canPlayPiano </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="kwd">false</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}bool</span>
            <span className="pln"> canCompose </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="kwd">false</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}bool</span>
            <span className="pln"> canConduct </span>
            <span className="pun">=</span>
            <span className="pln"> </span>
            <span className="kwd">false</span>
            <span className="pun">;</span>
            <div></div>
            <span className="pln"></span>
            <span className="typ">{"  "}void</span>
            <span className="pln"> entertainMe</span>
            <span className="pun">()</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"    "}if</span>
            <span className="pln"> </span>
            <span className="pun">(</span>
            <span className="pln">canPlayPiano</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln">{"      "}print</span>
            <span className="pun">(</span>
            <span className="str">&#39;Playing piano&#39;</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="pun">{"    "}&#125;</span>
            <span className="pln"> </span>
            <span className="kwd">else</span>
            <span className="pln"> </span>
            <span className="kwd">if</span>
            <span className="pln"> </span>
            <span className="pun">(</span>
            <span className="pln">canConduct</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln">{"      "}print</span>
            <span className="pun">(</span>
            <span className="str">&#39;Waving hands&#39;</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="pun">{"    "}&#125;</span>
            <span className="pln"> </span>
            <span className="kwd">else</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln">{"      "}print</span>
            <span className="pun">(</span>
            <span className="str">&#39;Humming to self&#39;</span>
            <span className="pun">);</span>
            <div />
            <span className="pln"></span>
            <span className="pun">{"    "}&#125;</span>
            <div />
            <span className="pln"></span>
            <span className="pun">{"  "}&#125;</span>
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
      <p>
        때때로 mixin으로 사용 할 수 있는 타입을 제한합니다. 예를 들면, mixin은
        mixin은이 정의하지 않은 메서드를 호출할 수 있는가에 따라 달라질 수
        있습니다. 다음 예제 처럼 <Ccode text="on" /> 키워드를 사용해 사용할 수
        있는 superclass를 제한하므로써 mixin의 사용을 제한 할 수 있습니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">class</span>
            <span className="pln"> </span>
            <span className="typ">Musician</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="com">{"  "}&#47;&#47; ...</span>
            <span className="pln"></span>
            <span className="pun">&#125;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">mixin</span>
            <span className="pln"> </span>
            <span className="typ">MusicalPerformer</span>
            <span className="pln"> </span>
            <span className="highlight">
              <span className="kwd">on</span>
              <span className="pln"> </span>
              <span className="typ">Musician</span>
            </span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="com">{"  "}&#47;&#47; ...</span>
            <span className="pln"></span>
            <span className="pun">&#125;</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">class</span>
            <span className="pln"> </span>
            <span className="typ">SingerDancer</span>
            <span className="pln"> </span>
            <span className="kwd">extends</span>
            <span className="pln"> </span>
            <span className="typ">Musician</span>
            <span className="pln"> </span>
            <span className="kwd">with</span>
            <span className="pln"> </span>
            <span className="typ">MusicalPerformer</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="com">{"  "}&#47;&#47; ...</span>
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
        <p>
          위의 코드에서 <Ccode text="Musician" /> 클래스를 확장, 구현하는
          클래스들만 <Ccode text="MusicalPerformer" /> mixin을 사용 할 수
          있습니다. <Ccode text="SingerDancer" />가 <Ccode text="Musician" />을
          확장하기 때문에, <Ccode text="SingerDancer" />는{" "}
          <Ccode text="MusicalPerformer" /> mixin을 사용 할 수 있습니다.
        </p>
      </div>
    </>
  );
};

export default Mixins;
