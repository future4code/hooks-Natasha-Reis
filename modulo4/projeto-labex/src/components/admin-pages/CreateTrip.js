import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routesNames } from "../../services/routes";
import { getLoggedUserToken } from "../../services/login";

const ListTripsCreate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getLoggedUserToken()) navigate(routesNames.login);
  }, []);

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
