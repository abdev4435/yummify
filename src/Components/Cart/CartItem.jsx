/* eslint-disable react/prop-types */

import { biryani } from "../../assets/Images/FeaturedCuisineImages"
import { closeIcon, plusIcon, minusIcon } from "../../assets/Icons"
export default function CartItem({ productName = "Product Name", restuarantName = "Restuarant Name", price = "0", quantity = "1", imgSrc = biryani }) {
  return (
    <div id="tableRow" className="flex flex-col gap-4">
      <div id="rowContent" className="flex">
        <div id="item" className="flex items-start gap-1 w-1/2">
          <img src={imgSrc} alt="" className="w-15 rounded-lg" />
          <div className="flex flex-col gap-1">
            <strong>{productName}</strong>
            <span>{restuarantName}</span>
          </div>
        </div>
        <div className="flex w-1/2 items-start">
          <div id="quantity" className="flex justify-center gap-3 items-start w-1/3">
            <img src={minusIcon} alt="" className="w-4 cursor-pointer" />
            <span>{quantity}</span>
            <img src={plusIcon} alt="" className="w-4 cursor-pointer" />
          </div>
          <div id="price" className="flex justify-center w-1/3">
            <span>{price}</span>
          </div>
          <div id="removeItem" className="flex justify-end pr-5 w-1/3">
            <img src={closeIcon} alt="close" className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div id="rowSep" className="flex justify-center after:w-full after:h-0.5 after:bg-gray-200">
      </div>
    </div>
  )
}
