import banner from "../../assets/Images/banner.jpg";
import { useUI } from "../../Context/UI/useUI"
import { Button } from "../Common"
export default function Hero() {

  const { openModal } = useUI()
  return (
    <div
      className="flex flex-col items-start justify-center 
              text-white 
              bg-rose-950 
              px-20 py-16 m-10
              rounded-2xl 
              shadow-lg shadow-gray-500"
      style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover" }}
    >
      <h1 className="text-6xl flex font-bold">Crave it? Click it. Lick it!</h1>
      <div className="mt-2">
        {/* <h2 className="text-xl my-1 ml-5 font-bold">Welcome to Yummify!</h2> */}
        <span className="text-lg italic">
          From local delights to global flavors, we bring{" "}
          <span className="font-semibold">deliciousness</span> right to your
          door in minutes!
        </span>
      </div>
      <div>
        <Button text="Get Started!" onClick={openModal} className="ml-5 mt-10 text-xl font-semibold bg-rose-700 border-rose-700 px-6 py-3 rounded-full shadow-lg shadow-gray-950 hover:scale-105 will-change-transform transition duration-300 ease-in-out" />
      </div>
    </div>
  );
}
