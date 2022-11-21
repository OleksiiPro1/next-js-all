import { useState } from 'react';

export default function Delete(props) {
  return (
    <div style={{ textAlign: 'center', marginTop: '200px' }}>
      <ul style={{ listStyleType: 'none' }}>
        {props.fruits.map((fruit, index) => {
          return (
            <li key={fruit}>
              <span>{fruit}</span>{' '}
              <button onClick={() => props.deleteByIndex(index)}>
                I don`t want it!
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
