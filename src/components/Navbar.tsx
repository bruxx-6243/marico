import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/images/Company_logo.png";
import whiteLogo from "../assets/images/whitelogo.png";
import { useState } from "react";
import { useAuth } from "../hook/useAuth";
import { AuthContextValue } from "../context/AuthProvider";

const navlinks = [
  {
    name: "Use Cases",
    to: "/",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Pricing",
    to: "/pricing",
  },
  {
    name: "Blog",
    to: "/blog",
  },
];

const actionBtns = [
  {
    name: "Login",
    to: "/login",
  },
  {
    name: "Sign Up",
    to: "/signup",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleNav = () => setIsOpen((prev) => !prev);
  const { user, logout } = useAuth() as AuthContextValue;
  const navigate = useNavigate();

  const signOut = () => {
    logout(() => navigate("/", { replace: true }));
  };

  return (
    <header className="fixed top-0 left-0 w-full py-[12px] px-[20px] bg-black z-50">
      <nav className="max-w-[1640px] flex items-center justify-between mx-auto text-sm font-medium text-gray">
        <Link to="/" className="block">
          <img src={logo} width={150} height={36} alt="Logo marico company" />
        </Link>

        <ul className="items-center gap-9 hidden md:flex">
          {navlinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.to}>{link.name}</NavLink>
            </li>
          ))}
        </ul>

        {user ? (
          <button
            onClick={signOut}
            className="py-[10px] px-[20px] rounded-md bg-blue text-white hidden md:block"
          >
            Log out
          </button>
        ) : (
          <div className="items-center gap-[24px] text-gray hidden md:flex">
            {actionBtns.map((btn, index) => (
              <Link
                key={btn.name}
                to={btn.to}
                className={`py-[10px] px-[20px] rounded-md ${
                  index == 1 && "bg-blue text-white"
                }`}
              >
                {btn.name}
              </Link>
            ))}
          </div>
        )}

        <button
          onClick={handleToggleNav}
          className={`block text-[25px] py-[8px] px-[12px] bg-blue text-white transition duration-200 ${
            isOpen ? "rounded-none" : "rounded-md"
          } md:hidden`}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>

      {/* Mobile navigation */}

      <div
        className={`fixed top-0 ${
          isOpen ? "left-0" : "-left-full"
        } w-[calc(100%-80px)] h-screen bg-blue block md:hidden z-[100] p-[20px] transition-all duration-300`}
      >
        <Link to="/">
          <img
            onClick={handleToggleNav}
            className="block mx-auto"
            src={whiteLogo}
            alt="Logo"
            width={70}
          />
        </Link>
        <ul className="flex flex-col gap-6 mt-[100px]">
          {navlinks.map((link) => (
            <li onClick={handleToggleNav} key={link.name}>
              <Link
                to={link.to}
                className="text-black text-4xl uppercase font-bold"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {user ? (
          <div className="mt-14">
            <p className="text-lg mb-4 italic text-black">-{user.email}</p>
            <button
              onClick={signOut}
              className="text-[24px] text-center w-full py-[10px] px-[20px] rounded-md  text-white border-2 border-white max-w-[300px]"
            >
              Log out
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center gap-[24px] text-gray mt-14">
            {actionBtns.map((btn, index) => (
              <Link
                onClick={handleToggleNav}
                key={btn.name}
                to={btn.to}
                className={`text-[24px] text-center w-full py-[10px] px-[20px] rounded-md ${
                  index == 0
                    ? "text-white border-2 border-white"
                    : "bg-white text-blue"
                }`}
              >
                {btn.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
