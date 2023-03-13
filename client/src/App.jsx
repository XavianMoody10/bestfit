import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Shop } from "./pages/Shop/Shop";
import { Product } from "./pages/Product/Product";
import { Cart } from "./pages/Cart/Cart";
import { Error } from "./pages/Error/Error";
import { MobileHeader } from "./components/Headers/MobileHeader/MobileHeader";
import { SearchHeader } from "./components/Headers/SearchHeader/SearchHeader";
import { DefaultHeader } from "./components/Headers/DefaultHeader/DefaultHeader";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <MobileHeader open={open} handler={setOpen}></MobileHeader>
      <SearchHeader open={open} handler={setOpen}></SearchHeader>
      <DefaultHeader handler={setOpen}></DefaultHeader>

      <Outlet />

      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path="shop" element={<Shop></Shop>}></Route>
        <Route path="shop/:productID" element={<Product></Product>}></Route>
        <Route path="cart" element={<Cart></Cart>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
