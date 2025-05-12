/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [couponDrawerState, setCouponDrawerState] = useState(false);
  const [profileDropDownState, setProfileDropDownState] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const handleProfileDropdown = () => {
    setProfileDropDownState(!profileDropDownState)
  }
  const handleShowCoupons = () => {
    setCouponDrawerState(!couponDrawerState)
  }
  const handleToggle = (e) => {
    e.preventDefault()
    setSignUp((prev) => !prev)
  }
  return (
    <UIContext.Provider value={{ isModalOpen, openModal, closeModal, signUp, handleToggle, isCartOpen, openCart, closeCart, couponDrawerState, handleShowCoupons, handleProfileDropdown, profileDropDownState }}>
      {children}
    </UIContext.Provider>
  )
};

export default UIContext;