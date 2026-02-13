import { Link } from "react-router-dom";
import "./header.css";

export function Header() {
  return (
    <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
          <img className="logo" src="/images/FeStrength.png" />
          <img className="mobile-logo" src="/images/FeStrength.png" />
        </Link>
      </div>

      <div className="right-section">
        <Link className="login-link header-link" to="/login">
          <span className="login-text">Login</span>
        </Link>

        <Link className="tdee-link header-link" to="/tdee">
          <div className="tdee-text">TDEE</div>
        </Link>
      </div>
    </div>
  );
}
