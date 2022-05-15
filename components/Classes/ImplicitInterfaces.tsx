import Ccode from "../Custom/Ccode";

const ImplicitInterfaces = () => {
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
        암묵적 인터페이스(Implicit interfaces)
      </h2>
      <p>
        모든 클래스는 암묵적으로 클래스의 인스턴스 멤버를 포함하는 인터페이스를
        정의합니다. 만약 B 클래스를 상속받지 않은 A 클래스가 B의 API를 사용하고
        싶다면 B 인터페이스를 구현해야 합니다.
      </p>
      <p>
        하나의 클래스는 <Ccode text="implements" />문 안에 하나 혹은 여러개의
        인터페이스를 구현하고, 인터페이스에 필요한 API들을 제공합니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="com">
              &#47;&#47; A person. The implicit interface contains greet().
            </span>
            <div />
            <span className="pln"></span>
            <span className="kwd">class</span>
            <span className="pln"> </span>
            <span className="typ">Person</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="com">
              {"  "}&#47;&#47; In the interface, but visible only in this
              library.
            </span>
            <div />
            <span className="pln"></span>
            <span className="kwd">{"  "}final</span>
            <span className="pln"> </span>
            <span className="typ">String</span>
            <span className="pln"> _name</span>
            <span className="pun">;</span>
            <span className="pln"></span>
            <div> </div>
            <span className="com">
              {"  "}&#47;&#47; Not in the interface, since this is a
              constructor.
            </span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}Person</span>
            <span className="pun">(</span>
            <span className="kwd">this</span>
            <span className="pun">.</span>
            <span className="pln">_name</span>
            <span className="pun">);</span>
            <div> </div>
            <span className="pln"></span>
            <span className="com">{"  "}&#47;&#47; In the interface.</span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}String</span>
            <span className="pln"> greet</span>
            <span className="pun">(</span>
            <span className="typ">String</span>
            <span className="pln"> who</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">=&gt;</span>
            <span className="pln"> </span>
            <span className="str">&#39;Hello, $who. I am $_name.&#39;</span>
            <span className="pun">;</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="com">
              &#47;&#47; An implementation of the Person interface.
            </span>
            <div />
            <span className="pln"></span>
            <span className="kwd">class</span>
            <span className="pln"> </span>
            <span className="typ">Impostor</span>
            <span className="pln"> </span>
            <span className="kwd">implements</span>
            <span className="pln"> </span>
            <span className="typ">Person</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="typ">{"  "}String</span>
            <span className="pln"> </span>
            <span className="kwd">get</span>
            <span className="pln"> _name </span>
            <span className="pun">=&gt;</span>
            <span className="pln"> </span>
            <span className="str">&#39;</span>
            <span className="pun">;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="typ">{"  "}String</span>
            <span className="pln"> greet</span>
            <span className="pun">(</span>
            <span className="typ">String</span>
            <span className="pln"> who</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">=&gt;</span>
            <span className="pln"> </span>
            <span className="str">
              &#39;Hi $who. Do you know who I am?&#39;
              <div />
            </span>
            <span className="pun">;</span>
            <span className="pln"></span>
            <span className="pun">&#125;</span>
            <div> </div>
            <span className="pln"></span>
            <span className="typ">String</span>
            <span className="pln"> greetBob</span>
            <span className="pun">(</span>
            <span className="typ">Person</span>
            <span className="pln"> person</span>
            <span className="pun">)</span>
            <span className="pln"> </span>
            <span className="pun">=&gt;</span>
            <span className="pln"> person</span>
            <span className="pun">.</span>
            <span className="pln">greet</span>
            <span className="pun">(</span>
            <span className="str">&#39;Bob&#39;</span>
            <span className="pun">);</span>
            <div> </div>
            <span className="pln"></span>
            <span className="typ">void</span>
            <span className="pln"> main</span>
            <span className="pun">()</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln">{"  "}print</span>
            <span className="pun">(</span>
            <span className="pln">greetBob</span>
            <span className="pun">(</span>
            <span className="typ">Person</span>
            <span className="pun">(</span>
            <span className="str">&#39;Kathy&#39;</span>
            <span className="pun">)));</span>
            <div />
            <span className="pln">{"  "}print</span>
            <span className="pun">(</span>
            <span className="pln">greetBob</span>
            <span className="pun">(</span>
            <span className="typ">Impostor</span>
            <span className="pun">()));</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
      <p>다음은 여러개의 인터페이스를 가지는 클래스 입니다.</p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="kwd">class</span>
            <span className="pln"> </span>
            <span className="typ">Point</span>
            <span className="pln"> </span>
            <span className="kwd">implements</span>
            <span className="pln"> </span>
            <span className="typ">Comparable</span>
            <span className="pun">,</span>
            <span className="pln"> </span>
            <span className="typ">Location</span>
            <span className="pln"> </span>
            <span className="pun">&#123;...&#125;</span>
          </pre>
        </div>
      </div>
    </>
  );
};

export default ImplicitInterfaces;
