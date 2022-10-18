import './App.css';
import { useState } from 'react';
import Homepage from './componets/Homepage';
import Login from './componets/Login';
import Register from './componets/Register';
import { BrowserRouter,Route, Routes } from "react-router-dom";

function App() {

  const [User, setLoginUser] = useState({
    _id:""
    // name:"",
    // email:""
  })
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' 
          element={
          User && User._id ? <Homepage User={User} setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>
          } ></Route>
          <Route path='/login' element= {<Login setLoginUser={setLoginUser}/>} ></Route>
          <Route path='/register' element={<Register />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
