import { useEffect, useState } from "react";
import axios from "axios";
import Img from "../img/logo.png";

const SeeUsers = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    setIsLoading(true);
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natasha-reis-hooks/person"
      )

      .then((res) => {
        setListaUsuarios([res.data.profile]);
      })

      .catch((err) => {
        console.log("erro ao aparecer na tela");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const botaoPassa = () => {
    getProfile();
  };

  const chooseProfile = (id) => {
    setIsLoading(true);

    const body = {
      id: id,
      choice: true,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natasha-reis-hooks/choose-person",
        body
      )
      .then((res) => {
        getProfile();
      })
      .catch((err) => console.log(""))

      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <img src={Img} alt="Logo" />
      {isLoading
        ? "carregando"
        : listaUsuarios.map((user) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "400px",
                }}
              >
                {user.name}, {user.age}
                <img height={400} src={user.photo} alt={user.name} />
                {user.bio}
                <button onClick={botaoPassa}> X </button>
                <button onClick={() => chooseProfile(user.id)}> ♥️ </button>
              </div>
            );
          })}
    </div>
  );
};

export default SeeUsers;
