import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SearchBar from 'components/Search/SearchBar'
import SearchResults from 'components/SearchResults/ItemList'
import ItemDetails from 'components/ItemDetails/Item'
import styled from 'styled-components'
import media from "styled-media-query";


const ItemsWrapper = styled.div`
    background-color:#eeeeee;
    ${media.lessThan("medium")`
        height: 100vh;
    `}

`

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/items/:id">
          <ItemsWrapper>
            <SearchBar />
            <ItemDetails />
          </ItemsWrapper>
        </Route>
        <Route path="/items">
          <ItemsWrapper>
            <SearchBar />
            <SearchResults />
          </ItemsWrapper>
        </Route>
        <Route path="/">
          <SearchBar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
