// Módulos
import Image from "next/image";
// Componentes
import { BenefitsCard } from "../fields/ListaVantagens";

export default function CardFacilidades() {
  return (
 <section
  className="mt-10 relative bg-[#0099ff1c] bg-center bg-no-repeat"
  style={{
    backgroundImage: `url('/bg-fundo.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
  aria-label="Facilidades e vantagens do cartão BrasilCard"
>
      <div className="relative max-w-[1200px] mx-auto z-30">
        <h3 className="text-center font-light text-[1.7rem] md:text-4xl text-[#0449af] text-shadow-lg px-6  pt-6 lg:pt-10 ">
          Veja como é fácil fazer o seu BrasilCard e confira as vantagens:
        </h3>

        <article className="grid grid-cols-1 lg:grid-cols-2 -space-y-2 md:gap-4">
          {BenefitsCard.map((benefit, index) => (
            <div
              key={index}
              className="relative"
            >
              <figure
              className="relative flex items-start justify-start lg:p-4 w-[150px] md:w-[220px] lg:w-[280px]"
            >
              {/* Círculo de fundo */}
              <Image
                src="/circle-yellow.png"
                alt=""
                width={250}
                height={250}
                quality={100}
                className="w-[200px] md:w-[240px] lg:w-[250px]"
                aria-hidden="true"
              />

              {/* Ícone central */}
              <Image
                src={benefit.icon}
                alt={`Ícone ${benefit.title}`}
                width={150}
                height={150}
                quality={100}
                className="absolute -top-5 -left-2 w-[130px] md:w-[160px] "
              />
             </figure>
              {/* Título */}
              <h2
                className="absolute left-[100px] top-[50px] md:left-[130px] md:top-[110px] 
                lg:left-[150px] lg:top-[140px] text-3xl md:text-3xl lg:text-5xl font-black w-[60%]  lg:w-[70%] text-blue z-30"
              >
                {benefit.title}
              </h2>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
