import { Heading, ItemCard } from "../Common";
import { Link } from "react-router";


export default function PrevOrdered() {
  return (
    <div className="m-10">
      <div className="flex align-center justify-between ">
        <Heading heading="Recently Ordered" className="flex justify-start text-lg" />
        <Link className="flex self-center underline text-red-800">View Order History</Link>
      </div>
      <div className="flex gap-10">
        <ItemCard buttonTxt="Reorder" />
        <ItemCard buttonTxt="Reorder" />
        <ItemCard buttonTxt="Reorder" />
        <ItemCard buttonTxt="Reorder" />
        <ItemCard buttonTxt="Reorder" />
      </div>
    </div>
  )
}
