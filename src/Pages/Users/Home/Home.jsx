import { Carousel, FeaturedCuisines, FeaturedRestuarants, Hero, PrevOrdered, Recommended, Testimonials } from "../../../Components";
import { useAuth } from "../../../Context/Auth/useAuth";
export default function Home() {
  const { isAuth } = useAuth()
  return (
    <div className="my-5">
      {isAuth ? (
        <>
          <Carousel />
          <PrevOrdered />
          <Recommended />
        </>
      ) : (
        <>
          <Hero />
          <FeaturedRestuarants />
        </>
      )}
      <FeaturedCuisines />
      {!isAuth && (<Testimonials />)}
    </div>
  )
}
