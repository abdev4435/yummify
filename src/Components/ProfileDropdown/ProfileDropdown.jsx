import { useEffect, useRef } from "react";
import { Link } from "react-router";

export default function ProfileDropdown() {
  const profileDropDownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileDropDownRef.current && !profileDropDownRef.current.contains(e.target)) {
        profileDropDownRef.current.classList.add("hidden")
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  })
  return (
    <div className="bg-white border-1 border-gray-300 shadow-xs shadow-gray-800 rounded-lg flex self-end" ref={profileDropDownRef}>
      <ul className="flex flex-col justify-center text-sm overflow-hidden">
        <Link to={"/my-orders"} className="cursor-pointer px-8 py-2 border-b-1 border-gray-300"><li className="hover:text-red-800 hover:overflow-hidden hover:scale-105 will-change-transform transition ease-out duration-100">My Orders</li></Link>
        <Link to={"/addresses"} className="cursor-pointer px-8 py-2 border-b-1 border-gray-300"><li className="hover:text-red-800 hover:scale-105 will-change-transform transition ease-out duration-100">Addresses</li></Link>
        <Link to={"/profile-info"} className="cursor-pointer px-8 py-2 border-b-1 border-gray-300"><li className="hover:text-red-800 hover:scale-105 will-change-transform transition ease-out duration-100">Profile Info</li></Link>
        <Link className="cursor-pointer px-8 py-2"><li className="hover:text-red-800 hover:scale-105 will-change-transform transition ease-out duration-100">Logout</li></Link>
      </ul>
    </div>
  )
}
