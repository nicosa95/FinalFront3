import Card from "./components/Card.jsx";
import { useState } from "react";
import Form from "./components/Form.jsx";

function App() {
  const [name, setName] = useState("");
  const [game, setGame] = useState("");
  const [displayCard, setDisplayCard] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    const { name, game } = data;
    if (game) {
      setDisplayCard(true);
      setName(name);
      setGame(game);
    }
  };

  return (
    <>
    <Form
      name={name}
      setName={setName}
      game={game}
      setGame={setGame}
      onSubmit={onSubmit}
    />
    {displayCard && <Card name={name} game={game} />}
  </>
);
}

export default App
