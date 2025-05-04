interface VantagensProps{
    colorDiv: string;
    colorP: string;
    text1: string;
    text2: string;
    src: string;
    textInfo: string;
}

export const VantagensFields: VantagensProps[] = [
    {
      colorDiv: 'bg-blue text-white',
      text1: 'MUITAS VANTAGENS',
      text2: 'PARA O CLIENTE',
      src: '/mulher.png',
      colorP: 'text-blue',
      textInfo: 'Quem tem Cartão BrasilCard tem crédito fácil para poder comprar com facilidade e muita tranquilidade para pagar.'
    },
    {
      colorDiv: 'bg-green text-white',
      text1: 'MUITAS FACILIDADES',
      text2: 'PARA O LOJISTA',
      src: '/homem.png',
      colorP: 'text-success',
      textInfo: 'Quem oferece o cartão marca própria BrasilCard a seus clientes aumenta a fidelização, o ticket médio e garante o recebimento.'
    },
]