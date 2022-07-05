import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../../components/Header";
import LeftSideBar from "../../components/LeftSideBar";
import ExtensionMethodsSideBar from "../../components/RightSideBar/ExtensionMethodsSideBar";

const ExtensionMethods = () => {
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
      <LeftSideBar selected="ExtentionMethods" />
      <article>
        <ExtensionMethodsSideBar />
        <div
          style={{
            maxWidth: "960px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "55px",
            padding: "20px",
          }}
          className="font-noto relative"
        ></div>
      </article>
    </div>
  );
};

export default ExtensionMethods;
