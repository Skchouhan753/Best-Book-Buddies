import "./header.css";
import logoSVG from "../../assets/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logoSVG} alt="Logo" />
        </div>
        <div className="menu-items">
          <span className="menu-1">
            <a className="link-1">Features</a>
          </span>
          <span className="menu-2">
            <a className="link-2">Github</a>
          </span>
          <span className="menu-3">
            <a className="link-3">For Designers</a>
          </span>
          <span className="menu-button">
            <a className="link-button">
              <button className="btn">For Designers</button>
            </a>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
