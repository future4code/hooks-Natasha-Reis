import { useNavigate } from "react-router-dom";

const DetailsPageTrip = () => {
  const navigate = useNavigate();

  return (
    <>
      <p>Detalhes viagem</p>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </>
  );
};

export default DetailsPageTrip;
