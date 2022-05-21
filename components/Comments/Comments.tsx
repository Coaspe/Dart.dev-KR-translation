import DocumentationComments from "./DocumentationComments";
import Index from "./Index";
import MultiLineComments from "./MultiLineComments";
import SingleLineComments from "./SingleLineComments";

const Comments = () => {
  return (
    <>
      <Index />
      <SingleLineComments />
      <MultiLineComments />
      <DocumentationComments />
    </>
  );
};

export default Comments;
