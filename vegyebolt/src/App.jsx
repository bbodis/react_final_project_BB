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
      getShopData();
    };
  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ShopList Shops={ShopData} deleteShop={deleteShop} />} />
          <Route path='form' element={<ProtectedRoute><ShopForm sendDataToApp={handleShopData} /></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    </>
  )
}
export default App
