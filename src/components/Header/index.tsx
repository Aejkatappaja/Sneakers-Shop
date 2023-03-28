import "./header.css";
import avatar from "../../assets/images/Frank.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cartItem } from "../../App";

interface HomeProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  cart: cartItem[];
  cartModal: boolean;
  setCartModal: (cartModal: boolean) => void;
}

const Header = ({
  isVisible,
  setIsVisible,
  cart,
  cartModal,
  setCartModal,
}: HomeProps) => {
  return (
    <div className="header">
      <nav className="header-content">
        <div className="left-side">
          <h1>sneakers</h1>
          <section className="informations">
            <h2>NEW ARRIVALS</h2>
            <h2>UPCOMING</h2>
            <h4 className="sale">SALE</h4>
          </section>
        </div>

        <div className="right-side">
          {cart.length > 0 ? (
            <span
              className="icon-holder"
              onClick={() => {
                setCartModal(!cartModal);
                setIsVisible(!isVisible);
              }}
            >
              <FontAwesomeIcon icon="cart-shopping" />
              <div className={cart[0]?.quantity ? "counter" : ""}>
                {cart[0]?.quantity}
              </div>
            </span>
          ) : (
            <span className="icon-holder">
              <FontAwesomeIcon icon="cart-shopping" />
              <div className={cart[0]?.quantity ? "counter" : ""}>
                {cart[0]?.quantity}
              </div>
            </span>
          )}

          <div className="avatar-holder">
            <img className="avatar-image" src={avatar} alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
