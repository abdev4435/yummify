import { Heading } from "../Common"
import { pizza, burger, shawarma, chinese, biryani, thali, tandoori, south, milkShake, cake, coffee, icecream, brownie, waffle, falooda, juice } from "../../assets/Images/FeaturedCuisineImages"
export default function FeaturedCuisines() {
  return (
    <div className="my-10">
      <Heading heading={"Taste the Favorites"} className="text-xl" />
      <div className="flex flex-col gap-10">
        <div className="flex justify-evenly *:flex *:justify-center *:flex-col *:items-center *:gap-2">
          <div>
            <img src={pizza} alt="" className="w-28 h-20 rounded-full shadow-lg" />
            <span className="font-medium">Pizza</span>
          </div>
          <div>
            <img src={burger} alt="" className="w-28 h-20 rounded-full shadow-lg" />
            <span className="font-medium">Burger</span>
          </div>
          <div>
            <img src={shawarma} alt="" className="w-28 h-20 rounded-full shadow-lg" />
            <span className="font-medium">Shawarma</span>
          </div>
          <div>
            <img src={chinese} alt="" className="w-28 h-20 rounded-full shadow-lg" />
            <span className="font-medium">Chinese</span>
          </div>
          <div>
            <img src={biryani} alt="" className="w-28 h-20 rounded-full shadow-lg" />
            <span className="font-medium">Biryani</span>
          </div>
          <div>
            <img src={tandoori} alt="" className="w-28 h-20 rounded-full shadow-lg" />
            <span className="font-medium">
              Tandoori
            </span>
          </div>
          <div>
            <img src={south} alt="" className="w-28 h-20 rounded-full shadow-lg" />
            <span className="font-medium">
              South Indian
            </span>
          </div>
          <div>
            <img src={thali} alt="" className="w-28 h-20 rounded-full shadow-lg" />
            <span className="font-medium">Thali</span>
          </div>
        </div>
        <div className="flex justify-evenly *:flex *:justify-center *:flex-col *:items-center *:gap-2">
          <div>
            <img src={cake} alt="" className="w-28 h-20 rounded-full shadow-lg" />
            <span className="font-medium">Cake</span>
          </div>
          <div>
            <img src={milkShake} alt="" className="w-28 h-20 rounded-full shadow-lg" />
            <span className="font-medium">Milkshakes</span>
          </div>
          <div>
            <img src={coffee} alt="" className="w-28 h-20 rounded-full shadow-lg" />
            <span className="font-medium">Coffee</span>
          </div>
          <div>
            <img src={icecream} alt="" className="w-28 h-20 rounded-full shadow-lg" />
            <span className="font-medium">Ice Cream</span>
          </div>
          <div>
            <img src={brownie} alt="" className="w-28 h-20 rounded-full shadow-lg" />
            <span className="font-medium">Brownie</span>
          </div>
          <div>
            <img src={waffle} alt="" className="w-28 h-20 rounded-full shadow-lg" />
            <span className="font-medium">Waffles</span>
          </div>
          <div>
            <img src={falooda} alt="" className="w-28 h-20 rounded-full shadow-lg" />
            <span className="font-medium">Falooda</span>
          </div>
          <div>
            <img src={juice} alt="" className="w-28 h-20 rounded-full shadow-lg" />
            <span className="font-medium">Fresh Juice</span>
          </div>
        </div>
      </div>
    </div>
  )
}
