import { OrderList } from "../../components/OrderList";
import PieChart from "../../components/Pie";
import { Order } from "../../models/orders";
import { Orders } from "../../utils/db";
import { CardTotalValueOrder, Container, ContainerCards, ContainerChartStatus, ContainerTopCard, ContainerTotalValue, TitleCard, TotalValue } from "./styles";

export  function HomeDashboard() {
  const sumTotalValues = (orders: Order[]): number => {
    return orders.reduce((acc, order) => acc + order.valorTotal, 0);
  };

  const countOrders = (orders: Order[]): number => {
    return orders.length;
  };
  
  return (
    <Container>
      <ContainerCards>
      <ContainerChartStatus>
          <PieChart data={data} />
        </ContainerChartStatus>
        
        <CardTotalValueOrder>
          <ContainerTopCard>
            <TitleCard>Valor total</TitleCard>
          </ContainerTopCard>
        
          <ContainerTotalValue>
            <TotalValue>R$ {sumTotalValues(Orders).toFixed(2)}</TotalValue>
          </ContainerTotalValue>
        
        </CardTotalValueOrder>

        <CardTotalValueOrder>
          <ContainerTopCard>
            <TitleCard>Quantidade de pedidos (un)</TitleCard>
          </ContainerTopCard>
        
          <ContainerTotalValue>
            <TotalValue>{countOrders(Orders)}</TotalValue>
          </ContainerTotalValue>
        
        </CardTotalValueOrder>
      </ContainerCards>

      <OrderList />
    </Container>
  )
}

const data = [
  { value: 4, name: 'Rastreio e nota enviados' },
  { value: 3, name: 'Confirmação de Entrega' },
  { value: 3, name: 'Reembolso solicitado' },
  { value: 4, name: 'Problema na entrega' }
]