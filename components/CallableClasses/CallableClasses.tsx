import Ccode from "../Custom/Ccode";

const CallableClasses = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "24px",
          marginTop: "1.5em",
          marginBottom: "0.5rem",
          fontWeight: 600,
        }}
        id="callable-classes"
        className="font-noto text-primaryTitleTextColor"
      >
        호출 가능한 클래스(Callable classes)
      </h2>
      <p>
        Dart 클래스의 인스턴스를 함수처럼 호출하고 싶다면,{" "}
        <Ccode text="call()" /> 메소드를 구현하세요.
      </p>
      <p>
        다음의 예제에서, <Ccode text="WannabeFunction" /> 클래스는 3개의
        string을 받아서 각 문자열을 공백으로 구분하고 느낌표를 추가하는 call()
        함수를 정의합니다.
      </p>
      <div>
        <iframe
          src="https://dartpad.dev/embed-dart.html?theme=light&amp;run=dartpad&amp;split=false&amp;id=f219f5c3db26ff4f6024257869ece720&amp;null_safety=false"
          style={{ height: "350px" }}
        ></iframe>
      </div>
    </>
  );
};

export default CallableClasses;
