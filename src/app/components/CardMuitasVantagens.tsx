//Módulos
import Image from "next/image";
import Link from "next/link";

const CardMuitasVantagens: React.FC = () => {
  return (
    <div className="banners bg-gray-100 py-4 md:py-8">
      <div className="container px-1 md:px-4 pb-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Banner Cliente */}
          <div className="custom banner-cliente  md:p-6  ">
            <div className="inner flex bg-[var(--blue)] pt-4 px-4 rounded-lg text-white shadow-lg">
              <div>
                <h4 className="text-xl md:text-2xl font-bold mb-4">
                  MUITAS VANTAGENS
                  <br />
                  PARA O CLIENTE
                </h4>
                <p className="mb-4">
                  <Link href="/" className=" hover:underline" passHref>
                    Saiba mais
                  </Link>
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/mulher.png"
                  alt="Vantagens para cliente"
                  width={627}
                  height={408}
                />
              </div>
            </div>
            <h5 className="mt-4 text-xl md:text-3xl text-[var(--blue)] text-start md:text-center">
              Quem tem Cartão BrasilCard tem crédito fácil para poder comprar
              com facilidade e muita tranquilidade para pagar.
            </h5>
          </div>

          {/* Banner Lojista */}
          <div className="custom banner-lojista px-1  md:p-6 ">
            <div className="inner flex bg-[var(--green)] md:pt-4 px-4 rounded-lg text-white shadow-lg">
              <div>
                <h4 className="text-xl md:text-2xl font-bold mb-4">
                  MUITAS FACILIDADES
                  <br />
                  PARA O LOJISTA
                </h4>
                <p className="mb-4">
                  <Link href="/" className=" hover:underline" passHref>
                    Saiba mais
                  </Link>
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/homem.png"
                  alt="Facilidades para lojista"
                  width={627}
                  height={408}
                />
              </div>
            </div>
            <h5 className="mt-4 text-xl md:text-3xl text-[var(--success)] lg:text-[var(--green)] md:text-center text-start">
              Quem oferece o cartão marca própria BrasilCard a seus clientes
              aumenta a fidelização, o ticket médio e garante o recebimento.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMuitasVantagens;
