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
        id="classes"
        className="font-noto text-primaryTitleTextColor"
      >
        Classes
      </h2>
      <p>
        Dart는 mixin 기반 상속을 지원하는 객체지향언어 입니다. 모든 객체는
        클래스의 인스턴스이고, <Ccode text="Null" />을 제외한 클래스는 모두{" "}
        <CAnchor
          text="Object"
          href="https://api.dart.dev/stable/dart-core/Object-class.html"
        />
        에서 비롯합니다. <span className="italic">Mixin 기반 상속</span>이란
        말은, 모든 클래스가 하나의 superclass를 갖고 있지만(
        <CAnchor
          text="top class"
          href="https://dart.dev/null-safety/understanding-null-safety#top-and-bottom"
        />
        인 <Ccode text="Object?" />를 제외한) 클래스의 바디는 다양한 클래스
        계층에서 재사용 될 수 있음을 의미합니다.{" "}
        <CAnchor
          text="Extension methods"
          href="https://dart.dev/guides/language/language-tour#extension-methods"
        />
        는 서브 클래스를 추가하거나, 클래스를 바꾸지 않고 클래스에 기능을
        추가하는 방법입니다.
      </p>
    </>
  );
};

export default Index;
