const UGM = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="using-generic-methods"
        className="font-noto text-primaryTitleTextColor"
      >
        제네릭 메소드 사용하기
      </h2>
      <p>
        초창기에 Dart의 제네릭은 클래스만 지원했습니다. 새로운 문법에서{" "}
        <em>제네릭 메소드</em>라는 메소드는 메소드와 함수에 타입 인자를 추가 할
        수 있습니다.
      </p>
      <pre className="prettyprint lang-dart prettyprinted">
        <code>
          <span className="highlight">
            <span className="typ">T</span>
          </span>
          <span className="pln"> first</span>
          <span className="highlight">
            <span className="pun">&lt;</span>
            <span className="typ">T</span>
            <span className="pun">&gt;</span>
          </span>
          <span className="pun">(</span>
          <span className="typ">List</span>
          <span className="pun">&lt;</span>
          <span className="highlight">
            <span className="typ">T</span>
          </span>
          <span className="pun">&gt;</span>
          <span className="pln"> ts</span>
          <span className="pun">)</span>
          <span className="pln"> </span>
          <span className="pun">&#123;</span>
          <div />
          <span className="pln"></span>
          <span className="com">
            {"  "}&#47;&#47; Do some initial work or error checking, then...
          </span>
          <div />
          <span className="pln"></span>
          <span className="highlight">
            <span className="typ">{"  "}T</span>
          </span>
          <span className="pln"> tmp </span>
          <span className="pun">=</span>
          <span className="pln"> ts</span>
          <span className="pun">[</span>
          <span className="lit">0</span>
          <span className="pun">];</span>
          <div />
          <span className="pln"></span>
          <span className="com">
            {"  "}&#47;&#47; Do some additional checking or processing...
          </span>
          <div />
          <span className="pln"></span>
          <span className="kwd">{"  "}return</span>
          <span className="pln"> tmp</span>
          <span className="pun">;</span>
          <div />
          <span className="pln"></span>
          <span className="pun">&#125;</span>
        </code>
      </pre>
    </>
  );
};
export default UGM;
