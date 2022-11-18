import { useState } from 'react';

export default function DeleteFromArray() {
  const [fruits, setFruits] = useState([
    'Hemp Pesto',
    'Sweet Arugula',
    'Spicy Eggplant',
    'Buffalo Cauliflower',
    'Meat Lovers',
    '🍊 Orange',
    'Hawaiian Ginger',
    '🍇 Grapes',
    'Grilled Artichoke & Spinach',
    'Oyster Mushrooms & Truffle',
    '🍌 Banana',
    'Summer Harvest "Honey" Mustard',
    'Mango Chipotle "Chicken"',
    'BBQ MEATBALL',
    'Citrus Zoodles Sour Cream',
    'Customer cannot pay on the website',
    'Broken dish',
    'Customer not satisfied',
  ]);
  const deleteByIndex = (index) => {
    setFruits((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '200px' }}>
      <ul style={{ listStyleType: 'none' }}>
        {fruits.map((fruit, index) => {
          return (
            <li key={fruit}>
              <span>{fruit}</span>{' '}
              <button onClick={() => deleteByIndex(index)}>
                I don`t want it!
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
