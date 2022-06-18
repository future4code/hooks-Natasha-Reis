import { useNavigate } from "react-router-dom";

const ListTrips = () => {
  const navigate = useNavigate();

  const goRoute = (nomeDaRota) => {
    navigate(nomeDaRota);
  };
  return (
    <div>
      <p>Lista de viagens</p>
      <button onClick={() => goRoute("/trips/application")}>
        {" "}
        Inscrever-se
      </button>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};

export default ListTrips;
