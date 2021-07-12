// import logo from "./logo.svg";
// import './App.css';
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";
import ProductFeature from "./features/Product";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import productApi from "./api/productApi";
import NotFound from "./components/NotFound";
import counterFearter from "./features/Counter";
import Header from "./components/Header"

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="posts/:postId" exact />

        <Route path="/" component={counterFearter} exact /> 
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature} />

        <Route component={NotFound} />
      </Switch>
     
    </div>
  );
}

export default App;
