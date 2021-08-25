import React from 'react'
import GlobalStyle from './globalStyles'
import { Navbar} from './components'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/HomePage/Home';
import SignUp from './components/Forms/SignUp';
import Login  from './components/Forms/Login';
import Products from './components/Products/Products';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/products" exact component={Products}></Route>
      </Switch>
    </Router>
  );
}

export default App;
