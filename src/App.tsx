import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCartShopping,
  faSortDown,
  faTrashCan,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
library.add(faCartShopping, faSortDown, faTrashCan, faCreditCard);

import { productInfo } from "./data/Product";

import Header from "./components/Header";
import Home from "./pages/Home";
import Modale from "./components/Modale";
import Footer from "./components/Footer";

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
  const [size, setSize] = useState(false);

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
              size={size}
              setSize={setSize}
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
        setCart={setCart}
        size={size}
        setSize={setSize}
      />
      <Footer />
    </Router>
  );
};

export default App;
