/* eslint-disable react/prop-types */
import restImg from "../../assets/Images/rest_img.avif"
import { starIcon as ratingImg } from "../../assets/Icons"
export default function Card({ name = "One8 Commune", location = "Mumbai, India", rating = "4.5", img = restImg, description = "lorem ipsum harem danem!" }) {
  return (
    <div className="flex gap-10 w-1/5 self-start cursor-pointer hover:scale-95 transition will-change-transform duration-200 ease-in-out">
      <div className="flex flex-col rounded-3xl shadow-lg shadow-gray-300 cursor-pointer">
        <img src={img} alt="" className="rounded-3xl" />
        <div className="mx-3 my-4 flex flex-col content-end">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold">{name}</h1>
            <div className="flex justify-between items-center gap-2 text-white font-medium py-1 px-2 bg-green-800 rounded-lg">
              <span className="text-sm">{rating}</span>
              <img src={ratingImg} alt="" className="h-3" />
            </div>
          </div>
          <p className="text-md font-medium">{location}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}
