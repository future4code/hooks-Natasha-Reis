import { useNavigate } from "react-router-dom";
import { routesNames } from "../services/routes";

const ListTrips = () => {
  const navigate = useNavigate();

  const goRoute = (nomeDaRota) => {
    navigate(nomeDaRota);
  };

  return (
    <div>
      <p>Lista de viagens</p>
      <button onClick={() => goRoute(routesNames.applyTripForm)}>
        {" "}
        Inscrever-se
      </button>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};

export default ListTrips;
