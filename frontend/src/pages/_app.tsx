import type { AppProps } from "next/app";
import "../css/styles.css";
import "../css/globals.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;