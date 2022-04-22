import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetailsThunk } from "./redux/thunks";
import { scopes } from "./util/scopes";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [token, setToken] = React.useState("");
  const { userDetails } = useSelector((state) => state.user);
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
    }

    setToken(token);
    dispatch(getUserDetailsThunk());
  }, [dispatch]);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!token ? (
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
        ) : (
          <button className="App-link" onClick={logout}>
            {userDetails.display_name} Logout
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
