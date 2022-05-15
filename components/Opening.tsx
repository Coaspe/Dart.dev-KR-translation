import CAnchor from "./Custom/CAnchor";

const Opening = () => {
  return (
    <>
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "0.67rem",
          marginTop: "0px",
          color: "#4A4A4A",
        }}
        id="a-basic-dart-program"
        className="font-noto font-semibold"
      >
        Notification
      </h1>
      <p>
        이 웹페이지는{" "}
        <CAnchor text="https://dart.dev" href="https://dart.dev" /> 를 한글로
        번역한 사이트 입니다. 번역이 처음이고 Dart를 처음 공부하며 번역을 하는
        것이어서 오역이 있을 수 있습니다. 이 페이지 자체가 문제가 된다면 바로
        조치하겠습니다.
      </p>
      <p>
        현재 Language ➡️ Tour ➡️ Generics 까지 완료한 상태이고, 진행 중에
        있습니다.
      </p>
      <p>
        This web page is a site that translates{" "}
        <CAnchor text="https://dart.dev" href="https://dart.dev" /> into Korean.
        It is my first time to translate and I am also studying Dart for the
        first time, so there may be a misunderstanding. If the site itself is a
        problem, I will take care of it right away.
      </p>
      <p>
        The translation work has been completed by Language ➡️ Tour ➡️ Generics,
        and it is still in progress.{" "}
      </p>
      <p>Contact: aspalt85@gmail.com</p>
    </>
  );
};
export default Opening;
