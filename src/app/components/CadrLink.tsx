import Link from "next/link";

interface PropsCadrLink {
    href: string,
    target: string,
    rel: string,
    texto: string
}

export default function CadrLink(props: PropsCadrLink) {
  return (
    <div className="flex items-center justify-center w-full">
        <Link
          href={props.href}
          target={props.target}
          rel={props.rel}
          className=" px-4 py-4 bg-[var(--warning)] text-xl text-[var(--blue)] rounded-2xl shadow-md hover:bg-[var(--yellow)] my-6 text-center  font-extrabold"
        >
          {props.texto}
        </Link>
      </div>
  )
}
