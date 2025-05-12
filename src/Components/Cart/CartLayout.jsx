import { useUI } from "../../Context/UI/useUI"
import { Button, CartItem, CouponDrawer } from "../Common"
import { closeIcon, upArrowIcon } from "../../assets/Icons";
import { useEffect, useRef } from "react";
import clsx from "clsx";

export default function CartLayout() {
  const { closeCart, isCartOpen } = useUI()
  const cartRef = useRef(null)
  const { couponDrawerState, handleShowCoupons } = useUI()
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        closeCart()
      }
    }
    if (isCartOpen) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen, closeCart]);
  return (
    <div id="cartLayout" className="fixed top-0 left-0 w-full h-screen bg-black/10 z-999">
      <div id="table" className="absolute right-0 z-50 bg-white top-0 w-[40%] h-full shadow-xl shadow-gray-900 overflow-auto rounded-l-4xl" ref={cartRef}>
        <div className="fixed right-0 w-[40%] bg-white rounded-tl-4xl" >
          <div id="closeBtn" className="p-2 flex justify-end items-center">
            <button onClick={closeCart}>
              <img src={closeIcon} alt="" className="w-6 cursor-pointer" />
            </button>
          </div>
          <div id="tableHeaderContainer" className="px-4 rounded-lg">
            <div id="tableHeader" className="mb-2 pr-4 flex font-medium text-sm text-purple-950">
              <h3 className="w-1/2">Item</h3>
              <div className="flex w-1/2">
                <div className="w-1/3">
                  <h3 className="text-center">Quantity</h3>
                </div>
                <div className="w-1/3">
                  <h3 className="text-center">Price</h3>
                </div>
                <div className="w-1/3">
                </div>
              </div>
            </div>
            <div id="rowSep" className="flex justify-center after:w-full after:h-0.5 after:bg-purple-950">
            </div>
          </div>
        </div>
        <div id="tableRowContainer" className="mt-20 p-4 flex flex-col gap-4 text-xs">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        {/* Cart Footer */}
        <div id="cartFooter" className={clsx("sticky bottom-2 z-999 mx-4 px-4 py-2 text-red-800 bg-gray-50 shadow-sm shadow-black rounded-full flex justify-between items-center", couponDrawerState && "rounded-xl flex justify-between flex-wrap")}>
          {couponDrawerState &&
            (
              <div className="w-full">
                <CouponDrawer />
              </div>
            )
          }
          {/* Apply Coupon Btn */}
          <Button className="font-medium text-xs shadow-sm shadow-gray-400 text-orange-500 border-2 border-orange-500 bg-transparent flex items-center gap-2 py-2 rounded-full hover:scale-95 hover:transition-all ease-in-out duration-300 will-change-transform" onClick={handleShowCoupons}>
            <span>Apply Coupon</span>
            <img src={upArrowIcon} alt="" className={`h-3 w-auto transform transition-transform duration-200 ${couponDrawerState ? "rotate-180 transform transition-transform duration-200" : ""}`} />
          </Button>
          <div id="cartTotal" className="font-semibold text-md">
            <span>Total - &#8377;965</span>
            <p className="text-red-500 text-[0.7rem] font-light">Exclusive of all the Charges</p>
          </div>
          {/* Checkout Btn */}
          <Button className="bg-purple-950 border-none shadow-sm shadow-black rounded-full px-6 py-2 text-md font-semibold hover:scale-90 hover:transition-all ease-in-out duration-300 hover:bg-purple-900">Proceed to Checkout</Button>
        </div>
      </div>
    </div >
  )
}
