import { useRef, useState } from "react";
import BasicDartProgram from "../../components/BasicDartProgram";
import BuiltInTypes from "../../components/Built-in types/BuiltInTypes";
import Header from "../../components/Header";
import ImportantConcepts from "../../components/ImportantConcepts";
import Keywords from "../../components/Keywords";
import LeftSideBar from "../../components/LeftSideBar";
import TourRightSideBar from "../../components/RightSideBar/TourRightSideBar";
import TourOfTheDartLanguage from "../../components/TourOfTheDartLauguage";
import Variables from "../../components/Variables/Variables";

const Tour = () => {
  const TourOfTheDartRef = useRef(document.createElement("h2"));
  return (
    <div className="w-full">
      <Header />
      <LeftSideBar selected="Tour" />
      <TourRightSideBar TourOfTheDartRef={TourOfTheDartRef} />
      <div
        style={{
          maxWidth: "960px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "55px",
        }}
        className="font-noto"
      >
        <TourOfTheDartLanguage TourOfTheDartRef={TourOfTheDartRef} />
        <BasicDartProgram />
        <ImportantConcepts />
        <Keywords />
        <Variables />
        <BuiltInTypes />
      </div>
    </div>
  );
};

export default Tour;
