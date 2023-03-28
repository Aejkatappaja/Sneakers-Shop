import "./footer.css";
import iconList from "../../assets/iconList";

const Footer = () => {
  const icons = iconList();

  return (
    <footer className="footer">
      <div>
        <h2>Contact us</h2>|<h2>Payment options</h2>|<h2>Shipping</h2>
        <h2></h2>
      </div>
      <section className="moving-text">
        <div>
          <p>
            get <span>sneakers</span> app
          </p>
        </div>
      </section>
      <div>
        <img src={icons.Twitter} alt="" />|
        <img src={icons.Facebook} alt="" />|
        <img src={icons.Instagram} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
