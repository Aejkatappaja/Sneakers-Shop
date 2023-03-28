import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping, faSortDown } from "@fortawesome/free-solid-svg-icons";
library.add(faCartShopping, faSortDown);

import { productInfo } from "./data/Product";

import Header from "./components/Header";
import Home from "./pages/Home";
import Modale from "./components/Modale";

export type cartItem = {
  product: string;
  image: string;
  price: number;
  quantity: number;
};

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [img, setImg] = useState(productInfo.mainPicture);
  const [pictureModal, setPictureModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [cart, setCart] = useState<cartItem[]>([]);

  return (
    <Router>
      <Header
        cart={cart}
        cartModal={cartModal}
        setCartModal={setCartModal}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              img={img}
              setImg={setImg}
              cart={cart}
              setCart={setCart}
              pictureModal={pictureModal}
              setPictureModal={setPictureModal}
            />
          }
        />
      </Routes>
      <Modale
        data={productInfo}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        img={img}
        setImg={setImg}
        pictureModal={pictureModal}
        setPictureModal={setPictureModal}
        cartModal={cartModal}
        setCartModal={setCartModal}
        cart={cart}
      />
    </Router>
  );
};

export default App;
