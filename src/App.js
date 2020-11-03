import { useState } from 'react';
import './App.scss';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import logo from './logo.svg'

function App() {
  const [addProduct, setAddProduct] = useState(false)
  return (
    <div>
      <img src={logo} alt="logo" />
      <div>
        {addProduct ? null : <button className="button" onClick={() => setAddProduct(add => !add)}>Add a product</button>}
        {addProduct ? <AddProduct setAddProduct={add => setAddProduct(add)} /> : <Products />}
      </div>
    </div>
  );
}

export default App;
