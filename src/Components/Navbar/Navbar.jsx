// eslint-disable react/prop-types 
import { NavLink } from "react-router";
import logo from "../../assets/Images/Logo.png";
import { useUI } from "../../Context/UI/useUI";
import { useAuth } from "../../Context/Auth/useAuth";
import { AuthModal, CartLayout, ProfileDropdown } from "../index";
import { Button } from "../Common";
import { cartIcon, profileIcon } from "../../assets/Icons";
export default function Navbar() {
  const { openModal, isModalOpen, isCartOpen, openCart, profileDropDownState, handleProfileDropdown } = useUI()
  const { isAuth } = useAuth()
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md shadow-gray-400 z-50">
      <div className="flex justify-between items-center px-10 py-1">
        <div className="flex justify-start">
          <NavLink to={"/"}><img src={logo} alt="Logo" className="w-20" /></NavLink>
        </div>
        <div className="flex justify-center self-center">
          <ul className="flex gap-14 text-lg">
            <li className="cursor-pointer h-10 hover:after:flex hover:after:content-[''] hover:after:w-auto hover:after:h-0.5 hover:after:bg-red-800 hover:scale-x-105 will-change-transform ease-out transition duration-100">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="cursor-pointer h-10 hover:after:flex hover:after:content-[''] hover:after:w-auto hover:after:h-0.5 hover:after:bg-red-800 hover:scale-x-105 will-change-transform ease-out transition duration-100">
              <NavLink to={"restuarants"}>Restuarants</NavLink>
            </li>
            <li className="cursor-pointer h-10 hover:after:flex hover:after:content-[''] hover:after:w-auto hover:after:h-0.5 hover:after:bg-red-800 hover:scale-x-105 will-change-transform ease-out transition duration-100">
              Cuisines
            </li>
            <li className="cursor-pointer h-10 hover:after:flex hover:after:content-[''] hover:after:w-auto hover:after:h-0.5 hover:after:bg-red-800 hover:scale-x-105 will-change-transform transition ease-out duration-100">
              About Us
            </li>
          </ul>
        </div>
        <div className="flex align-middle justify-center self-center gap-10">
          {isAuth ? (
            <div className="flex justify-center align-middle gap-10">
              {/* <img src={lightThemeIcon} alt="" className="cursor-pointer h-10" /> */}
              <button onClick={openCart}><img src={cartIcon} alt="" className="cursor-pointer w-10" /></button>
              <button onClick={handleProfileDropdown}><img src={profileIcon} alt="" className="cursor-pointer w-10 border-4 rounded-3xl border-red-800" /></button>
            </div>
          ) : (
            <div className="flex self-center gap-10">
              <span className="flex flex-col self-center 
          text-md text-purple-950 font-semibold 
          after:content-[''] after:border-1 after:border-purple-950 
          hover:scale-105 will-change-transform transition ease-out duration-300"
              >
                <NavLink>
                  Partner with us
                </NavLink>
              </span>
              <Button text="Sign In" onClick={openModal} className="text-md
          text-red-800 
          bg-white
          font-semibold 
          px-6 py-1 
          border-2 border-red-800
          rounded-full 
          shadow-md shadow-gray-300 
          hover:scale-105 will-change-transform transition ease-out duration-300
          cursor-pointer" />
            </div>
          )}
        </div>
      </div >
      {
        isModalOpen && (
          <AuthModal />
        )
      }
      {isCartOpen && (
        <CartLayout />
      )}
      {profileDropDownState && (
        <div className="fixed top-15 right-10">
          <ProfileDropdown />
        </div>
      )}
    </div>
  );
}
