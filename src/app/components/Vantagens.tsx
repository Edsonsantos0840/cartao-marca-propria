import Image, { StaticImageData } from "next/image";

import loginLojista from "../assets/login-lojista.png";
import aprovação from "../assets/aprovacao-instantanea.png";
import antecipação from "../assets/antecipacao-de-recebiveis.png";
import queroSerCredenciado from "../assets/quero-ser-um-credenciado.png";
import loginCliente from "../assets/login-cliente.png";
import desbloqueio from "../assets/desbloqueio-de-cartao.png";
import saibaOndeComprar from "../assets/saiba-onde-comprar.png";
import negociacaoDeDebito from "../assets/negociacao-de-debito.png";
import segundaViaFatura from "../assets/segunda-via-fatura.png";
import Link from "next/dist/client/link";

interface Card {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  link: string;
}

const Vantagens: Card[] = [
  // Cards da área do Lojista
  {
    imageSrc: loginLojista,
    title: "Login do Lojista",
    description: "Login do\nLojista",
    link: "https://www.brasilcard.net/bca/lojista/login?f=login_lojista?b=m",
  },
  {
    imageSrc: aprovação,
    title: "Aprovação Instantânea",
    description: "Aprovação\ninstantânea",
    link: "https://www.brasilcard.net/bca/lojista/login?f=aprovacao_instantanea&amp;b=m",
  },
  {
    imageSrc: antecipação,
    title: "Antecipação de Recebíveis",
    description: "Antecipação\nde recebíveis",
    link: "https://www.brasilcard.net/bca/lojista/login?page=recebiveis",
  },
  {
    imageSrc: queroSerCredenciado,
    title: "Quero ser um credenciado",
    description: "Quero ser um\ncredenciado",
    link: "https://wa.link/146h7e",
  },
  {
    title: "Desbloqueio de Cartão",
    description: "Ative seu cartão.",
    imageSrc: desbloqueio,
    link: "https://www.brasilcard.net/bca/cliente/login?page=desbloqueioCartao",
  },
  {
    title: "Saiba Onde Comprar",
    description: "Descubra lojas parceiras.",
    imageSrc: saibaOndeComprar,
    link: "https://www.brasilcard.net/bca/cliente/buscaLocais/locais",
  },
  {
    title: "Negociação de Débito",
    description: "Regularize sua situação.",
    imageSrc: negociacaoDeDebito,
    link: "https://www.brasilcard.net/bca/cliente/negociacao",
  },
  {
    title: "2ª Via de Fatura",
    description: "Emita sua fatura.",
    imageSrc: segundaViaFatura,
    link: "https://www.brasilcard.net/bca/cliente/login",
  },
];

const CardGrid: React.FC = () => (
  <div className="container mx-auto px-4 py-6  ">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
      {Vantagens.map((card, index) => (
        <a
          key={index}
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex  items-center bg-slate-100  rounded-lg shadow-lg hover:scale-105 gap-2 hover:bg-slate-200 transition delay-150 duration-300 ease-in-out"
        >
          <div className="bg-slate-200 rounded-tl-md p-6 h-[100%] ">
            <Image
              src={card.imageSrc}
              alt={card.title}
              width={50}
              height={50}
            />
          </div>
          <h2 className="mt-4 text-center font-semibold  ">{card.title}</h2>
          {/* <p className="text-center text-sm">{card.description}</p> */}
        </a>
      ))}
    </div>
  </div>
);

export default CardGrid;
