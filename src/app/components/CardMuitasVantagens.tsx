// Módulos
import Image from "next/image";
import Link from "next/link";
import { VantagensFields } from "../fields/MuitasVantagensField";

export default function CardMuitasVantagens() {
  return (
    <section className="bg-gray-100 py-6 md:py-12">
      <div className="max-w-[1200px] mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {VantagensFields.map((item, index) => (
            <article key={`${index}-${item.text2}`} className="space-y-4">
              <div
                className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg shadow-lg ${item.colorDiv}`}
              >
                <header className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
                    {item.text1}
                    <br />
                    {item.text2}
                  </h2>
                  <Link
                    href="https://wa.link/146h7e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-100"
                    aria-label={`Saiba mais sobre: ${item.text1} ${item.text2}`}
                  >
                    Saiba mais
                  </Link>
                </header>

                <figure className="w-full md:w-auto flex justify-center">
                  <Image
                    src={item.src}
                    alt={`Ilustração: ${item.text2}`}
                    width={400}
                    height={300}
                    quality={100}
                    className="w-full max-w-xs md:max-w-sm h-auto"
                  />
                </figure>
              </div>

              <p
                className={`text-xl md:text-2xl font-medium text-start md:text-center ${item.colorP}`}
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
