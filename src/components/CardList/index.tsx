import { ReactNode } from "react";
import { Container, Title } from "./styles";

interface CardProps {
    title: string,
    icon?: ReactNode,
    handle?: () => void
}

export function CardList({...props} : CardProps) {

  return (
    <Container onClick={props.handle}>
      <div className="icon">
        {props.icon}
      </div>
     
      <Title>{props.title}</Title>
    </Container>
  )
}
