import { useRouter } from "next/router";
import { useEffect } from "react";
import AsynchronySupport from "../../components/Asynchrony support/AsynchronySupport";
import BasicDartProgram from "../../components/BasicDartProgram";
import BuiltInTypes from "../../components/Built-in types/BuiltInTypes";
import Classes from "../../components/Classes/Classes";
import ControlFlowStatements from "../../components/Control flow statements/ControlFlowStatements";
import Exceptions from "../../components/Exceptions/Exceptions";
import Functions from "../../components/Functions/Functions";
import Generics from "../../components/Generics/Generics";
import Header from "../../components/Header";
import ImportantConcepts from "../../components/ImportantConcepts";
import Keywords from "../../components/Keywords";
import LeftSideBar from "../../components/LeftSideBar";
import LibrariesAndVisibility from "../../components/LibrariesAndVisibility/LibrariesAndVisibility";
import Operators from "../../components/Operators/Operators";
import TourRightSideBar from "../../components/RightSideBar/TourRightSideBar";
import TourOfTheDartLanguage from "../../components/TourOfTheDartLauguage";
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
        </div>
      </article>
    </div>
  );
};

export default Tour;
