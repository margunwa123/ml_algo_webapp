import "@/styles/globals.css";
// ini adalah base component semua page

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
