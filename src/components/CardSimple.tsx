import Card from "./Card";
import { CardProps } from "./Card";

export default function CardSimple(props: Omit<CardProps, "children">) {
  return <Card {...props} />;
}
