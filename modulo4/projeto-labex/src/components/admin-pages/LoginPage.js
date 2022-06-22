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

  const doLogin = () => {
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
    <div>
      <p>Login</p>
      <p>
        Nome:{" "}
        <input
          value={email}
          type="email"
          name="email"
          onChange={(e) => handleInputChange(e, setEmail)}
        />
      </p>
      <p>
        Senha:
        <input
          type="password"
          value={password}
          onChange={(e) => handleInputChange(e, setPassword)}
        />
      </p>

      <button onClick={doLogin}> Criar viagem</button>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};

export default LoginPage;
