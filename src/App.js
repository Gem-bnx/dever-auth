import './App.css';
import {useState} from 'react'
import {Route} from 'react-router'
import {Routes} from 'react-router-dom'
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import Users from './pages/Users';
import Detail from './pages/Detail';
function App() {
  const [info, setInfo] = useState({
    email: '',
    password: '',
    userName: '',
    name: '',
  })
  return (
    <>
      <Routes>
        <Route path="/" element={<Home info={info} setInfo={setInfo}/>} />
        <Route path="/register" element={<Register info={info} setInfo={setInfo}/>} />
        <Route path="/login" element={<Login info={info} setInfo={setInfo} />} />
        <Route path="/users" element={<Users info={info} setInfo={setInfo} />} />
        <Route path="/detail/:id" element={<Detail info={info} setInfo={setInfo}/>} />
      </Routes>
    </>
  );
}

export default App;
