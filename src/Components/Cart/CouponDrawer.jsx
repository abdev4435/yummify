import { Button, Coupon, Input } from "../Common"
import { useUI } from "../../Context/UI/useUI";
import { closeIcon } from "../../assets/Icons"
export default function CouponDrawer() {
  const { handleShowCoupons } = useUI()
  return (
    <div id="couponDrawerContainer" className="w-full h-[30rem] mb-5 overflow-hidden">
      <div id="couponHeader" className="flex justify-between items-center mb-4">
        <h3 className="text-md font-semibold">Coupons</h3>
        <Button onClick={handleShowCoupons} className="bg-transparent border-none p-0">
          <img src={closeIcon} alt="" className="w-5" />
        </Button>
      </div>
      <div id="couponSearchBar" className="flex gap-2 mb-2">
        <Input type="text" placeholder="Enter Coupon Code" inputClassName="border-2 border-gray-300 rounded-md px-4 py-2 text-black" />
        <Button className="bg-orange-500 border-orange-500 shadow-sm shadow-gray-500 rounded-md px-8 text-md font-semibold hover:scale-90 hover:transition-all ease-in-out duration-300 hover:border-2 hover:border-orange-500 hover:bg-white hover:text-orange-500">Apply</Button>
      </div>
      <div id="couponsContainer" className="px-1 h-full overflow-auto scrollbar-thin">
        <Coupon />
        <Coupon offerTag="$899 Off" couponCode="FIRST200" couponDescription="Get Rs.200 Off on first order" couponCondition="Offer only on first order" />
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
      </div>
    </div>
  )
}
