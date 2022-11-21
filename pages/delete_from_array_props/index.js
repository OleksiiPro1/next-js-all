import { useState } from 'react';
import Delete from './Delete';

export default function DeleteFromArrayProps() {
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
  return <Delete fruits={fruits} deleteByIndex={deleteByIndex} />;
}
