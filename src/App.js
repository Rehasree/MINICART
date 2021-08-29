import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Components/Navbar/Navbar';
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import ProductList from './Pages/ProductList/ProductList';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Wishlist from './Pages/Wishlist/Wishlist';
function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
              <Navbarr />
              <Home/>
          </Route>
          <Route exact path="/category/:category">
              <Navbarr />
              <ProductList/>
          </Route>
          <Route exact path="/category/:category/:id">
              <Navbarr />
              <ProductDetails/>
          </Route>
          <Route exact path="/wishlist">
              <Navbarr />
              <Wishlist/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}
const mapStateToProps = (state) => ({
  product: state.product
})

export default connect(mapStateToProps)(App)