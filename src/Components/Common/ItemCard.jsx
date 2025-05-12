/* eslint-disable react/prop-types */
import { Button } from "../index";
import { biryani } from "../../assets/Images/FeaturedCuisineImages"

export default function ItemCard({
  productName = "Product Name",
  restoName = "Resto Name",
  price = "₹ 200",
  imageSrc = biryani,
  buttonTxt = "Button"
}) {
  return (
    <>
      <div className="flex justify-start items-center">
        <div className="flex gap-2 items-center">
          <img src={imageSrc} alt="Product Img" className="w-25 h-25 rounded-2xl" />
          <div className="text-sm">
            <h3 className="font-medium">{productName}</h3>
            <p>{restoName}</p>
            <p className="text-lg font-medium">{price}</p>
            <div className="flex items-center">
              <Button className="hover:bg-white hover:text-red-800 hover:scale-90 will-change-transform transition ease-out duration-300">{buttonTxt}</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
