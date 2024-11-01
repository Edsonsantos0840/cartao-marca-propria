import Image from "next/image";
import Link from "next/link";

import sede from '../assets/foto-sede.jpg'
import clientes from '../assets/2-milhoes-de-clientes.jpg'
import tradição from '../assets/20-anos-de-tradicao-e-credibilidade.png'

const CardQuemSomos: React.FC = () => {
  return (
    <div className="brasilcard md:py-10 bg-white md:mb-24">
      <div className="container mx-auto md:px-4">
        <hr className="block lg:hidden md:mb-6" />

        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-10 ">
          {/* Imagens da BrasilCard */}
          <div className="lg:w-1/2 flex flex-col items-center  space-y-6  relative">
            <Image
              src={sede}
              alt="Foto da sede BrasilCard"
              width={550}
              height={380}
              className="photo-1 shadow-lg rounded-md relative z-10 md:left-8"
            />
            <div className="flex ">
            <Image
              src={clientes}
              alt="2 milhões de clientes"
              width={150}
              height={90}
              className="photo-2 shadow-lg rounded-md absolute z-20 left-2 lg:left-0 top-[225px] lg:top-[320px] lg:w-[280]"
            />
            <Image
              src={tradição}
              alt="20 anos de tradição e credibilidade"
              width={85}
              height={48}
              className="photo-3 absolute z-20 lg:top-[410px] lg:w-[150]" 
            />

            </div>
     </div>

          {/* Texto informativo */}
          <div className="lg:w-1/2 py-8 px-4 lg:pt-4 lg:pl-5">
            <h4 className="text-yellow-600 font-bold text-2xl lg:text-3xl mb-2">
              Quem é a BrasilCard?
            </h4>
            <h4 className="text-[var(--blue)] font-light text-2xl lg:text-3xl mb-4">
              Uma das administradoras de cartão que mais cresce no Brasil.
            </h4>
            <p className="text-gray-700 mb-4 text-md">
              A BrasilCard, empresa administradora de cartão de crédito, atua
              desde 1999 no mercado e hoje está presente em todo o território
              nacional, realizando parcerias em diversos segmentos comerciais.
            </p>
            <Link href="/" passHref className="text-[var(--blue)] hover:underline">
              Leia mais
            </Link>

            <h4 className="text-yellow-600 font-bold text-2xl lg:text-3xl mt-6 mb-2">
              A BrasilCard é uma empresa do <br /> GRUPO ADRIANO COBUCCIO
            </h4>
            <Link
              href="/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--blue)] hover:underline"
            >
              Conheça o Grupo Adriano Cobuccio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardQuemSomos;
