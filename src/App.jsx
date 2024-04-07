import { Route, Routes, Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Shop from "./pages/shop/shop.jsx"
import Cart from "./pages/cart/cart.jsx";
import { ShopContextProvider } from "./context/shop-context.jsx";
function App(){
  return <div className="App">

    <ShopContextProvider>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </ShopContextProvider>
    
    
  </div>
}

export default App;