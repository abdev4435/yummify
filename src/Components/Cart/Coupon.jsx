/* eslint-disable react/prop-types */
export default function Coupon({
  offerTag = "20% Off",
  couponCode = "GET20",
  couponDescription = "Get 20% Off",
  couponCondition = "Upto Rs.150",

}) {
  return (
    <div id="coupon" className="my-2 w-full">

      <div className="bg-white shadow-md relative rounded-lg overflow-hidden flex gap-5 items-center cursor-pointer hover:inset-shadow-orange-500 hover:scale-x-95 transition-transform duration-200 ease-in-out">
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-100 rounded-full"></div>
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-100 rounded-full"></div>
        <div id="offerTag" className="w-1/4 h-full flex justify-center bg-orange-500 text-white py-8">
          <h3 className="text-xs font-bold rotate-270">{offerTag}</h3>
        </div>
        <div className="w-full flex flex-col items-start justify-center">
          <h3 className="text-md font-semibold text-black">{couponCode}</h3>
          <h3 className="text-xs text-orange-500">{couponDescription}</h3>
          <div className="w-full flex justify-between">
            <p className="text-xs text-gray-500">{couponCondition}</p>
            <p className="mr-5 text-xs text-gray-300">*T&C apply</p>
          </div>
        </div>
      </div>
    </div>

  )
}