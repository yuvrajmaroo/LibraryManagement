import './App.css';
import axios from 'axios';
// import react from react
import { useEffect } from 'react';
import Login from './pages/login';
import Toolbar from './components/toolbar';

function App() {
  useEffect(()=>{
    add();
  })
  const add=()=>{
    let id= 101;
    let name="bookPush";
    axios.post("http://localhost:5000",{id:id,name:name,}).then(()=>{console.log("woah!")});
  };
  return (
    <div className="App">
      <Toolbar />
      <Login />
    </div>
  );
}

export default App;
