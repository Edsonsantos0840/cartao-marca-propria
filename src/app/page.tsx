
import CardFacilidades from "./components/CardFacilidades";
import CardMuitasVantagens from "./components/CardMuitasVantagens";
import CardQuemSomos from "./components/CardQuemSomos";
import CardServiços from "./components/CardServiços";
import CardVideos from "./components/CardVideos";
import ImageSlider from "./components/ImageSlider";
import Vantagens from "./components/Vantagens";
import MobileSlide from "./components/MobileSlide";

export default function Home() {
  return (
    <main className="">
      <MobileSlide />
      <ImageSlider />
      <Vantagens />
      <CardMuitasVantagens />
      <CardVideos />
      <CardFacilidades />
      <CardServiços />
      <CardQuemSomos />
    </main>
  );
}
