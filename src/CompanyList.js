// src/CompanyList.js
import React from 'react';

// Danh sách công ty
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// Component để hiển thị công ty và các yêu cầu
const CompanyList = () => {
  const recentCompanies = companies.filter(company => company.start > 1987);
  const retailCompanies = companies.filter(company => company.category === 'Retail').map(company => ({
    ...company,
    start: company.start + 1
  })).map((company, index) => (
    <div key={index}>
      <p>Name: {company.name}</p>
      <p>Category: {company.category}</p>
      <p>Start: {company.start}</p>
      <p>End: {company.end}</p>
    </div>
  ));

  const sortedCompanies = [...companies].sort((a, b) => a.end - b.end);

  return (
    <div>
      <h2>Company Names:</h2>
      <ul>
        {companies.map((company, index) => (
          <li key={index}>{company.name}</li>
        ))}
      </ul>

      <h2>Companies Starting After 1987:</h2>
      <ul>
        {recentCompanies.map((company, index) => (
          <li key={index}>{company.name}</li>
        ))}
      </ul>

      <h2>Retail Companies with Updated Start Year:</h2>
      {retailCompanies}

      <h2>Companies Sorted by End Date:</h2>
      <ul>
        {sortedCompanies.map((company, index) => (
          <li key={index}>{company.name} (End: {company.end})</li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;