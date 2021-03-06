import { useRouter } from "next/router";
import { useEffect } from "react";
import BasicDartProgram from "../components/BasicDartProgram";
import BuiltInTypes from "../components/Built-in types/BuiltInTypes";
import Functions from "../components/Functions/Functions";
import Header from "../components/Header";
import ImportantConcepts from "../components/ImportantConcepts";
import Keywords from "../components/Keywords";
import LeftSideBar from "../components/LeftSideBar";
import TourRightSideBar from "../components/RightSideBar/TourRightSideBar";
import TourOfTheDartLanguage from "../components/TourOfTheDartLauguage";
import Variables from "../components/Variables/Variables";
import Opening from "../components/Opening";
import Operators from "../components/Operators/Operators";
import ControlFlowStatements from "../components/Control flow statements/ControlFlowStatements";
import Exceptions from "../components/Exceptions/Exceptions";
import Classes from "../components/Classes/Classes";
import Generics from "../components/Generics/Generics";
import LibrariesAndVisibility from "../components/LibrariesAndVisibility/LibrariesAndVisibility";
import AsynchronySupport from "../components/Asynchrony support/AsynchronySupport";
import Generators from "../components/Generators/Generators";
import CallableClasses from "../components/CallableClasses/CallableClasses";
import Tour from "./language/tour";

const Home = () => {
  const Router = useRouter();
  useEffect(() => {
    const handler = (url: string) => {
      const element = document.getElementById(url.split("#")[1]);

      if (element) {
        const tt = element.offsetTop - 50;
        window.scrollTo({ top: tt, behavior: "smooth" });
      }
    };
    Router.events.on("hashChangeComplete", handler);
    return () => {
      Router.events.off("hashChangeComplete", handler);
    };
  }, []);

  return (
    <>
      <Tour />
    </>
  );
};

export default Home;
