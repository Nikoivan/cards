import { PropsWithChildren } from "react";
import CardBody, { CardBodyProps } from "./CardBody";

export type CardProps = {
  props: CardBodyProps;
  children?: JSX.Element;
};

export default function Card({ props, children }: CardProps) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {children}
      <CardBody {...props} />
    </div>
  );
}
