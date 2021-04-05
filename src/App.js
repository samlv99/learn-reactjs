import logo from "./logo.svg";
// import './App.css';
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";
import { Link, NavLink, Route } from "react-router-dom";
import { useEffect } from "react";
import productApi from "./api/productApi";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params);
      console.log(productList);
    }

    fetchProducts();
  }, []);

  return (
    <div className="App">
      Header
      <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p>
      <NavLink to="/todos">Todos</NavLink>
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
      Footer
    </div>
  );
}

export default App;
