//Módulos
import Image from "next/image";
//Componentes
import { BenefitsCard } from "./arquivos/ArquivoVantagens";

const CardFacilidades: React.FC = () => {
  return (
    <div className="benefits pt-10 bg-[#0099ff1c]  " >
      <div className="container px-0 md:px-4">
        <h3 className="text-center text-2xl md:text-4xl font-extralight text-blue-900 lg:mb-2">
          Veja como é fácil fazer o seu BrasilCard e confira as vantagens:
        </h3>
        {/* //Cards Vantagens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          {BenefitsCard.map((benefit, index) => (
            <div
              key={index}
              className="benefit relative  lg:p-6  flex flex-col items-start"
            >
              <Image
                src='/circle-yellow.png'
                alt="Ícone círculo amarelo"
                width={207}
                height={207}
                className="lg:mb-4 md:w-[250px] lg:mt-4 "
              />
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={150}
                height={150}
                className="lg:mb-4 absolute md:w-[180px] left-[0px] "
              />
              <h2 className="text-2xl md:text-4xl lg:text-4xl font-extrabold absolute text-start w-[60%] text-[var(--blue)] left-[120px] top-[90px] md:left-[140px] md:top-[100px] lg:top-[140px]">
                {benefit.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardFacilidades;
