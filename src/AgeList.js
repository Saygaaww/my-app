// src/AgeList.js
import React from 'react';

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Component để hiển thị các phép toán với ages
const AgeList = () => {
  const sortedAges = [...ages].sort((a, b) => b - a);
  const totalAge = ages.reduce((sum, age) => sum + age, 0);

  return (
    <div>
      <h2>Ages Sorted in Descending Order:</h2>
      <ul>
        {sortedAges.map((age, index) => (
          <li key={index}>{age}</li>
        ))}
      </ul>

      <h2>Total Sum of Ages:</h2>
      <p>{totalAge}</p>
    </div>
  );
};

export default AgeList;