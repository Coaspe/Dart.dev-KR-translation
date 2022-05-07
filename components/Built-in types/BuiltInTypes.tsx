import Booleans from "./Booleans";
import Index from "./Index";
import Lists from "./Lists";
import Maps from "./Maps";
import Numbers from "./Numbers";
import RAGC from "./RAGC";
import Sets from "./Sets";
import Strings from "./Strings";
import Symbols from "./Symbols";

const BuiltInTypes = () => {
  return (
    <>
      <Index />
      <Numbers />
      <Strings />
      <Booleans />
      <Lists />
      <Sets />
      <Maps />
      <RAGC />
      <Symbols />
    </>
  );
};
export default BuiltInTypes;
