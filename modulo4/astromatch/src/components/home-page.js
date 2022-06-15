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
    <div className="Layout-container">
      <div className="Container-img-logo">
        <img src={Img} alt="Logo" />
      </div>
      {isLoading
        ? "Carregando..."
        : listaUsuarios.map((user) => {
            return (
              <div className="Container-tela-home">
                {user.name}, {user.age}
                <img height={280} src={user.photo} alt={user.name} />
                {user.bio}
                <div className="Container-buttom">
                  <button className="Button-x" onClick={botaoPassa}>
                    {" "}
                    X{" "}
                  </button>
                  <button
                    className="Button-match"
                    onClick={() => chooseProfile(user.id)}
                  >
                    {" "}
                    ♥️{" "}
                  </button>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default SeeUsers;
