import Card from "../Card/Card"
import { Heading } from '../Common'

export default function FeaturedRestuarants() {
  return (
    <div>
      <Heading heading="Featured Restuarants" className="text-xl" />
      <div className="flex justify-center items-start gap-10 mx-10 flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
