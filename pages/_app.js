import "../styles/globals.css";

export const config = {
  unstable_JsPreload: false,
};

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
