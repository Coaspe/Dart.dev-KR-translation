import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
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

const Home = () => {
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
        </div>
      </article>
    </div>
  );
};

export default Home;
