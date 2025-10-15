// Módulos
import Image from "next/image";
import Link from "next/link";
// Componentes
import { servicesData } from "../fields/ListaVantagens";

export default function CardServiços() {
  return (
    <section className="py-8 bg-gray-50" aria-label="Serviços da BrasilCard">
      <div className="container max-w-[1200px] mx-auto px-4">
        <h3 className="text-center text-[1.6rem] md:text-3xl font-black text-blue mb-4">
          Serviços que vão facilitar sua vida!
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-6">
          {servicesData.map((service, index) => (
            <article
              key={index}
              className="bg-info rounded-lg shadow-md flex flex-col md:flex-row justify-between p-8 md:p-6"
            >
              <div className="md:w-1/2">
                <h2 className="text-4xl md:text-4xl text-[#34b2d8] ">
                  {service.title}
                </h2>
                <h2 className="text-4xl md:text-4xl text-blue font-black mb-1">
                  {service.title2}
                </h2>
                <p className="text-blue-900 text-xl md:text-2xl font-extrabold text-blue">
                  {service.description}
                </p>
                <p className="text-blue-900 text-xl md:text-2xl font-extrabold text-blue">
                  {service.description2}
                </p>

                {service.subtitle && (
                  <p className="text-blue-500 mt-3 text-base md:text-2xl text-orange">
                    {service.subtitle}
                  </p>
                )}

                {service.ajuste && (
                  <p className="text-red-900 mt-3 text-2xl md:text-3xl font-black text-red">
                    {service.ajuste}
                  </p>
                )}

                {service.link && (
                  <figure className="flex flex-wrap gap-2 mt-4">
                    {service.link.map((linkItem, idx) => (
                      <Link
                        key={idx}
                        href={linkItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={linkItem.alt}
                      >
                        <Image
                          src={linkItem.src}
                          alt={linkItem.alt}
                          width={120}
                          height={40}
                          quality={100}
                          className="rounded "
                        />
                      </Link>
                    ))}
                  </figure>
                )}
              </div>

              <figure className="mt-4 md:mt-0 md:w-[45%] hidden md:flex justify-center items-center ">
                <Image
                  src={service.image}
                  alt={`Imagem do serviço: ${service.title}`}
                  width={service.largura}
                  height={service.altura}
                  quality={100}
                  className="w-full h-auto object-contain"
                />
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
