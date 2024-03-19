import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative z-40 ">
      <div className="container mx-auto">
        <nav className="navbar bg-gray text-black rounded-full my-5">
          <div className="navbar-start">
            <a className="navbar-item text-black">Ripple UI</a>
          </div>
          <div className="navbar-end">
            <NavLink to="/" className="lg:p-4 p-2 relative">
              Home
            </NavLink>
            <NavLink to="/product" className="lg:p-4 p-2 relative">
              About
            </NavLink>
            <NavLink to="/cart" className="lg:p-4 p-2 relative">
              Cart
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
