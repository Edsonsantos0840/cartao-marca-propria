// Módulos
import Image from "next/image";
import Link from "next/link";
import { VantagensFields } from "../fields/MuitasVantagensField";

export default function CardMuitasVantagens() {
  return (
    <section className=" py-2 md:py-12 mx-6 lg:mx-0" aria-label="Vantagens">
      <div className="max-w-[1100px] mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {VantagensFields.map((item, index) => (
            <article key={`${index}-${item.text2}`} className="space-y-4 ">
              <div
                className={`flex flex-row items-center px-4 rounded-lg shadow-lg ${item.colorDiv}`}
              >
                <header className="flex-1">
                  <h2 className="text-xl md:text-[1.7rem] lg:text-2xl font-black leading-tight mb-2">
                    {item.text1}
                    <br />
                    {item.text2}
                  </h2>
                  <Link
                    href="https://wa.link/146h7e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-blue-100 text-base"
                    aria-label={`Saiba mais sobre: ${item.text1} ${item.text2}`}
                  >
                    Saiba mais
                  </Link>
                </header>

                <figure className="w-[200px] md:w-[300px] lg:w-[230px] flex justify-center">
                  <Image
                    src={item.src}
                    alt={`Ilustração: ${item.text2}`}
                    width={400}
                    height={300}
                    quality={100}
                    className="w-full max-w-xs md:max-w-sm "
                  />
                </figure>
              </div>

              <p
                className={`text-base md:text-[1.2rem] px-2  text-center ${item.colorP}`}
              >
                {item.textInfo}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
