import { useNavigate } from "react-router-dom";

const AplicationTrips = () => {
  const navigate = useNavigate();

  return (
    <>
      <p>Inscreva-se</p>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </>
  );
};

export default AplicationTrips;
