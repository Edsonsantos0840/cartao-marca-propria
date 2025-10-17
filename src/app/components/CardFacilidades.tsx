// Módulos
import Image from "next/image";
// Componentes
import { BenefitsCard } from "../fields/ListaVantagens";

export default function CardFacilidades() {
  return (
    <section
      className="mt-10 relative bg-[#0099ff1c] bg-center bg-no-repeat py-4 "
      style={{
        backgroundImage: `url('/bg-fundo.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-label="Facilidades e vantagens do cartão BrasilCard"
    >
      <div className="relative max-w-[1100px] mx-auto z-30">
        <h3 className="text-center font-light text-[1.7rem] md:text-4xl text-blue text-shadow-lg px-6 lg:px-0  pt-6 md:pt-2 lg:py-10 ">
          Veja como é fácil fazer o seu BrasilCard e confira as vantagens:
        </h3>

        <article className="grid grid-cols-1 lg:grid-cols-2 -space-y-2 lg:gap-y-32 lg:gap-x-2">
          {BenefitsCard.map((benefit, index) => (
            <div key={index} className="relative">
              <figure className="relative flex items-start justify-start w-[150px] md:w-[180px] lg:w-[300px] lg:-left-5">
                {/* Círculo de fundo */}
                <Image
                  src="/circle-yellow.png"
                  alt=""
                  width={200}
                  height={200}
                  quality={100}
                  className="w-[200px] "
                  aria-hidden="true"
                />

                {/* Ícone central */}
                <Image
                  src={benefit.icon}
                  alt={`Ícone ${benefit.title}`}
                  width={150}
                  height={150}
                  quality={100}
                  className="absolute -top-5 -left-2 md:-left-4 lg:-left-4 w-[130px] md:w-[160px] "
                />
              </figure>
              {/* Título */}
              <h2
                className="absolute left-[100px] top-[50px] md:left-[130px] md:top-[70px] 
                lg:left-[120px] lg:top-[60px] text-3xl md:text-4xl lg:text-5xl font-black w-[60%] md:w-[50%]  lg:w-[80%] text-blue z-30"
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
