
import CardFacilidades from "./components/CardFacilidades";
import CardMuitasVantagens from "./components/CardMuitasVantagens";
import CardQuemSomos from "./components/CardQuemSomos";
import CardServiços from "./components/CardServiços";
import CardVideos from "./components/CardVideos";
import ImageSlider from "./components/ImageSlider";
import Vantagens from "./components/Vantagens";
import Footer from "./Footer";
import Links from "./components/CadrLink";

export default function Home() {
  return (
    <main className="">
      <ImageSlider />
      <Links  href="https://wa.link/146h7e" target="_blank" rel="noopener noreferrer" texto="Fale com um representante"/>
      <Vantagens />
      <CardMuitasVantagens />
      <Links  href="https://wa.link/146h7e" target="_blank" rel="noopener noreferrer" texto="Fale com um representante"/>
      <CardVideos/>
      <CardFacilidades />
      <CardServiços />
      <Links  href="https://wa.link/146h7e" target="_blank" rel="noopener noreferrer" texto="Fale com um representante"/>
      <CardQuemSomos />
      <Footer />
    </main>
  );
}
