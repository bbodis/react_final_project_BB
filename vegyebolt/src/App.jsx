import { useState } from 'react'
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
        <NavBar />
        <Routes>
          <Route path="/" element={<ShopList Shops={ShopData}/>} />
          <Route path='form' element={<ShopForm sendDataToApp={handleShopData} />} />
        </Routes>
    </>
  )
}
export default App
