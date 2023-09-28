export type CardBodyProps = {
  title: string;
  text: string;
  href: string;
  ancorText: string;
};

export default function CardBody({
  title,
  text,
  href,
  ancorText,
}: CardBodyProps) {
  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href={href} className="btn btn-primary">
        {ancorText}
      </a>
    </div>
  );
}
