import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import { Footer } from "../../components/Footer";
import { StyledDonate } from "./style";

export function Donate() {
  return (
    <>
      <Header />
      <ImagesCarousel />
      <StyledDonate>
        <h1>eu sou a doe screen</h1>
      </StyledDonate>
      <Footer />
    </>
  );
}