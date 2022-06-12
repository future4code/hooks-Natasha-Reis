import { useState } from "react";
import axios from "axios";
import SeeUsers from "./components/home-page";
import SeeMatches from "./components/page-matches";
import matchImg from "./img/match.png";
import voltarImg from "./img/voltar.png";
import "../src/App.css";

const App = () => {
  const [currentView, setCurrentView] = useState("see-users");

  const clearMatches = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natasha-reis-hooks/clear"
      )
      .then((res) => {
        window.location.reload();
      });
  };

  return (
    <div className="container">
      {currentView === "see-users" ? (
        <>
          <img
            onClick={() => setCurrentView("see-match")}
            src={matchImg}
            className="img-match"
            alt="Logo"
          />
          <SeeUsers />
        </>
      ) : (
        <>
          <img
            onClick={() => setCurrentView("see-users")}
            src={voltarImg}
            className="img-match"
            alt="Logo"
          />

          <SeeMatches />
        </>
      )}

      <div className="button-clear">
        <button onClick={clearMatches}> Limpar swipes e matches </button>
      </div>
    </div>
  );
};

export default App;
