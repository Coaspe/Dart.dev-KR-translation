import { useRouter } from "next/router";
import { useEffect } from "react";
import AsynchronySupport from "../../components/Asynchrony support/AsynchronySupport";
import BasicDartProgram from "../../components/BasicDartProgram";
import BuiltInTypes from "../../components/Built-in types/BuiltInTypes";
import CallableClasses from "../../components/CallableClasses/CallableClasses";
import Classes from "../../components/Classes/Classes";
import Comments from "../../components/Comments/Comments";
import ControlFlowStatements from "../../components/Control flow statements/ControlFlowStatements";
import Exceptions from "../../components/Exceptions/Exceptions";
import Functions from "../../components/Functions/Functions";
import Generators from "../../components/Generators/Generators";
import Generics from "../../components/Generics/Generics";
import Header from "../../components/Header";
import ImportantConcepts from "../../components/ImportantConcepts";
import Isolates from "../../components/Isolates/Isolates";
import Keywords from "../../components/Keywords";
import LeftSideBar from "../../components/LeftSideBar";
import LibrariesAndVisibility from "../../components/LibrariesAndVisibility/LibrariesAndVisibility";
import Metadata from "../../components/Metadata/Metadata";
import Opening from "../../components/Opening";
import Operators from "../../components/Operators/Operators";
import TourRightSideBar from "../../components/RightSideBar/TourRightSideBar";
import Summary from "../../components/Summary/Summary";
import TourOfTheDartLanguage from "../../components/TourOfTheDartLauguage";
import Typedefs from "../../components/Typedefs/Typedefs";
import Variables from "../../components/Variables/Variables";

const Tour = () => {
  const Router = useRouter();
  useEffect(() => {
    const element = document.getElementById(Router.asPath.split("#")[1]);
    if (element) {
      console.log(element);
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [Router.asPath]);
  return (
    <div>
      <Header />
      <LeftSideBar selected="Tour" />
      <article>
        <TourRightSideBar />
        <div
          style={{
            maxWidth: "960px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "55px",
            padding: "20px",
          }}
          className="font-noto relative"
        >
          <Opening />
          <TourOfTheDartLanguage />
          <BasicDartProgram />
          <ImportantConcepts />
          <Keywords />
          <Variables />
          <BuiltInTypes />
          <Functions />
          <Operators />
          <ControlFlowStatements />
          <Exceptions />
          <Classes />
          <Generics />
          <LibrariesAndVisibility />
          <AsynchronySupport />
          <Generators />
          <CallableClasses />
          <Isolates />
          <Typedefs />
          <Metadata />
          <Comments />
          <Summary />
        </div>
      </article>
    </div>
  );
};

export default Tour;
