import { createContext, useReducer } from 'react';
import Router from './Router';
import { initialCartState, reducerCart } from './reducers/reducer_cart';
import { initialProductState, reducerProduct } from './reducers/reducer_product';

export const CartContext = createContext({
  cart: [],
  handleCart: () => {},
  productCart: [],
  handleProduct: () => {},
});

function App() {
  const [cart, handleCart] = useReducer(reducerCart, initialCartState);
  const [product, handleProduct] = useReducer(reducerProduct, initialProductState);

  return (
    <CartContext.Provider value={{ cart, handleCart, product, handleProduct }}>
      <Router />
    </CartContext.Provider>
  );
}

export default App;
