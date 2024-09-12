// src/PersonInfo.js
import React from 'react';

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};

// Component để hiển thị thông tin từ đối tượng person
const PersonInfo = () => {
  const { address: { street } } = person;
  return (
    <div>
      <h2>Person Info:</h2>
      <p>Name: {person.name}</p>
      <p>Street: {street}</p>
    </div>
  );
};

export default PersonInfo;