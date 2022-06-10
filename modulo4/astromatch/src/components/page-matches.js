import { useEffect, useState } from "react";
import axios from "axios";
import Img from "../img/logo.png";

const SeeMatches = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    setIsLoading(true);
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natasha-reis-hooks/matches"
      )

      .then((res) => {
        console.log(res);
        setListaUsuarios(res.data.matches);
      })

      .catch((err) => {
        console.log("erro ao aparecer na tela");
      })
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
                  maxWidth: "100px",
                }}
              >
                {user.name}, {user.age}
                <img height={100} src={user.photo} alt={user.name} />
                {user.bio}
              </div>
            );
          })}
    </div>
  );
};

export default SeeMatches;
