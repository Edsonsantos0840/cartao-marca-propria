//Módulos.
import Image from "next/image";
import Link from "next/link";
//Componentes.
import { servicesData } from "./listas/ListaVantagens";

const CardServiços: React.FC = () => {
  return (
    <div className="services py-5 md:py-10 bg-gray-50 ">
      <div className="container mx-auto ">
        <h3 className="text-center text-xl md:text-3xl font-black text-[var(--blue)] mb-5 md:mb-8">
          Serviços que vão facilitar sua vida!
        </h3>
        {/* //Cards Serviços. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center ">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-[var(--info)] px-3 md:pl-8 py-2 rounded-lg shadow-lg flex justify-between"
            >
              <div className="w-[55%] md:w-[50%] text-start">
                <h2 className=" text-2xl md:text-4xl font-black text-[var(--orange)] mb-2">
                  {service.title}
                </h2>
                <h4 className="text-blue-900 text-lg md:text-2xl font-extrabold">
                  {service.description}
                </h4>

                {service.subtitle && (
                  <h5 className="text-blue-500 mt-3 mb-2 text-xl md:text-2xl">
                    {service.subtitle}
                  </h5>
                )}
                <h3 className="text-red-900 mt-3 mb-2 text-2xl md:text-3xl font-black">
                  {service.ajuste}
                </h3>

                {service.link && (
                  <div className="flex mt-1 ">
                    {service.link.map((linkItem, idx) => (
                      <Link
                        key={idx}
                        href={linkItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={linkItem.src}
                          alt={linkItem.alt}
                          width={100}
                          height={40}
                          className="rounded left-2 "
                        />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Image
                src={service.image}
                alt={service.title}
                width={service.largura}
                height={service.altura}
                className={`md:mb-4 m-0 md:w-[32%] lg:w-[50%] xl:w-[35%] `}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardServiços;
