"use client";
//Módulos.
import Link from "next/link";
import Image from "next/image";
//Ícone.
import { FaCaretDown } from "react-icons/fa6";
//componentes.
import { whats } from "../fields/ListaRepresentante";
import { NaveFields } from "../fields/NaveFields";

export default function Navbar() {

  return (
    <aside className="bg-blue shadow-xl py-2 *:#8f1c1c ">
        <nav className="flex items-center justify-between m-auto  max-w-[1200px] px-2 md:px-4 lg:px-0 ">
          {/* Logo da Brasilcard */}
          <figure className="relative w-[150px] h-[50px] md:w-[250px] xl:w-[300px]">
            <Image
              src="/assets/logo.png"
              alt="BrasilCard"
              role="presentation"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={100}
              priority
              aria-hidden="true"
              className=" p-0 "
            />
          </figure>
          {/*------------------------- Controle para telas grandes.  ------------------------ */}

          <div
            className={` md:w-full flex items-center w-auto md:gap-12 lg:gap-9`}
          >
            <section className="flex flex-col lg:flex-row lg:ml-auto lg:space-x-6 text-white gap-6">
              <div className="group relative z-20">
                <h2 className="cursor-pointer font-bold alinha3 gap-2 md:gap-4 lg:gap-2 md:text-lg ">
                  MENU DO
                  <span className="text-green font-bold">LOJISTA</span>
                  <FaCaretDown />
                </h2>
                <ul className="absolute hidden group-hover:block bg-white text-black shadow-lg mt-0 p-2 rounded-sm">
                  {NaveFields.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        target="_blank"
                        className="lks"
                        rel="noopener noreferrer"
                      >
                       {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <Link
              href={whats}
              target="_blank"
              rel="noopener noreferrer"
              className=" btn2 bg-white text-blue hover:bg-slate-200 "
            >
              Fale com representante
            </Link>
            <Link
              href="https://bca-bio.grupoadrianocobuccio.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn2 md:hidden xl:block bg-warning text-blue hover:bg-orange"
            >
              Solicite seu Cartão
            </Link>
          </div>
        </nav>
    </aside>
  );
};

 
