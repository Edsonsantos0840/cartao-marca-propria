import Link from "next/link";

interface PropsCardLink {
    href: string,
    target: string,
    rel: string,
    texto: string
}

export default function CardLink(props: PropsCardLink) {
  return (
    <div className="flex items-center justify-center w-full">
        <Link
          href={props.href}
          target={props.target}
          rel={props.rel}
          className=" px2 py-2 md:px-4 md:py-4 bg-[var(--warning)] text-md md:text-xl text-[var(--blue)] rounded-2xl shadow-md hover:bg-[var(--yellow)] my-3 md:my-6 text-center  font-extrabold w-[98%] md:w-[60%]"
        >
          {props.texto}
        </Link>
      </div>
  )
}
