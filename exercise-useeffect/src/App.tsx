import { useEffect, useState } from 'react';
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
  // senão definir nada o objeto é montando como undefined
  const [employee, setEmployee] = useState<any>();

  useEffect(() => {
    setEmployee(findEmployee(employeeId));
  }, [employeeId]);

  function changeEmployeeId() {
    console.log("conde pass on changeEmployeeId");
    if (employeeId <3) {
      employeeId++;
      setEmployeeId(employeeId);
      // use Effect vai observar essa mudança no id vai buscar o employee de acordo com o id incrementado.  
      // para isso tem que colocar o employeeId na lista de dependências do useEffect
    } 
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
