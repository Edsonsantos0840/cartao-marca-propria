'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img from './assets/logo.png'
import { FaBars, FaCaretDown } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[var(--indigo)] shadow-xl py-2 ">
      <div className="container md:mx-auto px-0 md:px-4 hidden md:flex lg:px-2 lg:flex lg:justify-center">
        <nav className="flex items-center justify-between md:gap-10">
          <Link href="/">
            <Image
              src={img}
              alt="BrasilCard"
              width={380}
              height={88}
              className=" p-0 md:w-[250px]  lg:w-[310px]"
            />
          </Link>
          <button
            className="text-white lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars text-2xl"></i>
          </button>

          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:w-full md:flex md:items-center w-auto md:gap-12 lg:gap-9`}
          >
            <ul className="flex flex-col lg:flex-row lg:ml-auto lg:space-x-6 text-white">
              
              <li className="group relative z-20">
                <a className="cursor-pointer font-extrabold flex items-center justify-center md:gap-4 md:text-xl ">MENU DO  <span className='text-[var(--green)] font-extrabold' > LOJISTA </span><FaCaretDown /></a>
                <div className="absolute hidden group-hover:block bg-white text-black shadow-lg mt-0 p-2 rounded-sm">
                  <Link href="https://www.brasilcard.net/bca/cliente/certificado/" target='_blank' className="block px-1 py-2 hover:scale-110 hover:bg-slate-100">Login Lojista</Link>
                  <Link href="https://www.brasilcard.net/bca/cliente/login?page=desbloqueioCartao" target='_blank' className="block px-1 py-2 hover:scale-110 hover:bg-slate-100">Desbloqueie o cartão</Link>
                  <Link href="https://www.brasilcard.net/bca/cliente/buscaLocais/locais" target='_blank' className="block px-1 py-2 hover:scale-110 hover:bg-slate-100">Onde comprar</Link>
                  <Link href="https://wa.link/146h7e" target='_blank' className="block px-1 py-2 hover:scale-110 hover:bg-slate-100">Indique um lojista</Link>
                  
                </div>
              </li>
            </ul>
            <Link
                  href="https://wa.link/146h7e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-white hidden md:block px-2 py-1 md:px-4 md:py-2 bg-white text-[var(--blue)] rounded-2xl shadow-md hover:bg-slate-200 lg:w-[29%]"
                >
                  Fale com representante
                </Link>
              <Link
                  href="https://bca-bio.grupoadrianocobuccio.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hidden lg:block btn btn-yellow text-center w-[29%] px-4 py-2 bg-[var(--warning)] text-[var(--blue)] rounded-2xl shadow-md hover:bg-[var(--orange)]"
                >
                  Solicite seu Cartão
              </Link>
          </div>
              

               {/* Botão do Menu para telas móveis */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <FaBars className="text-2xl" />
          </button>

          {/* Links de navegação */}
          <div className={`${isOpen ? 'block' : 'hidden'} mt-4`}>
            <ul className="flex flex-col space-y-4 text-white">
            </ul>
          </div>
        </nav>
      </div>
      
      <div className="container md:mx-auto px-1 md:px-4 md:hidden">
        <nav className="flex items-center justify-between flex-wrap">
          <Link href="/">
            <Image
              src={img}
              alt="BrasilCard"
              width={150}
              height={36}
              className=" p-0 md:w-[200px] "
            />
          </Link>
          <button
            className="text-white lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars text-2xl"></i>
          </button>

          <div
            className={`${
              isOpen ? 'hidden' : 'block'
            } md:w-full lg:flex lg:items-center lg:w-auto`}
          >
            <ul className="flex flex-col lg:flex-row lg:ml-auto lg:space-x-6 text-white">
              
              <li className="group relative z-20">
                <a className="cursor-pointer font-extrabold flex items-center justify-center gap-2 text-base">MENU DO  <span className='text-[var(--green)] font-extrabold' > LOJISTA </span><FaCaretDown /></a>
                <div className="absolute hidden group-hover:block bg-white text-black shadow-lg mt-0 p-2 rounded-sm">
                  <Link href="https://www.brasilcard.net/bca/cliente/certificado/" target='_blank' className="block px-1 py-2 hover:scale-110 hover:bg-slate-100">Login Lojista</Link>
                  <Link href="https://www.brasilcard.net/bca/cliente/login?page=desbloqueioCartao" target='_blank' className="block px-1 py-2 hover:scale-110 hover:bg-slate-100">Desbloqueie o cartão</Link>
                  <Link href="https://www.brasilcard.net/bca/cliente/buscaLocais/locais" target='_blank' className="block px-1 py-2 hover:scale-110 hover:bg-slate-100">Onde comprar</Link>
                  <Link href="https://wa.link/146h7e" target='_blank' className="block px-1 py-2 hover:scale-110 hover:bg-slate-100">Indique um lojista</Link>
                  
                </div>
              </li>
            </ul>
          </div>

               {/* Botão do Menu para telas móveis */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {/* <FaBars className="text-2xl" /> */}
          </button>

          {/* Links de navegação */}
          <div className={`${isOpen ? 'block' : 'hidden'} mt-4`}>
            <ul className="flex flex-col space-y-4 text-white">
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import img from './assets/logo.png';
// import { FaCaretDown } from "react-icons/fa6";
// import { FaBars } from 'react-icons/fa';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="bg-[var(--indigo)] shadow-xl py-2">
//       <div className="container mx-auto px-4">
//         <nav className="flex flex-col items-center justify-between">
//         <div className="flex md:items-center md:justify-between md:gap-32">
//             {/* Logo */}
//             <Link href="/">
//             <Image
//               src={img}
//               alt="BrasilCard"
//               width={200}
//               height={75}
//               className="p-2"
//             />
//           </Link>
          
//           {/* Botão do Menu para telas pequenas */}
//           <button
//             className="text-white lg:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle navigation"
//           >
//             <FaBars className="text-2xl" />
//           </button>
//         </div>

//           {/* Links de navegação */}
//           <div className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0`}>
//             <ul className="flex flex-col lg:flex-row lg:ml-auto lg:space-x-6 gap-4 text-white">
              
