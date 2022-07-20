import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AXIOS_CONFIG, BASE_URL } from "../services/constants";
import { routesNames } from "../services/routes";

const AplicationTrips = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [applicationText, setApplicationText] = useState("");
  const [profession, setProfession] = useState("");
  const [country, setCountry] = useState("");
  const [trip, setTrip] = useState("");
  const [availableTrips, setAvailableTrips] = useState([]);

  const handleInputChange = (element, changeState) => {
    changeState(element.currentTarget.value);
  };

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then((res) => {
        setAvailableTrips(res.data.trips);
      })
      .catch((err) => console.log(err));
  };

  const doApply = (event) => {
    event.preventDefault();

    const body = {
      name: name,
      age: age,
      applicationText: applicationText,
      profession: profession,
      country: country,
      trip: trip,
    };

    axios
      .post(`${BASE_URL}/trips`, body, AXIOS_CONFIG)
      .then((res) => {
        navigate(routesNames.tripList);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="layout-container">
      <p className="title">Inscreva-se</p>
      <form onSubmit={doApply}>
        <p>
          Nome:{" "}
          <input
            value={name}
            name="name"
            required
            onChange={(e) => handleInputChange(e, setName)}
          />
        </p>
        <p>
          Idade:
          <input
            type="number"
            value={age}
            required
            onChange={(e) => handleInputChange(e, setAge)}
          />
        </p>
        <p>
          Porque sou um bom candidato(a):
          <input
            value={applicationText}
            required
            onChange={(e) => handleInputChange(e, setApplicationText)}
          />
        </p>
        <p>
          Profissão:
          <input
            value={profession}
            required
            onChange={(e) => handleInputChange(e, setProfession)}
          />
        </p>
        <p>
          País:
          <input
            value={country}
            required
            onChange={(e) => handleInputChange(e, setCountry)}
          />
        </p>
        <p>
          Viagem:
          <select
            value={trip}
            required
            onChange={(e) => handleInputChange(e, setTrip)}
            placeholder="Planeta"
            name="planet"
          >
            <option value="" disabled="" selected="">
              Escolha uma viagem
            </option>

            {availableTrips.map((avTrip) => {
              return <option value={avTrip.id}>{avTrip.name}</option>;
            })}
          </select>
        </p>
        <div>
          <button> Criar viagem</button>{" "}
          <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
      </form>
    </div>
  );
};

export default AplicationTrips;
