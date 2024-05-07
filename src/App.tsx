import './App.css';
import data from '../data.json';
import img from './assets/sword.png';
import { useState } from 'react';

function App() {
  const cardData = data;
  const [cardRarity, setCardRarity] = useState("Normal");

  const rarityColors: {
    [key: string]: string;
  } = {
    "Normal": "bg-gray-700",
    "Bon": "bg-green-700",
    "Excellent": "bg-blue-900"
  };

  const getRandomRarity = () => {
    const rarities = Object.keys(rarityColors);
    const randomRarity = rarities[Math.floor(Math.random() * rarities.length)];
    setCardRarity(randomRarity);
    return randomRarity;
  };

  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <div className={`${rarityColors[cardRarity]} rounded-md h-80 w-52 flex flex-col px-2`}>
          <p className="text-white font-bold">{cardData.nameIMG}</p>
          <div>
            <img src={img} alt="pixel art sword" className="h-36 w-full object-cover" />
            <p className="text-white font-bold">{cardRarity}</p>
          </div>
          <ul className="list-none text-white text-sm">
            <li>ATQ: {cardData.attributes.ATQ}</li>
            <li>DEF: {cardData.attributes.DEF}</li>
            <li>VIT: {cardData.attributes.VIT}</li>
          </ul>
          <p className="text-white text-sm">{cardData.description}</p>
        </div>
      </div>
      <div className='flex justify-center mt-8'>
        <button className="bg-blue-600 text-white rounded-md px-4 py-2" onClick={getRandomRarity}>Random</button>
      </div>
    </>
  );
}

export default App;
