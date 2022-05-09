import { useEffect } from "react";
import Anonymous from "./Anonymous";
import FirstClassObject from "./FirstClassObject";
import Index from "./Index";
import LexicalClosures from "./LexicalClosures";
import LexicalScope from "./LexicalScope";
import Main from "./Main";
import Parameters from "./Parameters";
import ReturnValues from "./ReturnValues";
import TestingFunctions from "./TestingFucntions";

const Functions = () => {
  return (
    <>
      <Index />
      <Parameters />
      <Main />
      <FirstClassObject />
      <Anonymous />
      <LexicalScope />
      <LexicalClosures />
      <TestingFunctions />
      <ReturnValues />
      {/* <div>
        <iframe
          src="https://dartpad.dev/embed-dart.html?theme=light&amp;run=dartpad&amp;split=false&amp;ga_id=anonymous_functions&amp;null_safety=false"
          style={{ height: "400px", width: "100%", border: "1px" }}
        ></iframe>
      </div> */}
    </>
  );
};
export default Functions;
