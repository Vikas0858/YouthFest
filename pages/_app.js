import "../styles/globals.css";
import { useEffect, useContext } from "react";
import { AuthProvider } from "../context/AuthContext";
import { EventProvider } from "../context/EventContext";
import { ModalProvider } from "../context/ModalContext";
import { LoaderProvider } from "../context/LoaderContext";
import { ToastContainer } from "react-toastify";
// import LoaderContext from "../context/LoaderContext";
import "react-toastify/dist/ReactToastify.css";
// import "../styles/contactstyle.css";
function MyApp({ Component, pageProps }) {
  // const { isLoading, setIsLoading } = useContext(LoaderContext);
  // useEffect(() => {
  //   setIsLoading(true);
  // }, []);
  return (
    <AuthProvider>
      <LoaderProvider>
        <EventProvider>
          <ModalProvider>
            <ToastContainer />
            <Component {...pageProps} />
          </ModalProvider>
        </EventProvider>
      </LoaderProvider>
    </AuthProvider>
  );
}

export default MyApp;
