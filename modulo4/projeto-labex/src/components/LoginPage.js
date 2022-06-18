import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (element, changeState) => {
    changeState(element.currentTarget.value);
  };

  const goRoute = (nomeDaRota) => {
    navigate(nomeDaRota);
  };
  return (
    <div>
      <p>Login</p>
      <p>
        Nome:{" "}
        <input value={name} onChange={(e) => handleInputChange(e, setName)} />
      </p>
      <p>
        Senha:
        <input
          type="password"
          value={password}
          onChange={(e) => handleInputChange(e, setPassword)}
        />
      </p>

      <button onClick={() => goRoute("/admin/trips/list")}>
        {" "}
        Criar viagem
      </button>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};

export default LoginPage;
