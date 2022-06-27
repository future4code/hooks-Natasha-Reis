import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { routesNames } from "../../services/routes";
import { getLoggedUserToken } from "../../services/login";
import axios from "axios";
import { AXIOS_CONFIG, BASE_URL } from "../../services/constants";

const DetailsPageTrip = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trip, setTrip] = useState({});

  useEffect(() => {
    if (!getLoggedUserToken()) navigate(routesNames.login);
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/trip/${id}`, AXIOS_CONFIG)
      .then((res) => {
        setTrip(res.data.trip);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="layout-container">
      <p className="title">Detalhes viagem</p>

      <div>Nome: {trip.name}</div>
      <div>Planeta: {trip.planet}</div>
      <div>Duração: {trip.durationInDays}</div>
      <div>Descrição: {trip.description}</div>

      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};

export default DetailsPageTrip;
