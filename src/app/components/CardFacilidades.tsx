// Módulos
import Image from "next/image";
// Componentes
import { BenefitsCard } from "../fields/ListaVantagens";

export default function CardFacilidades() {
  return (
    <section
      className="pt-10 bg-[#0099ff1c]"
      aria-label="Facilidades e vantagens do cartão BrasilCard"
    >
      <div className="max-w-[1280px] mx-auto">
        <h3 className="text-center text-2xl md:text-4xl font-light text-blue-900 mb-10">
          Veja como é fácil fazer o seu BrasilCard e confira as vantagens:
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {BenefitsCard.map((benefit, index) => (
            <figure
              key={index}
              className="relative flex items-start justify-start p-4"
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
                className="absolute top-4 left-4 w-[120px] md:w-[160px]"
              />

              {/* Título */}
              <figcaption
                className="absolute left-[110px] top-[100px] md:left-[130px] md:top-[110px] 
                lg:left-[150px] lg:top-[140px] text-blue text-2xl md:text-3xl font-bold w-[60%]"
              >
                {benefit.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
