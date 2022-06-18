import { useNavigate } from "react-router-dom";

const AdminTripList = () => {
  const navigate = useNavigate();

  const goRoute = (nomeDaRota) => {
    navigate(nomeDaRota);
  };

  return (
    <>
      <p>Painel Administrativo</p>

      <button onClick={() => navigate(-1)}>Voltar</button>
      <button onClick={() => goRoute("/admin/trips/create")}> Criar</button>
      <button onClick={() => goRoute("/login")}> Logout</button>
    </>
  );
};

export default AdminTripList;
