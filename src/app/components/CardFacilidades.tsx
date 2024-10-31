import Image, { StaticImageData } from "next/image";

import benefit from '../assets/benefit-1.png'
import benefit2 from '../assets/benefit-2.png'
import benefit3 from '../assets/benefit-3.png'
import benefit4 from '../assets/benefit-4.png'
import circuloAmarelo from '../assets/circle-yellow.png'

interface Benefit {
  icon: string | StaticImageData;
  title: string;
  description: string;
}

const BenefitsCard: Benefit[] = [
  {
    icon: benefit,
    title: "Sem comprovação de renda e endereço",
    description: "",
  },
  {
    icon: benefit2,
    title: "Sem anuidade e taxa de adesão",
    description: "",
  },
  {
    icon: benefit3,
    title: "A aprovação é instantânea",
    description: "",
  },
  {
    icon: benefit4,
    title: "Até 45 dias para pagar a fatura",
    description: "",
  },
];

const CardFacilidades: React.FC = () => {
  return (
    <div className="benefits pt-10 bg-[#0099ff1c]  " >
      <div className="container px-0 md:px-4">
        <h3 className="text-center text-2xl md:text-4xl font-extralight text-blue-900 lg:mb-2">
          Veja como é fácil fazer o seu BrasilCard e confira as vantagens:
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          {BenefitsCard.map((benefit, index) => (
            <div
              key={index}
              className="benefit relative  lg:p-6  flex flex-col items-start"
            >
              <Image
                src={circuloAmarelo}
                alt="Ícone círculo amarelo"
                width={280}
                height={280}
                className="lg:mb-4 lg:mt-4 "
              />
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={230}
                height={230}
                className="lg:mb-4 absolute left-[0px] "
              />
              <h2 className="text-3xl md:text-5xl font-extrabold absolute text-start w-[60%] text-[var(--blue)] left-[150px] top-[160px] md:left-[140px] md:top-[140px]">
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
