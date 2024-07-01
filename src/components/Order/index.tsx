import { useState } from "react";
import { Cell, Container, ContainerHeader, ContainerProd, ContainerProducts, ContainerStatus, TitleHeader } from "./styles";

interface Product {
  nome: string;
  valor: number;
}

interface Client {
  nome: string;
  email: string;
  cpf: string;
}

interface OrderProps {
  id: number;
  data: string;
  totalValue: number;
  status: string;
  statusId: number;
  client: Client;
  products: Product[];
}

export function Order({...props} : OrderProps) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  
  return (
    <Container >
      <ContainerHeader className="head" onClick={toggleDropdown}>
        <Cell>
          <TitleHeader>{props.client.nome}</TitleHeader> 
        </Cell>

        <Cell>
          <TitleHeader> R$ {props.totalValue}</TitleHeader>
        </Cell>
        
        <Cell>
          <ContainerStatus statusId={props.statusId}></ContainerStatus>
        </Cell>
      </ContainerHeader>

      {isDropdownVisible &&
        <ContainerProducts >
          {props.products.map(prod  => (
            <ContainerProd className="body-prod">
              <Cell>  
                <TitleHeader>{prod.nome}</TitleHeader> <TitleHeader>R$ {prod.valor}</TitleHeader>
            </Cell>
        </ContainerProd>
        ))}
      </ContainerProducts>
}
    </Container>
  )
}
