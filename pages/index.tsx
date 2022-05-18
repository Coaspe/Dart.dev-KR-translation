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

const Home = () => {
  const Router = useRouter();
  useEffect(() => {
    const handler = (url: string) => {
      console.log(url);
      const element = document.getElementById(url.split("#")[1]);
      console.log(url.split("#")[1]);
      console.log(element);

      if (element) {
        console.log(element.getBoundingClientRect().top);
        console.log(element.offsetTop);

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
        </div>
      </article>
    </div>
  );
};

export default Home;
