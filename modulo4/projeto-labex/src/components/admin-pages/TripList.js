import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../services/constants";
import { generatePath } from "react-router";
import { getLoggedUserToken, logoutUser } from "../../services/login";
import { routesNames } from "../../services/routes";

const AdminTripList = () => {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!getLoggedUserToken()) navigate(routesNames.login);
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/trips`)
      .then((res) => {
        console.log(res);
        setTrips(res.data.trips);
      })
      .catch((err) => console.log(err));
  }, []);

  const goRoute = (nomeDaRota) => {
    navigate(nomeDaRota);
  };

  const doLogout = () => {
    logoutUser();
    goRoute(routesNames.login);
  };

  const goToTripDeetails = (id) => {
    const newRoute = generatePath(routesNames.adminTripDetails, { id: id });

    navigate(newRoute);
  };

  return (
    <div className="layout-container">
      <p className="title">Painel Administrativo</p>

      {trips.map((trip) => {
        return <div onClick={() => goToTripDeetails(trip.id)}>{trip.name}</div>;
      })}
      <div>
        <button onClick={() => navigate(-1)}>Voltar</button>
        <button onClick={() => goRoute(routesNames.adminCreateTrip)}>
          {" "}
          Criar
        </button>
        <button onClick={doLogout}> Logout</button>
      </div>
    </div>
  );
};

export default AdminTripList;
