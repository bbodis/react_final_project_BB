import { useState } from 'react'
import { AuthProvider } from './context/loginContext';
import ProtectedRoute from './components/Protected';
import Details from './components/Details';
import Login from './components/Login';
import ShopForm from './components/ShopForm'
import ShopList from './components/ShopList';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar';
import './App.css'
function App() {
  const [ShopData, setShopData] = useState([]);
  const handleShopData = (data) => {
    setShopData((prevData) => [...prevData, data]);
    getShopData();
  };
  const getShopData = async () => {
      try {
        const response = await fetch('http://localhost:3000/products', {});
        if (response.ok) {
          const data = await response.json();
          setShopData(data);
        } else {
          console.error('Hiba az adatok lekérésekor');
        }
      } catch (error) {
        console.error('Hiba:', error);
      }
    };
    useEffect(() => {
      getShopData();
    }, []);
    const deleteShop = (id) => {
      getShopData();
    }
  return (
    <>
        <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ShopList Shops={ShopData} deleteShop={deleteShop}/>} />
          <Route path='form' element={<ProtectedRoute><ShopForm sendDataToApp={handleShopData} /></ProtectedRoute>} />
          <Route path='login' element={<Login/>} />
          <Route path='/details/:id' element={<Details shops={ShopData}/>} />
        </Routes>
        </AuthProvider>
    </>
  )
}
export default App
