import { useNavigate } from "react-router-dom";

const ListTripsCreate = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>Criar viagem</p>;
      <input />
      <input />
      <input />
      <input />
      <p>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </p>
    </div>
  );
};

export default ListTripsCreate;
