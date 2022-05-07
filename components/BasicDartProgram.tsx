const BasicDartProgram = () => {
  return (
    <>
      <h2
        style={{ fontSize: "24px", fontWeight: 600, marginTop: "1.5em" }}
        className="text-primaryTitleTextColor font-noto"
      >
        Dart 프로그램의 기본
      </h2>
      <p>생략</p>
      <aside className="font-noto font-bold flex items-center">
        <i className="inline-block ">
          <svg
            style={{ width: "1rem" }}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="info-circle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
            ></path>
          </svg>
        </i>
        <strong className="mx-1">Note:</strong>이 사이트의 코드는{" "}
        <a
          className="text-selectedText hover:text-selectedTextHover mx-1"
          href="https://dart.dev/guides/language/effective-dart/style"
        >
          Dart style guide
        </a>{" "}
        관습을 따릅니다.
      </aside>
    </>
  );
};

export default BasicDartProgram;