//               <li className="group relative z-20">
//                 <a className="cursor-pointer font-extrabold flex items-center justify-center gap-4">
//                   MENU DO <span className="text-[var(--green)] font-extrabold">LOJISTA</span><FaCaretDown />
//                 </a>
//                 <div className="absolute hidden group-hover:block bg-white text-black shadow-lg mt-0 p-2 rounded-sm w-40">
//                   <Link href="https://www.brasilcard.net/bca/cliente/certificado/" target='_blank' className="block px-2 py-1 hover:scale-110 hover:bg-slate-100">Login Lojista</Link>
//                   <Link href="https://www.brasilcard.net/bca/cliente/login?page=desbloqueioCartao" target='_blank' className="block px-2 py-1 hover:scale-110 hover:bg-slate-100">Desbloqueie o cartão</Link>
//                   <Link href="https://www.brasilcard.net/bca/cliente/buscaLocais/locais" target='_blank' className="block px-2 py-1 hover:scale-110 hover:bg-slate-100">Onde comprar</Link>
//                   <Link href="https://wa.link/146h7e" target='_blank' className="block px-2 py-1 hover:scale-110 hover:bg-slate-100">Indique um lojista</Link>
//                 </div>
//               </li>
//               <li className='py-3 w-full md-[60%]'>
//                 <a
//                   href="https://wa.link/146h7e"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn btn-white w-full md-[60%] px-4 py-3 md:px-4 md:py-2 bg-white text-[var(--blue)] rounded-2xl shadow-md hover:bg-slate-200"
//                 >
//                   Fale com um representante
//                 </a>
//               </li>
              
//               <li className='py-3 w-full md-[60%]'>
//                 <a
//                   href="https://bca-bio.grupoadrianocobuccio.com.br/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn btn-yellow px-4 py-3 w-full md-[60%] md:px-4 md:py-2 bg-[var(--warning)] text-[var(--blue)] rounded-2xl shadow-md hover:bg-[var(--orange)]"
//                 >
//                   Solicite seu Cartão
//                 </a>
//               </li>
//             </ul>
//           </div>
          
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
