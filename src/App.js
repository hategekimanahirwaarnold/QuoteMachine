//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QuoteBox from './quoteBox';
import Create from './create';
function App() {
  return (
    <Router>
      <div className="App" style={{margin: "0", padding: "0", display: 'flex', justifyContent: 'center', height: "100%", width: "100%", alignItems: "center"}}>
        
        <Switch>
          <Route exact path='/'>
            <QuoteBox></QuoteBox>
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

console.clear();
export default App;
