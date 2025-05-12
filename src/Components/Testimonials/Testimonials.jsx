import { Heading, Review } from "../Common/";

export default function Testimonials() {
  return (
    <div className="my-10">
      <Heading heading={"Customer Experience"} className="text-xl" />
      <div className="flex justify-center gap-5">
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  )
}
