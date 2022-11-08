import './App.css';
import React, { useEffect, useState } from 'react'

function App() {

  const URL = "http://localhost:53688/api/Admin";
  const [users, setUser] = useState([])

  useEffect(() => {
    getList()
  },[])
  console.warn(users)

  function getList() {
    fetch(URL).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
      })
    })
  }

  function deleteUser(adminId) {
    fetch(URL + `/${adminId}`, {
      method: 'DELETE',
    }).then.json().then((resp) => {
      console.warn(resp);
      getList();
    })
  }

  return (
    <div className="App">
      <h1>React World !!!</h1>
      <h2>Get API Method</h2>
      <br />
      <table border="5px">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Pass</th>
            <th>Operation</th>
          </tr>
          {
            users.map((item, i) =>
              <tr key={i}>
                <td>{item.adminId}</td>
                <td>{item.adminUsername}</td>
                <td>{item.adminPass}</td>
                <td><button onClick={() => deleteUser(item.adminId)}>Delete</button></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}
export default App;