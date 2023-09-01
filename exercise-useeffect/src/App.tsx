import './App.css'
import { findEmployee } from './data';

function App() {

  // WRONG FORM

  let employeeId = 1;
  let employee = findEmployee(employeeId);

  function changeEmployeeId() {
    employeeId++;
    employee = findEmployee(employeeId);
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
