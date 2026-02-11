import { Link } from "react-router-dom";
import "./header.css";

export function Header() {
  return (
    <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
          <img className="logo" src="images/logo-white.png" />
          <img className="mobile-logo" src="images/mobile-logo-white.png" />
        </Link>
      </div>

      <div className="right-section">
        <Link className="orders-link header-link" to="/login">
          <span className="orders-text">Login</span>
        </Link>

        <Link className="cart-link header-link" to="/tdee">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-text">TDEE</div>
        </Link>
      </div>
    </div>
  );
}
