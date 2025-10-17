// Módulos
import Image from "next/image";
import Link from "next/link";
// Componentes
import { servicesData } from "../fields/ListaVantagens";

export default function CardServiços() {
  return (
    <section className="py-8  bg-gray-50  mx-auto" aria-label="Serviços da BrasilCard ">
      <div className="px-4 lg:px-0">
        <h3 className="text-center text-[1.6rem] md:text-3xl font-black text-blue mb-4 md:my-16 lg:my-12">
          Serviços que vão facilitar sua vida!
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-6 lg:px-0 ">
          {servicesData.map((service, index) => (
            <article
              key={index}
              className={`relative bg-info  rounded-lg shadow-md flex flex-col md:flex-row justify-between p-8 md:p-12  mb-6 `}
            >
              <div className={`max-w-[1100px] lg:relative ${service.left} `}>
                <h2 className="text-4xl md:text-5xl lg:text-4xl text-[#34b2d8] ">
                  {service.title}
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-4xl text-blue font-black mb-1">
                  {service.title2}
                </h2>
                <p className="text-blue-900 text-xl md:text-2xl lg:text-xl font-extrabold text-blue">
                  {service.description}
                </p>
                <p className="text-blue-900 text-xl md:text-2xl lg:text-xl font-extrabold text-blue">
                  {service.description2}
                </p>

                {service.subtitle && (
                  <p className="text-blue-500 mt-3 text-sm md:text-base lg:text-smtext-red">
                    {service.subtitle}
                  </p>
                )}

                {service.ajuste && (
                  <p className="text-red-900 mt-3 text-2xl md:text-3xl font-black text-red">
                    {service.ajuste}
                  </p>
                )}

                {service.link && (
                  <figure className="flex gap-2 mt-4">
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

                <figure className={`hidden  md:flex absolute right-5 md:-right-3 ${service.styl}`}>
                <Image
                  src={service.image}
                  alt={`Imagem do serviço: ${service.title}`}
                  width={220}
                  height={220}
                  quality={100}
                  className=" object-contain md:w-[320px] md:h-[320px]"
                />
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
