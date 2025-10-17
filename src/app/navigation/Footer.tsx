// Módulo
import Link from "next/link";
// Ícones
import {
  NaveInstitucionalFields,
  NaveLogistaFields,
  NaveSociaisFields,
} from "../fields/FooterFields";

export default function Footer() {
  return (
    <footer className="bg-blue text-white text-sm ">
      {/* Navegação Principal */}
      <div className=" max-w-[1100px] mx-auto px-4 pt-10 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Menu do Lojista */}

          <aside>
            <h6 className="text-lg font-bold uppercase mb-4">
              Menu do Lojista
            </h6>
            <nav
              className="flex flex-col space-y-2"
              aria-label="Menu do Lojista"
            >
              {NaveLogistaFields.map((link, index) => (
                <Link
                  key={`${index}-${link.text}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Menu Institucional */}
          <aside className=" lg:mx-auto">
            <h6 className="text-lg font-bold uppercase mb-4">
              Menu Institucional
            </h6>
            <nav
              className="flex flex-col space-y-2"
              aria-label="Menu Institucional"
            >
              {NaveInstitucionalFields.map((link, index) => (
                <Link
                  key={`${index}-${link.text}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Redes Sociais */}
          <aside className="lg:mx-auto">
            <h6 className="text-lg font-bold uppercase mb-4">Redes Sociais</h6>
            <nav
              className="flex items-center space-x-5 text-2xl"
              aria-label="Redes Sociais"
            >
              {NaveSociaisFields.map((link, index) => (
                <Link
                  key={`${index}-${link.href}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.ico}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      </div>

      <hr className="border-white/20 mx-4" />

      {/* Rodapé Informativo */}
      <address className="bg-blue py-6 max-w-[1100px] mx-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 justify-between items-start lg:items-center gap-6 text-xs">
          <div className="space-y-1">
            <p>© BrasilCard {new Date().getFullYear()}</p>
            <p>Avenida Jorge Vieira, 257 - Centro, Monte Belo/MG</p>
            <p>Rua Paracatu, 1201 - Santo Agostinho, Belo Horizonte/MG</p>
            <p>Rua Conselheiro Saraiva, 207 - Santana, São Paulo/SP</p>
          </div>
          <div></div>
          <div className="lg:mx-auto">
            <p className="">
              Desenvolvido por:{"   "}
              <Link
                href="https://protifolio-eta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline  text-base hover:text-[#f8c538] hover:scale-105 transition pl-2"
              >
                EPS Soluções
              </Link>
            </p>
          </div>
        </div>
      </address>
    </footer>
  );
}
