import { Heading, ItemCard } from "../Common"

export default function Recommended() {
  return (
    <div className="m-10">
      <Heading heading='Recommended for you' className="justify-start text-lg" />
      <div className="flex gap-10">
        <ItemCard buttonTxt="Add to Cart" />
        <ItemCard buttonTxt="Add to Cart" />
        <ItemCard buttonTxt="Add to Cart" />
        <ItemCard buttonTxt="Add to Cart" />
        <ItemCard buttonTxt="Add to Cart" />
      </div>
    </div>
  )
}
