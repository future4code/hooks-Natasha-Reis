import { useNavigate } from "react-router-dom";
import { routesNames } from "../services/routes";

const HomePage = () => {
  const navigate = useNavigate();

  const goRoute = (nomeDaRota) => {
    navigate(nomeDaRota);
  };

  return (
    <div className="layout-container">
      <p className="title">LabeX</p>
      <div className="container-button">
        <button onClick={() => goRoute(routesNames.tripList)}>
          {" "}
          Ver viagens
        </button>
        <button onClick={() => goRoute(routesNames.login)}>
          {" "}
          Área de admin
        </button>
      </div>
    </div>
  );
};

export default HomePage;
