import { PropsWithChildren } from "react";

type CardBodyProps = {
  title: string;
  text: string;
  href: string;
  ancorText: string;
};

export type CardProps = PropsWithChildren<CardBodyProps>;

export default function Card({
  title,
  text,
  href,
  ancorText,
  children,
}: CardProps) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={href} className="btn btn-primary">
          {ancorText}
        </a>
      </div>
    </div>
  );
}
