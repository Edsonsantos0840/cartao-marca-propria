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
          className=" btn"
        >
          {props.texto}
        </Link>
      </div>
  )
}
