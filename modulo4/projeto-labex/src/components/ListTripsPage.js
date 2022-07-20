import { useNavigate } from "react-router-dom";
import { routesNames } from "../services/routes";

const ListTrips = () => {
  const navigate = useNavigate();

  const goRoute = (nomeDaRota) => {
    navigate(nomeDaRota);
  };

  return (
    <div className="layout-container">
      <p className="title">Lista de viagens</p>
      <div>
        <button onClick={() => goRoute(routesNames.applyTripForm)}>
          {" "}
          Inscrever-se
        </button>
      </div>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};

export default ListTrips;
