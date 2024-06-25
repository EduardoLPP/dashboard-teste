import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, NotFoundTitle } from "./styles";
import { faPlugCircleBolt } from '@fortawesome/free-solid-svg-icons';

export function NotFound() {
  return (
    <Container>
        <NotFoundTitle>Ops... não encontramos o conteúdo da página</NotFoundTitle>

        <FontAwesomeIcon icon={faPlugCircleBolt} color="#FFFFFF"  fontSize={100}/>
    </Container>
  )
}
