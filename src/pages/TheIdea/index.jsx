import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import { Footer } from "../../components/Footer";
import { StyledIdea } from "./style";

export function Idea() {
  return (
    <>
      <Header />
      <ImagesCarousel />
      <StyledIdea>
        <h1>eu sou a ideias screen</h1>
      </StyledIdea>
      <Footer />
    </>
  );
}