import { Container } from "react-bootstrap";
import HomeCard from "./HomeCard";
import HomeCarousel from "./HomeCarousel";
import Searchbar from "./SearchBar";
import CityCard from "./CityCard";

const MyHome = () => {
  return (
    <Container fluid>
      <Searchbar />
      <div>
        <HomeCard />
        <HomeCarousel />
      </div>
      <div>
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
      </div>
    </Container>
  );
};

export default MyHome;
