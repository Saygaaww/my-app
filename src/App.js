import React from "react";
import "./App.css";
import Part1 from "./Part1.js";
import Part2 from "./Part2.js";
import Part4 from "./Part4.js";
import Part3 from "./Part3.js";
import {
  findFirstTeenager,
  findAllTeenagers,
  allAreTeenagers,
  anyAreTeenagers,
} from "./PeopleUtils";
import { sum, product } from "./arrayOperations";
import CompanyList from './CompanyList';
import AgeList from './AgeList';
import PersonInfo from './PersonInfo';
import Functions from './Functions';



function App() {
  // Gọi các hàm và lưu kết quả
  const firstTeenager = findFirstTeenager();
  const allTeenagers = findAllTeenagers();
  const allTeenagersCheck = allAreTeenagers();
  const anyTeenagerCheck = anyAreTeenagers();

  return (
    <div className="App">
    <Part2 />
    <Part1 /> 
    <Part3 /> 
    <Part4 /> 
    <div className="left-align">
        <div>
          <h2>First Teenager:</h2>
          {firstTeenager ? (
            <p>
              {firstTeenager.name}, Age: {firstTeenager.age}
            </p>
          ) : (
            <p>No teenager found.</p>
          )}
        </div>
        <div>
          <h2>All Teenagers:</h2>
          {allTeenagers.length > 0 ? (
            <ul>
              {allTeenagers.map((person, index) => (
                <li key={index}>
                  {person.name}, Age: {person.age}
                </li>
              ))}
            </ul>
          ) : (
            <p>No teenagers found.</p>
          )}
        </div>
        <div>
          <h2>Are All Teenagers?</h2>
          <p>{allTeenagersCheck ? "Yes" : "No"}</p>
        </div>
        <div>
          <h2>Is Any Teenager?</h2>
          <p>{anyTeenagerCheck ? "Yes" : "No"}</p>
        </div>
        <h1>Array Operations</h1>
        <div>
          <h2>Sum of Array Elements:</h2>
          <p>{sum}</p>
        </div>
        <div>
          <h2>Product of Array Elements:</h2>
          <p>{product}</p>
        </div>
        <CompanyList />
        <AgeList />
        <PersonInfo />
        <Functions />
      </div>


    </div>
  );
}
  export default App;
