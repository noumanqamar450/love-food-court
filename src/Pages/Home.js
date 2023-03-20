import { Container } from "react-bootstrap";
import BrandsLogo from "../Components/BrandsLogo";
import FoodArea from "../Components/FoodArea";
import HeroSlider from "../Components/HeroSlider";
import SemiBanners from "../Components/SemiBanners";

function Home() {
  
  return (
    <>
      <Container>
        <HeroSlider/>
        <SemiBanners/>
        <FoodArea/>
        <BrandsLogo/>
      </Container>
    </>
  )

}

export default Home;
