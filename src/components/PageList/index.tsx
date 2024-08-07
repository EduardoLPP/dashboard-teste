import { CardList } from "../CardList";
import { Container } from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faArrowsDownToPeople } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

export function List() {
  let navigate = useNavigate()

  const handleNavigateDashboard = () => {
    navigate("/")
  }

  const handleNavigateNotFound = () => {
    navigate("/NotFound")
  }

  return (
    <Container>
        <CardList title="Dashboard" icon={<FontAwesomeIcon icon={ faHome } fontSize={20} color="2e1d6a" />} handle={handleNavigateDashboard} />

        <CardList title="Produtos" icon={<FontAwesomeIcon icon={ faTag } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Área de Membros" icon={<FontAwesomeIcon icon={ faGraduationCap } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Marketplace" icon={<FontAwesomeIcon icon={ faCartShopping } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Meus afiliados" icon={<FontAwesomeIcon icon={ faUser } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Vendas" icon={<FontAwesomeIcon icon={ faChartLine } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Assinaturas" icon={<FontAwesomeIcon icon={ faRetweet } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Financeiro" icon={<FontAwesomeIcon icon={ faCreditCard } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Relatórios" icon={<FontAwesomeIcon icon={ faChartSimple } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Colaboradores" icon={<FontAwesomeIcon icon={ faUsers } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Apps" icon={<FontAwesomeIcon icon={ faCube } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Indique e Ganhe 15%" icon={<FontAwesomeIcon icon={ faArrowsDownToPeople } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Ajuda" icon={<FontAwesomeIcon icon={ faCircleQuestion } fontSize={20} color="2e1d6a"/>}handle={handleNavigateNotFound} />

        <CardList title="Dashboard" icon={<FontAwesomeIcon icon={ faHome } fontSize={20} color="2e1d6a" />} handle={handleNavigateDashboard} />

        <CardList title="Produtos" icon={<FontAwesomeIcon icon={ faTag } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Área de Membros" icon={<FontAwesomeIcon icon={ faGraduationCap } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Marketplace" icon={<FontAwesomeIcon icon={ faCartShopping } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Meus afiliados" icon={<FontAwesomeIcon icon={ faUser } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Vendas" icon={<FontAwesomeIcon icon={ faChartLine } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Assinaturas" icon={<FontAwesomeIcon icon={ faRetweet } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Financeiro" icon={<FontAwesomeIcon icon={ faCreditCard } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Relatórios" icon={<FontAwesomeIcon icon={ faChartSimple } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Colaboradores" icon={<FontAwesomeIcon icon={ faUsers } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Apps" icon={<FontAwesomeIcon icon={ faCube } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Indique e Ganhe 15%" icon={<FontAwesomeIcon icon={ faArrowsDownToPeople } fontSize={20} color="2e1d6a"/>}  handle={handleNavigateNotFound} />

        <CardList title="Ajuda" icon={<FontAwesomeIcon icon={ faCircleQuestion } fontSize={20} color="2e1d6a"/>}handle={handleNavigateNotFound} />

    </Container>
  )
}
