// Módulos
import Link from "next/link";
import Image from "next/image";
// Componentes
import { vantagens } from "./listas/ListaVantagens";

const CardGrid: React.FC = () => (
  <div className="container mx-auto px-1 md:px-4 md:py-6  ">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
      {vantagens.map((card, index) => (
        <Link
          key={index}
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
           flex  items-center bg-slate-100 hover:bg-slate-200 
           hover:scale-105 rounded-lg shadow-lg gap-2 
           transition delay-150 duration-300 ease-in-out"
        >
          <div className="bg-slate-200 rounded-tl-md p-6 h-[100%] ">
            <Image
              src={card.imageSrc}
              alt={card.title}
              width={50}
              height={50}
            />
          </div>
          <h2 className="mt-4 text-center font-semibold  ">{card.title}</h2>
        </Link>
      ))}
    </div>
  </div>
);

export default CardGrid;
