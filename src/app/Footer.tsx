import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--blue)] text-white">
      {/* Menus de Navegação */}
      <div className="container mx-auto px-4 pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Menu do Lojista */}
          <div>
            <h6 className="text-lg font-bold uppercase mb-4">
              Menu do Lojista
            </h6>
            <nav className="flex flex-col space-y-2 relative z-20">
              <Link href="https://wa.link/146h7e">Seja um credenciado</Link>
              <Link href="https://www.brasilcard.net/bca/lojista/login?f=login_lojista">
                Login do Lojista
              </Link>
              <Link href="https://www.brasilcard.net/bca/lojista/login?f=aprovacao_instantanea">
                Aprovação instantânea
              </Link>
            </nav>
          </div>

          {/* Menu Institucional */}
          <div>
            <h6 className="text-lg font-bold uppercase mb-4">
              Menu Institucional
            </h6>
            <nav className="flex flex-col space-y-2">
              <Link href="https://grupoadrianocobuccio.com.br/">
                Grupo Adriano Cobuccio
              </Link>
              <Link href="https://www.brasilcard.net/ouvidoria.html">
                Ouvidoria
              </Link>
            </nav>
          </div>

          {/* Redes Sociais */}
          <div>
            <h6 className="text-lg font-bold uppercase mb-4">Redes Sociais</h6>
            <nav className="flex space-x-4 text-2xl">
              <div
                className="p-2 md:p-2 text-7xl rounded-lg shadow-md  hover:scale-125 cursor-pointer ease-in duration-500
                  text-[var(--base)] bg-[var(--corPrincipalEnd)] hover:text-[var(--corPrincipalEnd)] hover:bg-[var(--opacityAlert)] "
              >
                <Link href="https://wa.link/146h7e" target="_blank">
                  <FaWhatsapp className="hover:text-[var(--corPrincipalEnd)] text-2xl md:text-3xl lg:text-4xl " />
                </Link>
              </div>

              <div
                className="p-2 md:p-2 text-7xl rounded-lg shadow-md  hover:scale-125 cursor-pointer ease-in duration-500
                  text-[var(--base)] bg-[var(--corPrincipalEnd)] hover:text-[var(--corPrincipalEnd)] hover:bg-[var(--opacityAlert)] "
              >
                <Link
                  href="https://www.linkedin.com/in/f-eugenio/"
                  target="_blank"
                >
                  <FaLinkedinIn className="hover:text-[var(--corPrincipalEnd)] text-2xl md:text-3xl lg:text-4xl " />
                </Link>
              </div>

              <div
                className="p-2 md:p-2 text-7xl rounded-lg shadow-md  hover:scale-125 cursor-pointer ease-in duration-500
                  text-[var(--base)] bg-[var(--corPrincipalEnd)] hover:text-[var(--corPrincipalEnd)] hover:bg-[var(--opacityAlert)] "
              >
                <Link href="mailto:f.eugenio63@gmail.com">
                  <TfiEmail className="hover:text-[var(--corPrincipalEnd)] text-2xl md:text-3xl lg:text-4xl " />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <hr className="mt-6" />

      {/* Informações de Contato e Direitos Reservados */}
      <div className="bg-[var(--blue)] py-4 mt-6">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
          <div>
            <p>© BrasilCard 2024</p>
            <p>Avenida Jorge Vieira, 257 - Centro, Monte Belo/MG</p>
            <p>Rua Paracatu, 1201 - Santo Agostinho, Belo Horizonte/MG</p>
            <p>Rua Conselheiro Saraiva, 207 - Santana, São Paulo/SP</p>
          </div>
          <div className="mt-4 lg:mt-0">
            <p>
              Desenvolvido por:{" "}
              <Link
                href="https://portifolio-beta-gules.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                EPS Soluções.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
