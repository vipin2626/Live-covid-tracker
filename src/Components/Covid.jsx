import React, { useEffect, useState } from "react";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");

    const actutalData = await res.json();
    console.log(actutalData.statewise);
    setData(actutalData.statewise);
  };
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main_heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold"> 🔴 INDIA </span> COVID-19
            DASHBOARD
          </h1>
        </div>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th> State </th>
                <th> Confirmed </th>
                <th> Recovered </th>
                <th> Deaths </th>
                <th> Active </th>
                <th> Updated </th>
              </tr>
            </thead>
            <tbody>
              {data.map((currElem, indx) => {
                return (
                  <tr key={indx}>
                    <th> {currElem.state} </th>
                    <td> {currElem.confirmed} </td>
                    <td> {currElem.recovered} </td>
                    <td> {currElem.deaths} </td>
                    <td> {currElem.active} </td>
                    <td> {currElem.lastupdatedtime} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Covid;
