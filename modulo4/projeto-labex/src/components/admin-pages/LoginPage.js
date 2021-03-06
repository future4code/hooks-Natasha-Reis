import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routesNames } from "../../services/routes";
import { AXIOS_CONFIG, BASE_URL } from "../../services/constants";
import { getLoggedUserToken, setUserLooged } from "../../services/login";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (getLoggedUserToken()) goRoute(routesNames.adminListTrips);
  }, []);

  const handleInputChange = (element, changeState) => {
    changeState(element.currentTarget.value);
  };

  const goRoute = (nomeDaRota) => {
    navigate(nomeDaRota);
  };

  const doLogin = (event) => {
    event.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    axios
      .post(`${BASE_URL}/login`, body, AXIOS_CONFIG)
      .then((res) => {
        setUserLooged(res.data.token);
        goRoute(routesNames.adminListTrips);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="layout-container">
      <p className="title">Login</p>
      <form onSubmit={doLogin}>
        <p>
          Nome:{" "}
          <input
            value={email}
            type="email"
            name="email"
            required
            onChange={(e) => handleInputChange(e, setEmail)}
          />
        </p>
        <p>
          Senha:
          <input
            type="password"
            value={password}
            required
            pattern={"^.{3,}"}
            onChange={(e) => handleInputChange(e, setPassword)}
          />
        </p>
        <div>
          <button> Criar viagem</button>
          <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
