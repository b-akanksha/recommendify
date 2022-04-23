import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetailsThunk } from "./redux/thunks";
import "./App.css";
import Main from "./components/Main/Main";
import OpeningPage from "./components/Opening/OpeningPage";
import { FormControlLabel, Switch } from "@mui/material";
import { toggleTheme } from "./redux/actions";

function App() {
  const [token, setToken] = React.useState("");
  const { darkMode } = useSelector((state) => state.user);
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

  const handleChange = () => dispatch(toggleTheme());

  return (
    <div className={`App ${darkMode && "App-Dark"}`}>
      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Dark Mode"
      />
      <main>
        {!token ? (
          <OpeningPage darkMode={darkMode} />
        ) : (
          <>
            <Main setToken={(e) => setToken(e)} darkMode={darkMode} />
          </>
        )}
      </main>
      <footer>
        <p>
          <i>
            Made by <b>Akanksha</b>. Powered by <b>Spotify API</b>
          </i>
        </p>
      </footer>
    </div>
  );
}

export default App;
