import { useState } from 'react'
import { AuthProvider } from './context/loginContext';
import Login from './components/Login';
import ShopForm from './components/ShopForm'
import ShopList from './components/ShopList';
import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar';
import './App.css'
function App() {
  const [ShopData, setShopData] = useState([]);
  const handleShopData = (data) => {
    setShopData((prevData) => [...prevData, data]);
  };
  return (
    <>
        <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ShopList Shops={ShopData}/>} />
          <Route path='form' element={<ShopForm sendDataToApp={handleShopData} />} />
          <Route path='login' element={<Login/>} />
        </Routes>
        </AuthProvider>
    </>
  )
}
export default App
