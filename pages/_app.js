import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "../src/redux/reducers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import AuthProvider from "../components/authProvider";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
      <ToastContainer />
    </Provider>
  );
}

export default MyApp;
