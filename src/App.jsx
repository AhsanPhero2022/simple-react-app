
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { useContext } from 'react'
import { AuthContext } from './provider/AuthProvider'

function App() {
  
const {user} = useContext(AuthContext)
  return (
    <>
   {
    user ?  <Header></Header> : ""
   }
   <Outlet></Outlet>
    </>
  )
}

export default App
