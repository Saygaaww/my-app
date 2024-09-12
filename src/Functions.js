// src/Functions.js
import React from 'react';

// Hàm để tạo số tăng dần
function createIncrementer() {
  let count = 0;
  return function() {
    return count++;
  };
}
const increment = createIncrementer();

// Hàm để phân tích các tham số truy vấn của URL
function parseQueryParams(url) {
  const params = new URLSearchParams(new URL(url).search);
  const result = {};
  for (const [key, value] of params) {
    result[key] = value;
  }
  return result;
}
const url = 'https://example.com?page=1&sort=asc&category=technology';

const Functions = () => (
  <div>
    <h2>Increment Function:</h2>
    <p>{increment()}</p>
    <p>{increment()}</p>

    <h2>Parsed Query Parameters:</h2>
    <pre>{JSON.stringify(parseQueryParams(url), null, 2)}</pre>
  </div>
);

export default Functions;