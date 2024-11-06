import loginLojista from "../../assets/login-lojista.png";
import aprovação from "../../assets/aprovacao-instantanea.png";
import antecipação from "../../assets/antecipacao-de-recebiveis.png";
import queroSerCredenciado from "../../assets/quero-ser-um-credenciado.png";
import desbloqueio from "../../assets/desbloqueio-de-cartao.png";
import saibaOndeComprar from "../../assets/saiba-onde-comprar.png";
import negociacaoDeDebito from "../../assets/negociacao-de-debito.png";
import segundaViaFatura from "../../assets/segunda-via-fatura.png";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";

import benefit from '../../assets/benefit-1.png'
import benefit2 from '../../assets/benefit-2.png'
import benefit3 from '../../assets/benefit-3.png'
import benefit4 from '../../assets/benefit-4.png'

import android from '../../assets/android.png'
import celular from '../../assets/celular-1.png'
import celular2 from '../../assets/celular-2.png'
import ios from '../../assets/ios.png'
import saqueNaHora from '../../assets/saque-na-hora.png'
import aprovacaoInstantanea from '../../assets/aprovacao-instantanea(1).png'


interface Card {
  title: string;
  imageSrc: string | StaticImageData;
  link: string;
}

interface Benefit {
  icon: string | StaticImageData;
  title: string ;
  description: string ;
}

interface Service {
  image: string | StaticImageData;
  title: string;
  description: string;
  subtitle?: string;
  ajuste?: string;
  largura?: number;
  altura?: number;
  mdlargura?: string;
  mdaltura?: string;
  link?: {
    href: string;
    src: string | StaticImageData;
    alt: string;
  }[];
}
const vantagens: Card[] = [
  // Cards da área do Lojista
  {
    imageSrc: loginLojista,
    title: "Login do Lojista",
    link: "https://www.brasilcard.net/bca/lojista/login?f=login_lojista?b=m",
  },
  {
    imageSrc: aprovação,
    title: "Aprovação Instantânea",
    link: "https://www.brasilcard.net/bca/lojista/login?f=aprovacao_instantanea&amp;b=m",
  },
  {
    imageSrc: antecipação,
    title: "Antecipação de Recebíveis",
    link: "https://www.brasilcard.net/bca/lojista/login?page=recebiveis",
  },
  {
    imageSrc: queroSerCredenciado,
    title: "Quero ser um credenciado",
    link: "https://wa.link/146h7e",
  },
  {
    title: "Desbloqueio de Cartão",
    imageSrc: desbloqueio,
    link: "https://www.brasilcard.net/bca/cliente/login?page=desbloqueioCartao",
  },
  {
    title: "Saiba Onde Comprar",
    imageSrc: saibaOndeComprar,
    link: "https://www.brasilcard.net/bca/cliente/buscaLocais/locais",
  },
  {
    title: "Negociação de Débito",
    imageSrc: negociacaoDeDebito,
    link: "https://www.brasilcard.net/bca/cliente/negociacao",
  },
  {
    title: "2ª Via de Fatura",
    imageSrc: segundaViaFatura,
    link: "https://www.brasilcard.net/bca/cliente/login",
  },
];

const BenefitsCard: Benefit[] = [
  {
    icon: benefit,
    title: "Sem comprovação de renda e endereço",
    description: "",
  },
  {
    icon: benefit2,
    title: "Sem anuidade e taxa de adesão",
    description: "",
  },
  {
    icon: benefit3,
    title: "A aprovação é instantânea",
    description: "",
  },
  {
    icon: benefit4,
    title: "Até 45 dias para pagar a fatura",
    description: "",
  },
];

const servicesData: Service[] = [
  {
    image: celular,
    title: "Aplicativo Brasilcard",
    description: "Informações online na palma da mão.",
    subtitle: "Baixe gratuitamente nas plataformas",
    largura: 130 ,
    altura: 245,
    link: [
      {
        href: "",
        src: android,
        alt: "Android",
      },
      {
        href: "",
        src: ios,
        alt: "iOS",
      },
    ],
  },
  {
    image: saqueNaHora,
    title: "Precisou de dinheiro?",
    description: "Com o Saque na Hora você pode retirar até 40%",
    ajuste: " do seu limite",
    largura: 209,
    altura: 268,
  },
  {
    image: aprovacaoInstantanea,
    title: "Aprovação Instantânea ",
    description: "O cartão é aprovado em apenas ",
    ajuste: "00:01 segundo.",
    largura: 190,
    altura: 110,
  },
  {
    image: celular2,
    title: "Recarga para celular",
    description:
      "Basta enviar um SMS GRATUITO com a palavra BCARGA para o",
      ajuste: " número 28595",
      largura: 180 ,
    altura: 239,
  },
];

export  { vantagens, BenefitsCard, servicesData}