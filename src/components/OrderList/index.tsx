import { Orders } from "../../utils/db";
import { Order } from "../Order";
import { Container, ContainerHeader, ContainerOrders, TitleOrderList } from "./styles";

export function OrderList() {
  
  return (
    <Container>
      <ContainerHeader>
        <TitleOrderList>Pedidos</TitleOrderList>
      </ContainerHeader>

      <ContainerOrders>
        {Orders.map(order => (
          <Order 
            key={order.id} 
            id={order.id}
            data={order.data}
            totalValue={order.valorTotal}
            status={order.status}
            statusId={order.statusId !== undefined ? order.statusId : 0}
            client={order.cliente}
            products={order.produtos}/>
        ))}
      </ContainerOrders>
    </Container>
    )
}
