import React from "react";
import { useDispatch } from "react-redux";
import { getUserDetailsThunk } from "./redux/thunks";
import { scopes } from "./util/scopes";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main/Main";

function App() {
  const [token, setToken] = React.useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
      dispatch(getUserDetailsThunk());
    }

    setToken(token);
  }, [dispatch]);

  return (
    <div className="App">
      <header>
        <h1>Recommendify</h1>
      </header>
      <main>
        {!token ? (
          <>
            <h2 className="styled-text">
              Hey! Do you want to listen to new music based on your mood? Do you
              want to pick something especially danceable or only instrumental?
              This tool is for you. <div>Enjoy!</div>
            </h2>

            <a
              className="App-link"
              href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${
                process.env.REACT_APP_CLIENT_ID
              }&redirect_uri=${
                process.env.NODE_ENV === "development"
                  ? process.env.REACT_APP_LOCAL_REDIRECT_URI
                  : process.env.REACT_APP_PROD_REDIRECT_URI
              }&response_type=${
                process.env.REACT_APP_RESPONSE_TYPE
              }&scope=${scopes.join("%20")}&show_dialog=true`}
            >
              Login to Spotify
            </a>
          </>
        ) : (
          <>
            <Main setToken={(e) => setToken(e)} />
          </>
        )}
      </main>
      <footer>Made by Akanksha. Powered by Spotify API</footer>
    </div>
  );
}

export default App;
