import { Container, ContainerLogo, ContainerXp, Logo, Name } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  return (
    <Container>
        <ContainerLogo>
            <FontAwesomeIcon icon={ faFire } fontSize={30} color="white"/>

            <Name>Usuário da Silva</Name>
        </ContainerLogo>

        <ContainerXp>
            
        </ContainerXp>
    </Container>
  )
}
