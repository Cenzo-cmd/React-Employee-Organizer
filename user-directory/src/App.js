import React, { useEffect, useState } from "react";
import './App.css';
import API from "./Utils/API"
import Card from "./components/Card";
import Navbar from "./components/Navbar";

// import Wrapper from "./components/Wrapper";


function App() {

  const [employeeData, setEmployeeData] = useState([]);
  const [employeeArr, setEmployeeArr] = useState([]);

  useEffect(() => {
    API.getEmployees().then(response => {
      setEmployeeData(response.data.results);
      setEmployeeArr(response.data.results);
    })
  }, []);

  function sortedUsers() {
    const sorted = employeeData.sort((a, b) =>
      a.name.first.localeCompare(b.name.first)
    )
    setEmployeeData([...sorted]);
  }

  function reverseSorted() {
    const reverseSort = employeeData.sort((a, b) =>
      a.name.last.localeCompare(b.name.last)
    )
    setEmployeeData([...reverseSort]);
  }

  function filterUsers(e) {
    const filterByFirst = employeeArr.filter((a) => a.name.first.toLowerCase().includes(e.target.value.toLowerCase()));
    setEmployeeData(filterByFirst);
  }

  function filterUsersLast(e) {
    const filteredByLast = employeeArr.filter((a) => a.name.last.toLowerCase().includes(e.target.value.toLowerCase()));
    setEmployeeData(filteredByLast);
  }

  function search20() {
    API.getEmployees(20).then(response => {
      setEmployeeData(response.data.results);
      setEmployeeArr(response.data.results);
    })
  }

  function search50() {
    API.getEmployees(50).then(response => {
      setEmployeeData(response.data.results);
      setEmployeeArr(response.data.results);
    })
  }

  function search100() {
    API.getEmployees(100).then(response => {
      setEmployeeData(response.data.results);
      setEmployeeArr(response.data.results);
    })
  }

  return (
    <div>
      <Navbar />
      <br />
      <div className="buttons">
        <button className="button" onClick={sortedUsers}>Sort first name A-Z</button>
        <button className="button" onClick={reverseSorted}>Sort last name A-Z</button>
        <input className="button" type="text" placeholder="Search user by first name" onChange={filterUsers} />
        <input className="button" type="text" placeholder="Search user by last name" onChange={filterUsersLast} />
      </div>
      <div>
        {employeeData.map(info =>
          <Card employee={info} key={info.id.value} />
        )}
      </div>

      <div className="clearfix">
        <button className="button" onClick={search20}>Search for 20 Employees</button>
        <button className="button" onClick={search50}>Search for 50 Employees</button>
        <button className="button" onClick={search100}>Search for 100 Employees</button>
      </div>
    </div>
  );
}

export default App;
