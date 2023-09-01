import { useState } from 'react';
import './App.css'
import { findEmployee } from './data';

function App() {

  // WRONG FORM
  /*
  let employeeId = 1;
  let employee = findEmployee(employeeId);
  */

  // USING useState

  let [employeeId, setEmployeeId] = useState(1);
  const [employee, setEmployee] = useState(findEmployee(employeeId));

  function changeEmployeeId() {
    setEmployeeId(employeeId++);
    setEmployee(findEmployee(employeeId));
    console.log("conde pass on changeEmployeeId");
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="employee-card">
        <h2>name: {employee?.name}</h2>
        <p>age: {employee?.age}</p>
        <button onClick={changeEmployeeId}>Change Employee</button>
      </div>
    </>
  )
}

export default App
