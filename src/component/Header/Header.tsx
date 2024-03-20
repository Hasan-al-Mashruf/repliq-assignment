import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative z-40 ">
      <div className="container mx-auto">
        <nav className="navbar bg-gray text-black rounded-full my-5">
          <div className="navbar-start">
            <a className="navbar-item text-black">Logo</a>
          </div>
          <div className="navbar-end">
            <NavLink to="/" className="mx-1 p-2 relative">
              Home
            </NavLink>
            <NavLink to="/product" className="mx-1 p-2 relative">
              Product
            </NavLink>
            <NavLink to="/cart" className="mx-1 p-2 relative">
              Cart
            </NavLink>
            <NavLink to="/admin" className="mx-1 p-2 relative">
              Admin
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
