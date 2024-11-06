"use client";
//Módulos.
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import img from "./assets/logo.png";
//Ícone.
import { FaCaretDown } from "react-icons/fa6";
//componentes.
import { whats } from "./components/listas/ListaRepresentante";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[var(--indigo)] shadow-xl py-2 ">
      <div className="container md:mx-auto px-0 md:px-4 flex lg:px-2 lg:flex lg:justify-center">
        <nav className="flex items-center justify-between gap-10">
          {/* Logo da Brasilcard */}
          <Link href="/">
            <Image
              src={img}
              alt="BrasilCard"
              width={150}
              height={36}
              className=" p-0 md:w-[250px] xl:w-[300px]"
            />
          </Link>
          {/*------------------------- Controle para telas grandes.  ------------------------ */}

          <div
            className={`${
              isOpen ? "hidden" : "block"
            } md:w-full flex items-center w-auto md:gap-12 lg:gap-9`}
          >
            <ul className="flex flex-col lg:flex-row lg:ml-auto lg:space-x-6 text-white gap-6">
              <li className="group relative z-20">
                <Link
                  className="cursor-pointer font-extrabold alinha3 gap-2 md:gap-4 lg:gap-2 md:text-lg "
                  href={"/"}
                >
                  MENU DO
                  <span className="text-[var(--green)] font-extrabold">
                    LOJISTA
                  </span>
                  <FaCaretDown />
                </Link>
                <div className="absolute hidden group-hover:block bg-white text-black shadow-lg mt-0 p-2 rounded-sm">
                  <Link
                    href="https://www.brasilcard.net/bca/cliente/certificado/"
                    target="_blank"
                    className="lks"
                  >
                    Login Lojista
                  </Link>
                  <Link
                    href="https://www.brasilcard.net/bca/cliente/login?page=desbloqueioCartao"
                    target="_blank"
                    className="lks"
                  >
                    Desbloqueie o cartão
                  </Link>
                  <Link
                    href="https://www.brasilcard.net/bca/cliente/buscaLocais/locais"
                    target="_blank"
                    className="lks"
                  >
                    Onde comprar
                  </Link>
                  <Link href={whats} target="_blank" className="lks">
                    Indique um lojista
                  </Link>
                </div>
              </li>
            </ul>
            <Link
              href={whats}
              target="_blank"
              rel="noopener noreferrer"
              className=" btn2 bg-white text-[var(--blue)] hover:bg-slate-200 md:[w-50%]"
            >
              Fale com representante
            </Link>
            <Link
              href="https://bca-bio.grupoadrianocobuccio.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn2 md:hidden xl:block bg-[var(--warning)] text-[var(--blue)] hover:bg-[var(--orange)]"
            >
              Solicite seu Cartão
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
