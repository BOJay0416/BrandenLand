import logo from './logo.svg';
import React, { useState, useEffect }  from 'react';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
  
    // 當組件加載時獲取所有使用者
    useEffect(() => {
      fetch('/api/name')
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
          setLoading(false);
        });
  
    }, []);

    console.log(users);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={{color:"gold"}}>{"You did a good job!!"}</h1>
        <h1 style={{color:"red"}}>{users[0].name}</h1>
        <h1 style={{color:"blue"}}>{"You did a good job!!"}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
