
import { StaticImageData } from "next/dist/shared/lib/get-img-props";

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
  title2?: string;
  description: string;
  description2?: string;
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
    imageSrc: '/assets/login-lojista.png',
    title: "Login do Lojista",
    link: "https://www.brasilcard.net/bca/lojista/login?f=login_lojista?b=m",
  },
  {
    imageSrc: '/assets/aprovacao-instantanea.png',
    title: "Aprovação Instantânea",
    link: "https://www.brasilcard.net/bca/lojista/login?f=aprovacao_instantanea&amp;b=m",
  },
  {
    imageSrc: '/assets/antecipacao-de-recebiveis.png',
    title: "Antecipação de Recebíveis",
    link: "https://www.brasilcard.net/bca/lojista/login?page=recebiveis",
  },
  {
    imageSrc: '/assets/quero-ser-um-credenciado.png',
    title: "Quero ser um credenciado",
    link: "https://wa.link/146h7e",
  },
  {
    title: "Desbloqueio de Cartão",
    imageSrc: '/assets/desbloqueio-de-cartao.png',
    link: "https://www.brasilcard.net/bca/cliente/login?page=desbloqueioCartao",
  },
  {
    title: "Saiba Onde Comprar",
    imageSrc: '/assets/saiba-onde-comprar.png',
    link: "https://www.brasilcard.net/bca/cliente/buscaLocais/locais",
  },
  {
    title: "Negociação de Débito",
    imageSrc: '/assets/negociacao-de-debito.png',
    link: "https://www.brasilcard.net/bca/cliente/negociacao",
  },
  {
    title: "2ª Via de Fatura",
    imageSrc: '/assets/segunda-via-fatura.png',
    link: "https://www.brasilcard.net/bca/cliente/login",
  },
];

const BenefitsCard: Benefit[] = [
  {
    icon: '/assets/benefit-1.png',
    title: "Sem comprovação de renda e endereço",
    description: "",
  },
  {
    icon: '/assets/benefit-2.png',
    title: "Sem anuidade e taxa de adesão",
    description: "",
  },
  {
    icon: '/assets/benefit-3.png',
    title: "A aprovação é instantânea",
    description: "",
  },
  {
    icon: '/assets/benefit-4.png',
    title: "Até 45 dias para pagar a fatura",
    description: "",
  },
];

const servicesData: Service[] = [
  {
    image: '/assets/celular-1.png',
    title: "Aplicativo ",
    title2: "Brasilcard",
    description: "Informações online ",
    description2: "na palma da mão.",
    subtitle: "Baixe gratuitamente nas plataformas",
    largura: 130 ,
    altura: 245,
    link: [
      {
        href: "",
        src: '/assets/android.png',
        alt: "Android",
      },
      {
        href: "",
        src: '/assets/ios.png',
        alt: "iOS",
      },
    ],
  },
  {
    image: '/assets/saque-na-hora.png',
    title: "Precisou ",
    title2: " de dinheiro?",
    description: "Com o Saque na Hora ",
    description2: "você pode retirar até 40%",
    ajuste: " do seu limite",
    largura: 209,
    altura: 268,
  },
  {
    image: '/assets/aprovacao-instantanea(1).png',
    title: "Aprovação ",
    title2: "Instantânea ",
    description: "O cartão é  ",
    description2: "aprovado em apenas ",
    ajuste: "00:01 segundo.",
    largura: 190,
    altura: 110,
  },
  {
    image: '/assets/celular-2.png',
    title: "Recarga para celular",
    title2: "para celular",
    description:
      "Basta enviar um SMS GRATUITO ",
      description2:
      " com a palavra BCARGA para o",
      ajuste: " número 28595",
      largura: 180 ,
    altura: 239,
  },
];

export  { vantagens, BenefitsCard, servicesData}