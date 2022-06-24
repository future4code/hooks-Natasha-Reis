import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routesNames } from "../../services/routes";
import { getLoggedUserToken } from "../../services/login";
import axios from "axios";
import { AXIOS_CONFIG, BASE_URL } from "../../services/constants";

const ListTripsCreate = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [durationInDays, SetdurationInDays] = useState("");

  useEffect(() => {
    if (!getLoggedUserToken()) navigate(routesNames.login);
  }, []);

  const handleInputChange = (element, changeState) => {
    changeState(element.currentTarget.value);
  };

  const createTrip = (event) => {
    event.preventDefault();

    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: durationInDays,
    };

    axios
      .post(`${BASE_URL}/trips`, body, AXIOS_CONFIG)
      .then((res) => {
        navigate(routesNames.adminListTrips);
      })
      .catch((err) => console.log(err));
  };

  const getTodayDate = () => {
    const dateObj = new Date();

    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    return `${year}-${month < 10 ? 0 : ""}${month}-${day < 10 ? 0 : ""}${day}`;
  };

  return (
    <div>
      <p>Criar viagem</p>
      <form onSubmit={createTrip}>
        <p>
          Nome:{" "}
          <input
            value={name}
            required
            pattern={"^.{5,}"}
            onChange={(e) => handleInputChange(e, setName)}
          />
        </p>
        <p>
          Planeta:{" "}
          <select
            value={planet}
            required
            onChange={(e) => handleInputChange(e, setPlanet)}
            placeholder="Planeta"
            name="planet"
          >
            <option value="" disabled="" selected="">
              Escolha um Planeta
            </option>
            <option value="Mercúrio">Mercúrio</option>
            <option value="Vênus">Vênus</option>
            <option value="Terra">Terra</option>
            <option value="Marte">Marte</option>
            <option value="Jupiter">Jupiter</option>
            <option value="Saturno">Saturno</option>
            <option value="Urano">Urano</option>
            <option value="Netuno">Netuno</option>
            <option value="Plutão">Plutão</option>
          </select>
        </p>
        <p>
          Data:{" "}
          <input
            type="date"
            value={date}
            min={getTodayDate()}
            required
            onChange={(e) => handleInputChange(e, setDate)}
          />
        </p>
        <p>
          Descrição:{" "}
          <input
            value={description}
            required
            minLength={30}
            onChange={(e) => handleInputChange(e, setDescription)}
          />
        </p>
        <p>
          Duração em dias:{" "}
          <input
            type="number"
            value={durationInDays}
            required
            min="50"
            onChange={(e) => handleInputChange(e, SetdurationInDays)}
          />
        </p>
        <button value="Check">Criar</button>
      </form>
      <p>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </p>
    </div>
  );
};

export default ListTripsCreate;
