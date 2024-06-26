import './App.css';
import { Header } from './components/Header';
import { List } from './components/PageList';
import { GlobalStyles } from './styles/globalstyles';
import { Container, GeneralContainer } from './styles/styles';
import { RouteList } from './routes';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <GlobalStyles />
    
    <Header />

    <GeneralContainer>
      <Container>
        <List />
      </Container>
      
        <Routes>
          {RouteList.map((routeItem, index) => {
            return (
              <Route
                key={index}
                path={routeItem.path}
                element={routeItem.getElement()} />
              );
          })}
        </Routes>
    </GeneralContainer>
   
    </>
  );
}

export default App;
