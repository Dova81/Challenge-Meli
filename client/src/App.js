import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import SearchBar from 'components/Search/SearchBar'
import SearchResults from 'components/SearchResults/Items'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/items">
          <>
            <SearchBar />
            <SearchResults />
          </>
        </Route>
        <Route path="/">
          <SearchBar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
