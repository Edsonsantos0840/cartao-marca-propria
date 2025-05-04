import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { email, linkedin, whats } from "./ListaRepresentante";
import { ReactElement } from "react";
import { TfiEmail } from "react-icons/tfi";

interface NaveProps {
    href: string;
    text?: string;
    ico?: ReactElement
  }
  
  export const NaveLogistaFields : NaveProps[] =  [
    {
      href: whats,
      text: 'Seja um credenciado'
    },
    {
      href: "https://www.brasilcard.net/bca/lojista/login?f=login_lojista",
      text: 'Login do Lojista'
    },
    {
      href: "https://www.brasilcard.net/bca/lojista/login?f=aprovacao_instantanea",
      text: 'Aprovação instantânea'
    },
  ];

  export const NaveInstitucionalFields : NaveProps[] =  [
    {
      href: "https://grupoadrianocobuccio.com.br/",
      text: 'Grupo Adriano Cobuccio'
    },
    {
      href: "https://www.brasilcard.net/ouvidoria.html",
      text: 'Ouvidoria'
    },
  ];

  export const NaveSociaisFields : NaveProps[] =  [
    {
      href: whats,
      ico: <FaWhatsapp className="hover:text-yellow-300 text-4xl hover:text-green-400 hover:scale-125 transition" />
    },
    {
      href: linkedin,
      ico: <FaLinkedinIn className="hover:text-yellow-300 text-4xl hover:text-blue-300 hover:scale-125 transition" />
    },
    {
      href: email,
      ico: <TfiEmail className="hover:text-yellow-300 text-4xl hover:scale-125 transition" />
    },
  ];
 