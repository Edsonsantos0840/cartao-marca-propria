import Link from "next/link";

interface PropsCardLink {
  href: string;
  target: string;
  rel: string;
  texto: string;
}

export default function CardLink(props: PropsCardLink) {
  return (
    <div className="alinha3 w-full">
      <Link
        href={props.href}
        target={props.target}
        rel={props.rel}
        className=" btn"
      >
        {props.texto}
      </Link>
    </div>
  );
}
