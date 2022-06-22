import { useNavigate } from "react-router-dom";
import { routesNames } from "../services/routes";

const HomePage = () => {
  const navigate = useNavigate();

  const goRoute = (nomeDaRota) => {
    navigate(nomeDaRota);
  };

  return (
    <div>
      <p>LabeX</p>
      <button onClick={() => goRoute(routesNames.tripList)}>
        {" "}
        Ver viagens
      </button>
      <button onClick={() => goRoute(routesNames.login)}> Área de admin</button>
    </div>
  );
};

export default HomePage;
