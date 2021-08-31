import Reactfrom, { StrictMode } from "react";
import ReactDOM, { render } from "react-dom";
import {
  Router,
  Switch,
  Link,
  Route,
  BrowserRouter
} from 'react-router-dom';



function App() {
  return (
  <BrowserRouter>
    <Link to="/">Home</Link>
    
    <Switch>
      <Route exact path="/" />
    </Switch>
  </BrowserRouter>
  // <h1>Test</h1>
  )
};
export default render(<App />, document.getElementById("root"));
