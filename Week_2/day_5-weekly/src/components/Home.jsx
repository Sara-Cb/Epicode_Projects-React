import { Container } from "react-bootstrap";
import HeroCard from "./HeroCard";
import CustomCarousel from "./CustomCarousel";
import Searchbar from "./Searchbar";
import CityCards from "./CityCards";

const Home = () => {
  return (
    <Container fluid>
      <Searchbar />
      <div>
        <HeroCard />
        <CustomCarousel />
      </div>
      <div>
        <CityCards />
        <CityCards />
        <CityCards />
        <CityCards />
        <CityCards />
        <CityCards />
      </div>
    </Container>
  );
};

export default Home;
