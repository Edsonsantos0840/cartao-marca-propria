import Image, { StaticImageData } from "next/image";

import android from '../assets/android.png'
import celular from '../assets/celular-1.png'
import celular2 from '../assets/celular-2.png'
import ios from '../assets/ios.png'
import saqueNaHora from '../assets/saque-na-hora.png'
import aprovacaoInstantanea from '../assets/aprovacao-instantanea(1).png'

interface Service {
  image: string | StaticImageData;
  title: string;
  description: string;
  subtitle?: string;
  ajuste?: string;
  link?: {
    href: string;
    src: string | StaticImageData;
    alt: string;
  }[];
}

const servicesData: Service[] = [
  {
    image: celular,
    title: "Aplicativo Brasilcard",
    description: "Informações online na palma da mão.",
    subtitle: "Baixe gratuitamente nas plataformas",
    link: [
      {
        href: "",
        src: android,
        alt: "Android",
      },
      {
        href: "",
        src: ios,
        alt: "iOS",
      },
    ],
  },
  {
    image: saqueNaHora,
    title: "Precisou de dinheiro?",
    description: "Com o Saque na Hora você pode retirar até 40% do seu limite.",
  },
  {
    image: aprovacaoInstantanea,
    title: "Aprovação Instantânea BrasilCard",
    description: "O cartão é aprovado em apenas ",
    ajuste: "00:01 segundo."
  },
  {
    image: celular2,
    title: "Recarga para celular",
    description:
      "Basta enviar um SMS GRATUITO com a palavra BCARGA para o número 28595.",
  },
];

const CardServiços: React.FC = () => {
  return (
    <div className="services py-10 bg-gray-50">
      <div className="container mx-auto ">
        <h3 className="text-center text-xl md:text-3xl font-black text-[var(--blue)] mb-8">
          Serviços que vão facilitar sua vida!
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center ">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-[var(--info)] px-3 md:px-8 py-2 rounded-lg shadow-lg text-center flex"
            >
              <div className="w-[60%] md:w-[50%] text-start">
                <h2 className=" text-2xl md:text-3xl font-black text-[var(--orange)] mb-2">
                {service.title}
              </h2>
              <h4 className="text-blue-900 text-xl font-extrabold">{service.description}</h4>

              {service.subtitle && (
                <h5 className="text-blue-500 mt-3 mb-2 text-xl">
                  {service.subtitle}
                </h5>
                
              )}
              <h3 className="text-red-900 mt-3 mb-2 text-2xl font-black">{service.ajuste}</h3>

              {service.link && (
                <div className="flex justify-center  mt-1">
                  {service.link.map((linkItem, idx) => (
                    <a
                      key={idx}
                      href={linkItem.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={linkItem.src}
                        alt={linkItem.alt}
                        width={150}
                        height={20}
                        className="rounded"
                      />
                    </a>
                  ))}
                </div>
              )}
                </div>
              <Image
                src={service.image}
                alt={service.title}
                width={150}
                height={20}
                className="mx-auto md:mb-4"
              />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardServiços;
