import { ReactNode } from "react";
import { Container, Title } from "./styles";

interface CardProps {
    title: string,
    icon?: ReactNode
}

export function CardList({...props} : CardProps) {
  return (
    <Container>
      <div className="icon">
        {props.icon}
      </div>
     
      <Title>{props.title}</Title>
    </Container>
  )
}
