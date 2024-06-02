import { Header } from "../../components/Header";
import { ImagesCarousel } from "../../components/ImagesCarousel";
import { BackToTopArrow } from "../../components/BackToTopArrow";
// import { Footer } from "../../components/Footer";
import { StyledAbout } from "./style.js";
import { WorldMap } from "../../components/WorldMap/index.jsx";

export function About() {
  return (
    <>
      <Header />
      <ImagesCarousel />
      <StyledAbout>
        <h1>eu sou a corais screen</h1>
        <WorldMap />
      </StyledAbout>
      <BackToTopArrow />
      {/* <Footer /> */}
    </>
  );
}
