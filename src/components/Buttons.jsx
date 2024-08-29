import satData from "./satData";
import './styling.css'

const Buttons = ({ filterByType, setSat, orbitTypes }) => {
  return (
    <div>
      {orbitTypes.map((type, index) => (
        <button
          key={index}
          onClick={() => filterByType(type)}
          style={{ display: 'inline-block'}}
        >
          {type} Orbit
        </button>
      ))}
      <button onClick={() => setSat(satData)}>
        All Orbits
      </button>
    </div>
  );
};
   

export default Buttons;