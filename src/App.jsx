import { useState } from 'react';
import Router from './Router';

function App() {
  const [cart, setCart] = useState([]);
  const [inCart, setInCart] = useState(0);

  return (
    <Router
      cart={cart}
      setCart={setCart}
      inCart={inCart}
      setInCart={setInCart}
    />
  );
}

export default App;
