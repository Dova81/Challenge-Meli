import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SearchBar from 'components/Search/SearchBar'
import SearchResults from 'components/SearchResults/ItemList'
import styled from 'styled-components'
import media from "styled-media-query";
import Details from "components/Pages/Details";
import Results from "components/Pages/Results";


const ItemsWrapper = styled.div`
    background-color:#eeeeee;
    ${media.lessThan("medium")`
        height: 100vh;
    `}

`

function App() {
  return (
    <ItemsWrapper>
      <Router>
        <Switch>
          <Route path="/items/:id">

            <Details />

          </Route>
          <Route path="/items">
            <Results />
          </Route>
          <Route path="/">
            <SearchBar />
          </Route>
        </Switch>
      </Router>
    </ItemsWrapper>
  );
}

export default App;
