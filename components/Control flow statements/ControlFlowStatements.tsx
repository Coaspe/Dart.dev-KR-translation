import Assert from "./Assert";
import BreakAndContinue from "./BreakAndContinue";
import ForLoop from "./ForLoop";
import IfAndElse from "./IfAndElse";
import Index from "./Index";
import SwitchAndCase from "./SwitchAndCase";
import WhileAndDoWhile from "./WhileAndDoWhile";

const ControlFlowStatements = () => {
  return (
    <>
      <Index />
      <IfAndElse />
      <ForLoop />
      <WhileAndDoWhile />
      <BreakAndContinue />
      <SwitchAndCase />
      <Assert />
    </>
  );
};
export default ControlFlowStatements;
