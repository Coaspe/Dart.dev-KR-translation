import Arithmetic from "./Arithmetic";
import Assignment from "./Assignment";
import BitwiseAndShift from "./BitwiseAndShift";
import Cascade from "./Cascade";
import Conditional from "./Conditional";
import EqulityAndRelational from "./EqulityAndRelational";
import Index from "./Index";
import Logical from "./Logical";
import Other from "./Other";
import TypeTest from "./TypeTest";

const Operators = () => {
  return (
    <>
      <Index />
      <Arithmetic />
      <EqulityAndRelational />
      <TypeTest />
      <Assignment />
      <Logical />
      <BitwiseAndShift />
      <Conditional />
      <Cascade />
      <Other />
    </>
  );
};
export default Operators;
