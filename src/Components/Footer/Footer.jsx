import logo from "../../assets/Images/Logo.png"
import { locationIcon, phoneIcon, emailIcon, instaIcon, twitterIcon, fbIcon, linkedinIcon } from "../../assets/Icons"
import { Button } from "../Common"
export default function Footer() {
  return (
    <div className="bg-rose-950 text-white px-4 py-8 mx-10 rounded-2xl my-1">
      <div className="flex justify-evenly">
        <div>
          <img src={logo} alt="" className="h-40" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-medium mb-2">Address</h1>
          <div className="flex gap-2 items-center">
            <img src={locationIcon} alt="Phone" className="h-4" />
            <span>Mumbai, India</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-medium mb-2">Contact Us</h1>
          <div className="flex gap-2 items-center">
            <img src={phoneIcon} alt="Phone" className="h-4" />
            <span>+91-9876543210</span>
          </div>
          <div className="flex gap-2 items-center">
            <img src={emailIcon} alt="Phone" className="h-4" />
            <span>contactus@yummify.in</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-medium mb-2">Social Links</h1>
          <div className="flex gap-4 items-center">
            <img src={instaIcon} alt="Phone" className="h-6 cursor-pointer" />
            <img src={twitterIcon} alt="Phone" className="h-6 cursor-pointer" />
            <img src={fbIcon} alt="Phone" className="h-6 cursor-pointer" />
            <img src={linkedinIcon} alt="Phone" className="h-6 cursor-pointer" />
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-lg font-medium">Subscribe to our Newsletter!</h1>
            <span className="text-sm">For fresh deals and foodie updates straight to your inbox.</span>
          </div>
          <div className="flex gap-2 mt-2">
            <input type="text" placeholder="Enter your email" className="px-4 py-2 w-full bg-red-900 rounded-xs placeholder:text-gray-300 shadow-2xs shadow-black" />
            <Button className="border-black bg-black rounded-xs shadow-2xs hover:scale-95 transition will-change-transform duration-200">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <hr className="w-auto h-4 mx-10" />
      </div>
      <div className="flex justify-center items-center">
        <p className="text-white text-sm">© 2024 Yummify | All Rights Reserved.</p>
      </div>
    </div>);
}
