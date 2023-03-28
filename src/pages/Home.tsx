import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { productInfo } from "../data/Product";
import { useState } from "react";
import { cartItem } from "../App";
import DisplayImg from "../components/DisplayImg";

interface HomeProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  pictureModal: boolean;
  setPictureModal: (pictureModal: boolean) => void;
  img: string;
  setImg: (imgUrl: string) => void;
  cart: cartItem[];
  setCart: (ex: cartItem[]) => void;
}

const Home = ({
  isVisible,
  setIsVisible,
  img,
  setImg,
  cart,
  setCart,
  pictureModal,
  setPictureModal,
}: HomeProps) => {
  const [isHide, setIsHide] = useState(true);
  const [size, setSize] = useState(false);

  const handleAddToCart = (productName: string) => {
    const index = cart.findIndex((item) => item.product === productName);
    const qty = cart[0]?.quantity;
    if (index >= 0) {
      if (productInfo.quantity > qty) {
        const updatedCart = [...cart];
        updatedCart[index].quantity += 1;
        setCart(updatedCart);
      } else alert("No more stock");
    } else {
      const newItem: cartItem = {
        product: productInfo.name,
        image: productInfo.mainPicture,
        price: productInfo.price,
        quantity: 1,
      };
      setCart([...cart, newItem]);
    }
  };

  const handleRemoveFromCart = (productName: string) => {
    const existingProduct = cart.find((item) => item.product === productName);
    if (existingProduct) {
      const updatedCart = cart
        .map((item) => {
          if (item.product === productName) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        })
        .filter((item) => item.quantity > 0);
      setCart(updatedCart);
    }
  };

  return (
    <main className="main-content">
      <section className="product-left-side">
        <DisplayImg
          data={productInfo}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          img={img}
          setImg={setImg}
          pictureModal={pictureModal}
          setPictureModal={setPictureModal}
        />
      </section>

      <section className="product-right-side">
        <div className="right-content">
          <div className="top-title">
            <h2>{productInfo.brand}</h2>
            <h1>{productInfo.name}</h1>
          </div>

          <p>{productInfo.description}</p>
          <div className="top-title">
            <h3 className="outlet">
              {productInfo.price} € <div>{productInfo.discount} %</div>
            </h3>
            <span>{productInfo.originalPrice} €</span>
          </div>
          <div className="drop-down">
            <div
              className="drop-holder"
              onClick={() => {
                !size ? setIsHide(!isHide) : null;
              }}
            >
              {!size ? (
                <>
                  size <FontAwesomeIcon icon="sort-down" />
                </>
              ) : (
                productInfo.size
              )}
            </div>
            <div
              className={isHide ? "hide" : "drop-content"}
              onClick={() => setIsHide(true)}
            >
              <div className="sizes">
                <div onClick={() => setSize(true)}>{productInfo.size}</div>
                <span>44</span>
              </div>
            </div>
          </div>
          <div className="buttons">
            {cart.length < 1 ? (
              <div
                className="add-to-cart-button"
                onClick={() => handleAddToCart(productInfo.name)}
              >
                <FontAwesomeIcon icon="cart-shopping" />
                <p> Add to cart</p>
              </div>
            ) : (
              <div className="buttons-display">
                <div
                  className="button-cart"
                  onClick={() => handleRemoveFromCart(productInfo.name)}
                >
                  -
                </div>
                <p>{cart[0].quantity}</p>
                <div
                  className="button-cart"
                  onClick={() => handleAddToCart(productInfo.name)}
                >
                  +
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
