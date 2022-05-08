import CAnchor from "./Custom/CAnchor";
import Ccode from "./Custom/Ccode";
import KeywordsTable from "./KeywordsTable";

const Keywords = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="keywords"
        className="font-noto text-primaryTitleTextColor"
      >
        Keywords
      </h2>
      <p>다음의 표는 Dart에서 특별히 관리하는 words 입니다.</p>
      <KeywordsTable />
      <p>
        위의 words들을 식별자로 사용하지마세요. 만약 식별자로 사용하고 싶다면
        어깨글자(위 표의 1,2,3)으로 표시된 keywords를 식별자로 사용하는 것이
        가능합니다.
      </p>
      <ul
        style={{
          marginBottom: "1rem",
          fontWeight: 600,
          margin: "0px 0px 0px 40px",
        }}
        className="list-disc font-noto"
      >
        <li>
          <p>
            <code>1</code>로 표시된 단어들은 <code>contextual keywords</code>로
            특정한 장소에서만 의미를 갖습니다. 어디서든 식별자로 사용이
            가능합니다.
          </p>
        </li>
        <li>
          <p>
            <code>2</code>로 표시된 단어들은 <code>built-in identifiers</code>{" "}
            입니다. 이 keywords들은 거의 모든 곳에서 식별자로 사용이 가능하지만,
            클래스나 타입의 이름, import prefixes로 사용은 불가능 합니다.
          </p>
        </li>
        <li>
          <p>
            <code>3</code>으로 표시된 단어들은{" "}
            <CAnchor
              text="asynchrony support"
              href="https://dart.dev/guides/language/language-tour#asynchrony-support"
            />
            와 관련된 제한된 단어들 입니다. await이나 yield를{" "}
            <Ccode
              text="async, async*,
                sync*"
            />
            로 표시된 함수의 바디에서 식별자로 사용 할 수 없습니다.
          </p>
        </li>
      </ul>
      <p>
        표의 나머지 단어들은 모두 <code>reserved words</code>(예약된 단어
        &#61;&gt; 예약되었으므로 사용할 수 없다는 말)이므로 식별자로 사용이
        불가능 합니다.
      </p>
    </>
  );
};

export default Keywords;
