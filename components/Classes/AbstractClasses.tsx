import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const AbstractClasses = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="abstract-classes"
        className="font-noto text-primaryTitleTextColor"
      >
        추상 클래스(Abstract classes)
      </h2>
      <p>
        <Ccode text="abstract" /> 수식어를 사용하여,{" "}
        <span className="italic">추상 클래스</span>(인스턴스화 될 수 없는)를
        선언하세요. 추상 클래스는 인터페이스를 정의 할 때 유용하며, 종종 일부
        구현과 함께 사용됩니다
      </p>
      <p>
        추상 클래스는 <CAnchor text="추상 메서드" href="abstract-methods" />를
        가질 수 있습니다. 다음은 추상 메서드를 가지는 추상 클래스의 예제입니다.
      </p>
      <div className="code-excerpt">
        <div className="code-excerpt__code">
          <pre className="prettyprint lang-dart prettyprinted">
            <span className="com">
              &#47;&#47; This class is declared abstract and thus
            </span>
            <div />
            <span className="pln"></span>
            <span className="com">&#47;&#47; can&#39;t be instantiated.</span>
            <div />
            <span className="pln"></span>
            <span className="kwd">abstract</span>
            <span className="pln"> </span>
            <span className="kwd">class</span>
            <span className="pln"> </span>
            <span className="typ">AbstractContainer</span>
            <span className="pln"> </span>
            <span className="pun">&#123;</span>
            <div />
            <span className="pln"></span>
            <span className="com">
              {"  "}&#47;&#47; Define constructors, fields, methods...
            </span>
            <div> </div>
            <span className="pln"></span>
            <span className="typ">{"  "}void</span>
            <span className="pln"> updateChildren</span>
            <span className="pun">();</span>
            <span className="pln"> </span>
            <span className="com">&#47;&#47; Abstract method.</span>
            <div />
            <span className="pln"></span>
            <span className="pun">&#125;</span>
          </pre>
        </div>
      </div>
    </>
  );
};

export default AbstractClasses;
