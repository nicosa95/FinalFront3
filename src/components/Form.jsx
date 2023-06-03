
import { useState } from "react";


// eslint-disable-next-line react/prop-types
const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [game, setGame] = useState("");
  const [validName, setValidName] = useState(true);
  const [validGame, setValidGame] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validName && validGame) {
      onSubmit({ name, game });
    }
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setValidName(newName.trim().length >= 3 && !newName.includes(" "));
  };


 const handleGameChange = (e) => {
    const newGame = e.target.value;
    setGame(newGame);
    setValidGame(newGame.trim().length >= 6);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            id="name"
            type="text"
            value={name}
            placeholder="Ingresa tu nombre"
            onChange={handleNameChange}
          />
          {!validName && (
            <p>
              Nombre inválido. Longitud mínima: 3 caracteres. No se permiten
              espacios en blanco.
            </p>
          )}
        </div>
        <div>
          <label htmlFor="game">Juego Favorito:</label>
          <input
            id="game"
            type="text"
            value={game}
            placeholder="Ingresa tu juego favorito (pc, ps o de mesa también es válido!)"
            onChange={handleGameChange}
          />
          {!validGame && (
            <p>
              QUE JUEGO ES ESE?? No lo juna ni tu mama, ponele al menos 6 letras
            </p>
          )}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
