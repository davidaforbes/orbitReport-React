import satData from "./satData";

const Buttons = ({ filterByType, setSat, orbitTypes}) => {
  {orbitTypes.map((type, index) => {
    return (
      <button onClick={() => filterByType(type)} key={index}>
        {type} Orbit
      </button>
    );
  })}
    return (
      <button onClick={() => setSat(satData)}>
        All Orbits
      </button>
    )
};
   

export default Buttons;