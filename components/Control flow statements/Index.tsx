import CAnchor from "../Custom/CAnchor";
import Ccode from "../Custom/Ccode";

const Index = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="control-flow-statements"
        className="font-noto text-primaryTitleTextColor"
      >
        Control flow statements
      </h2>
      <p>
        다음의 statements들을 사용해서 Dart 코드의 흐름을 제어 할 수 있습니다.
      </p>
      <ul className=" list-disc ll">
        <li>
          <code className="language-plaintext highlighter-rouge">if</code> and{" "}
          <code className="language-plaintext highlighter-rouge">else</code>
        </li>
        <li>
          <code className="language-plaintext highlighter-rouge">for</code>{" "}
          loops
        </li>
        <li>
          <code className="language-plaintext highlighter-rouge">while</code>{" "}
          and <code className="language-plaintext highlighter-rouge">do</code>-
          <code className="language-plaintext highlighter-rouge">while</code>{" "}
          loops
        </li>
        <li>
          <code className="language-plaintext highlighter-rouge">break</code>{" "}
          and{" "}
          <code className="language-plaintext highlighter-rouge">continue</code>
        </li>
        <li>
          <code className="language-plaintext highlighter-rouge">switch</code>{" "}
          and <code className="language-plaintext highlighter-rouge">case</code>
        </li>
        <li>
          <code className="language-plaintext highlighter-rouge">assert</code>
        </li>
      </ul>
      <p>
        <CAnchor
          text="Exceptions"
          href="https://dart.dev/guides/language/language-tour#exceptions"
        />
        의 설명 처럼, <Ccode text="try-catch" />와 <Ccode text="throw" />를
        사용해 흐름을 제어 할 수도 있습니다.
      </p>
    </>
  );
};

export default Index;
