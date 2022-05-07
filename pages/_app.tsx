import type { AppProps } from "next/app";
import "../styles/global.css";
import "../styles/leftsidebar.css";
import "../styles/KeywordsTable.css";
import "../styles/language.css";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
