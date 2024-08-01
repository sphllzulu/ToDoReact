
import './App.css'
import { useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'
import ToDoList from './ToDoList'
import { Route, Routes } from 'react-router-dom';
import SignIn from './Login';

function App() {
  const [auth, setAuth] = useState(false);
 

  return (

    <div className='App'>
      <Routes>

      {/* <Route path="/" element={auth ? <Navigate to="/home" /> : <SignIn setAuth={setAuth} />} />
        <Route path="/signup" element={auth ? <Navigate to="/" /> : <SignUp />} />
        <Route path="/home" element={auth ? <Home /> : <Navigate to="/signin" />} />
        <Route path="/" element={<Navigate to="/signin" />} /> */}
         <Route path='/home' element={<ToDoList/>} />
         <Route path='/' element={<SignIn/>} />
         <Route path='/signup' element={<SignUp/>} />
       </Routes>
      
    </div>
    
      

      
    
  )
}

export default App
