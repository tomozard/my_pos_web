import { ChakraProvider } from "@chakra-ui/react";
import theme from "definitions/chakra/theme";
import "styles/global.css";
import { Provider } from "react-redux";
import store from "redux/store";
import "./i18n";

import '@fontsource/sarabun/400.css'

// import Login from "pages/login";
import { Routes, Route } from "react-router-dom";
import Home from "pages";
// import { useLiff } from "react-liff";
// import { useEffect, useState } from "react";

function App(): JSX.Element {
  // const [displayName, setDisplayName] = useState("");
  // const { error, isLoggedIn, isReady, liff } = useLiff();

  // useEffect(() => {
  //   if (!isLoggedIn) return;

  //   (async () => {
  //     const profile = await liff.getProfile();
  //     setDisplayName(profile.displayName);
  //   })();
  // }, [liff, isLoggedIn]);

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          {/* <header className="App-header">{showDisplayName()}</header> */}
          {/* <Routes> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* </Routes> */}
          <Home />
        </div>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
