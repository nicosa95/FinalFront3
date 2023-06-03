

// eslint-disable-next-line react/prop-types
const Card = ({ name, game }) => {
  return (
    <div>
      <h2>Hola {name}!</h2>
      <p>Tremendo juegaso!! aguante el: {game}</p>
    </div>
  );
};

export default Card;
