import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CustomCarousel from "./CustomCarousel";
import HeroCard from "./HeroCard";

function CityPage() {
  const params = useParams();
  return (
    <Container>
      <HeroCard />
      <CustomCarousel />
    </Container>
  );
}

export default CityPage;
