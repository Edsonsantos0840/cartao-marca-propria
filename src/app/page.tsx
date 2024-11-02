import {whats} from './components/arquivos/ArquivoRepresentante'
import CardFacilidades from "./components/CardFacilidades";
import CardMuitasVantagens from "./components/CardMuitasVantagens";
import CardQuemSomos from "./components/CardQuemSomos";
import CardServiços from "./components/CardServiços";
import CardVideos from "./components/CardVideos";
import ImageSlider from "./components/ImageSlider";
import Vantagens from "./components/Vantagens";
import Links from "./components/CardLink";
import MobileSlide from "./components/MobileSlide";

export default function Home() {
  return (
    <main className="">
      <MobileSlide/>
      <ImageSlider />
      <Links  href={whats} target="_blank" rel="noopener noreferrer" texto="Fale com um representante"/>
      <Vantagens />
      <CardMuitasVantagens />
      <Links  href={whats} target="_blank" rel="noopener noreferrer" texto="Fale com um representante"/>
      <CardVideos/>
      <CardFacilidades />
      <CardServiços />
      <Links  href={whats} target="_blank" rel="noopener noreferrer" texto="Fale com um representante"/>
      <CardQuemSomos />
    </main>
  );
}
