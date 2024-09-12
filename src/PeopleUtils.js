// src/PeopleUtils.js

const people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Ann', age: 19}, 
    {name: 'Elisabeth', age: 16}
  ];
  
  export const findFirstTeenager = () => {
    return people.find(person => person.age >= 10 && person.age <= 20);
  };
  
  export const findAllTeenagers = () => {
    return people.filter(person => person.age >= 10 && person.age <= 20);
  };
  
  export const allAreTeenagers = () => {
    return people.every(person => person.age >= 10 && person.age <= 20);
  };
  
  export const anyAreTeenagers = () => {
    return people.some(person => person.age >= 10 && person.age <= 20);
  };
  