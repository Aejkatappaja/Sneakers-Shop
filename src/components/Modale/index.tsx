import "./modale.css";
import DisplayImg from "../DisplayImg";
import { cartItem } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ImageData {
  name: string;
  price: number;
  size: number;
  quantity: number;
  mainPicture: string;
  miniaturePictures: string[];
}
interface Datas {
  data: ImageData;
  cart: cartItem[];
  setCart: (cart: cartItem[]) => void;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  setSize: (size: boolean) => void;
  pictureModal: boolean;
  setPictureModal: (pictureModal: boolean) => void;
  img: string;
  setImg: (imgUrl: string) => void;
  cartModal: boolean;
  setCartModal: (cartModal: boolean) => void;
}

const Modale = ({
  setSize,
  cart,
  setCart,
  cartModal,
  setCartModal,
  data,
  isVisible,
  setIsVisible,
  img,
  setImg,
  pictureModal,
  setPictureModal,
}: Datas) => {
  return (
    <>
      {isVisible &&
        (pictureModal ? (
          <section
            className="modal-root"
            onClick={() => {
              setIsVisible(false);
              setPictureModal(false);
            }}
          >
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <DisplayImg
                data={data}
                setIsVisible={setIsVisible}
                img={img}
                setImg={setImg}
                pictureModal={pictureModal}
                setPictureModal={setPictureModal}
              />
            </div>
          </section>
        ) : (
          cartModal &&
          (cart.length > 0 ? (
            <section
              className="cart-modal-root"
              onClick={() => {
                setIsVisible(false);
                setCartModal(false);
              }}
            >
              <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
                <img src={data.mainPicture} alt="" />
                <div className="cart-infos">
                  <div className="name-cart">{data.name}</div>
                  <div>{data.size}</div>
                  <div>
                    {data.price}€ x {cart[0].quantity} :
                    <span> {data.price * cart[0]?.quantity}€</span>
                    <FontAwesomeIcon
                      icon="trash-can"
                      className="trash"
                      onClick={() => {
                        setCart([]);
                        setSize(false);
                      }}
                    />
                  </div>

                  <div className="cart-button-holder">
                    <div className="checkout-button-modal">
                      <FontAwesomeIcon icon="credit-card" />
                      <p> Checkout</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : null)
        ))}
    </>
  );
};

export default Modale;
