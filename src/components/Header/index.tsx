import "./header.css";
import avatar from "../../assets/images/Frank.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cartItem } from "../../App";

const Header = ({
  isVisible,
  setIsVisible,
  cart,
  cartModal,
  setCartModal,
}: {
  cart: cartItem[];
  cartModal: boolean;
  setCartModal: (cartModal: boolean) => void;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}) => {
  return (
    <div className="header">
      <nav className="header-content">
        <div className="left-side">
          <h1>sneakers</h1>
          <section className="informations">
            <h2>Collections</h2>
            <h2>Men</h2>
            <h2>Women</h2>
            <h2>About</h2>
            <h2>Contact</h2>
          </section>
        </div>

        <div className="right-side">
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
          <div className="avatar-holder">
            <img className="avatar-image" src={avatar} alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
