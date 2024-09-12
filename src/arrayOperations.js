// src/arrayOperations.js

// Mảng dữ liệu
const array = [1, 2, 3, 4];

// Tính tổng của các phần tử trong mảng
export const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Tính tích của các phần tử trong mảng
export const product = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);