import "./modale.css";
import DisplayImg from "../DisplayImg";
import { cartItem } from "../../App";

interface ImageData {
  name: string;
  price: number;
  quantity: number;
  mainPicture: string;
  miniaturePictures: string[];
}
interface Datas {
  data: ImageData;
}

const Modale = ({
  cart,
  cartModal,
  setCartModal,
  data,
  isVisible,
  setIsVisible,
  img,
  setImg,
  pictureModal,
  setPictureModal,
}: Datas & {
  cart: cartItem[];
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  pictureModal: boolean;
  setPictureModal: (pictureModal: boolean) => void;
  img: string;
  setImg: (imgUrl: string) => void;
  cartModal: boolean;
  setCartModal: (cartModal: boolean) => void;
}) => {
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
                isVisible={isVisible}
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
                  <div>Price: {data.price} €</div>
                  <div> Quantity: {cart[0].quantity} </div>
                  <div>Total: {data.price * cart[0]?.quantity} €</div>
                </div>
              </div>
            </section>
          ) : null)
        ))}
    </>
  );
};

export default Modale;
