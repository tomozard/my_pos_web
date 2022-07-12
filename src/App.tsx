import { ChakraProvider } from "@chakra-ui/react";
import theme from "definitions/chakra/theme";
import "styles/global.css";
import { Provider } from "react-redux";
import store from "redux/store";
import "./i18n";

import Login from "pages/login";
import { Routes, Route } from "react-router-dom";
import Home from "pages";
import { useLiff } from "react-liff";
import { useEffect, useState } from "react";
import { Button } from "./components/button/index";

function App(): JSX.Element {
  const [displayName, setDisplayName] = useState("");
  const { error, isLoggedIn, isReady, liff } = useLiff();

  useEffect(() => {
    if (!isLoggedIn) return;

    (async () => {
      const profile = await liff.getProfile();
      setDisplayName(profile.displayName);
    })();
  }, [liff, isLoggedIn]);

  const showDisplayName = () => {
    if (error) return <p>Something is wrong.</p>;
    if (!isReady) return <p>Loading...</p>;

    if (!isLoggedIn) {
      return (
        <Button className="App-button" onClick={() => liff.login}>
          Login
        </Button>
      );
    }
    return (
      <>
        <p>Welcome to the react-liff demo app, {displayName}!</p>
        <button className="App-button" onClick={liff.logout}>
          Logout
        </button>
      </>
    );
  };

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <header className="App-header">{showDisplayName()}</header>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
