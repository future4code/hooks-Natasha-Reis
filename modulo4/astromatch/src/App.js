import { useEffect, useState } from "react";
import axios from "axios";
import SeeUsers from "./components/home-page";
import SeeMatches from "./components/page-matches";
import matchImg from "./img/match.png";

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
    <>
      {currentView === "see-users" ? (
        <>
          <img
            onClick={() => setCurrentView("see-match")}
            src={matchImg}
            alt="Logo"
          />
          <SeeUsers />
        </>
      ) : (
        <>
          <img
            onClick={() => setCurrentView("see-users")}
            src={matchImg}
            alt="Logo"
          />

          <SeeMatches />
        </>
      )}

      <button onClick={clearMatches}> Limpar swipes e matches </button>
    </>
  );
};

export default App;
