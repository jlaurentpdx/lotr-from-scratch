import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Main from './views/Main/Main';
import Books from './views/Books/Books';
import Films from './views/Films/Films';
import Characters from './views/Characters/Characters';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>The Lord of the Rings Database</h1>
        <header>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/films">Films</NavLink>
          <NavLink to="/characters">Characters</NavLink>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/books" component={Books} />
            <Route path="/films" component={Films} />
            <Route path="/characters" component={Characters} />
          </Switch>
        </main>
        <footer>-codo by jojo, after second breakfast, 2021</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
