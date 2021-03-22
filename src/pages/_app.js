import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
// ini adalah base component semua page

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
