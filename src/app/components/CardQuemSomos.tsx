//mÓDULOS.
import Image from "next/image";
import Link from "next/link";

export default function CardQuemSomos() {
  return (
    <section className="brasilcard md:py-10 bg-white md:mb-24">
      <div className="max-w-[1100px] mx-auto ">
        <hr className="block lg:hidden md:mb-6" />

        <div className="flex flex-col items-center lg:flex-row  space-y-8 lg:space-y-0 lg:space-x-10 mt-8 lg:mt-0 px-4 lg:px-0">
          {/* Imagens da BrasilCard */}
          <figure className="flex flex-col items-center  space-y-6  relative  mb-14 md:mb-28 lg:mb-0">
            <Image
              src="/foto-sede.jpg"
              alt="Foto da sede BrasilCard"
              width={550}
              height={380}
              quality={100}
              className="photo-1 shadow-2xl rounded-md relative z-10 md:left-4 w-[440px] md:w-[640px] lg:w-[550px] lg:h-[380px]"
            />
            <figure className="flex ">
              <Image
                src="/2-milhoes-de-clientes.jpg"
                alt="2 milhões de clientes"
                width={150}
                height={90}
                quality={100}
                className="
                  photo-2 shadow-2xl rounded-md absolute z-20 
                  -left-5 md:-left[5px] lg:left-3 top-[262px] md:top-[370px] lg:top-[340px] w-[240px] md:w-[360px] lg:w-[280] "
              />
              <Image
                src="/20-anos-de-tradicao-e-credibilidade.png"
                alt="20 anos de tradição e credibilidade"
                width={85}
                height={48}
                quality={100}
                className="
                  photo-3 absolute z-20 
                  top-[330px] md:top-[480px] left-[250px] md:left-[370px] lg:left-[320] lg:top-[410px] w-[130px] md:w-[170px] lg:w-[150]"
              />
            </figure>
          </figure>

          {/* Texto informativo */}
          <article className="lg:w-1/2 py-8 px-4 lg:pt-4 lg:pl-5">
            <h4 className="text-[#f8c538] font-bold text-3xl mb-2">
              Quem é a BrasilCard?
            </h4>
            <h4 className="text-blue font-light text-[1.7rem] lg:text-3xl mb-4">
              Uma das administradoras de cartão que mais cresce no Brasil.
            </h4>
            <p className="text-gray-700 mb-4 text-sm lg:text-md">
              A BrasilCard, empresa administradora de cartão de crédito, atua
              desde 1999 no mercado e hoje está presente em todo o território
              nacional, realizando parcerias em diversos segmentos comerciais.
            </p>
            <Link
              href="/"
              rel="noopener noreferrer"
              passHref
              className="text-blue text-sm hover:underline"
            >
              Leia mais
            </Link>

            <h4 className="text-[#f8c538] font-bold text-[1.7rem] lg:text-3xl mt-6 mb-2">
              A BrasilCard é uma empresa do <br /> GRUPO ADRIANO COBUCCIO
            </h4>
            <Link
              href="/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:underline"
            >
              Conheça o Grupo Adriano Cobuccio
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
