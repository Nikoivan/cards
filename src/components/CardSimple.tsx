import Card from "./Card";
import Img from "./Img";
import { CardBodyProps } from "./CardBody";
import { CardProps } from "./Card";

export default function CardSimple(props: Omit<CardProps, "children">) {
  return <Card {...props} />;
}
