import { useState } from "react";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";

const App = () => {
  const [diceNumber, setDiceNumber] = useState(4);
  const [diceNumber2, setDiceNumber2] = useState(6);

  const diceImages = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
    6: img6,
  };

  const RefreshDice = () => {
    const randomNbr = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNbr);
  };

  const RefreshDice2 = () =>{
    const randomNbr2 = Math.floor(Math.random()*6) + 1;
    setDiceNumber2(randomNbr2);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img
        className="h-16 w-16"
        src={diceImages[diceNumber]}
        alt={`dice${diceNumber}`}
      />
      <button
        className="m-2 p-2 bg-gray-500 text-white rounded"
        onClick={RefreshDice}
      >
        Roll
      </button>

      <div className="flex flex-col">
        <img
          className="h-16 w-16"
          src={diceImages[diceNumber2]}
          alt={`dice${diceNumber2}`}
        />

        <button className="m-2 p-2 bg-gray-500 text-white rounded"
        onClick={RefreshDice2}>Roll2</button>
      </div>
    </div>
  );
};

export default App;
