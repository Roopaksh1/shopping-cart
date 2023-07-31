export const initialCartState = {
  cart: [],
  totalItem: 0,
};

export const reducerCart = (state, action) => {
  switch (action.type) {
    case 'added': {
      const arr = [...state.cart];
      arr.push(action.payLoad);
      return {
        ...state,
        cart: arr,
        totalItem: state.totalItem + 1,
      };
    }

    case 'removed': {
      const arr = state.cart.filter((product) => product.id != action.payLoad);
      return {
        ...state,
        cart: arr,
        totalItem: state.totalItem - 1,
      };
    }

    case 'increased_count': {
      const index = state.cart.findIndex(
        (product) => product.id == action.payLoad
      );
      const arr = [
        ...state.cart.slice(0, index),
        { ...state.cart[index], count: state.cart[index].count + 1 },
        ...state.cart.slice(index + 1),
      ];
      return {
        ...state,
        cart: arr,
      };
    }

    case 'decreased_count': {
      const index = state.cart.findIndex(
        (product) => product.id == action.payLoad
      );
      const arr = [
        ...state.cart.slice(0, index),
        { ...state.cart[index], count: state.cart[index].count - 1 },
        ...state.cart.slice(index + 1),
      ];
      return {
        ...state,
        cart: arr,
      };
    }

    default: {
      console.error('unknown action: ' + action.type);
      return state;
    }
  }
};
