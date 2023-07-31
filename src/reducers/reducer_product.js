export const initialProductState = {
  data: null,
  loading: true,
  category: 'all',
};

export const reducerProduct = (state, action) => {
  switch (action.type) {
    case 'data_fetched': {
      return {
        ...state,
        data: action.payLoad,
      };
    }

    case 'category_changed': {
      return {
        ...state,
        category: action.payLoad,
      };
    }

    case 'loaded': {
      return {
        ...state,
        loading: false,
      };
    }

    case 'error': {
      console.log(action.payLoad);
      return {
        ...state,
      };
    }

    default: {
      console.error('unknown action: ' + action.type);
      return state;
    }
  }
};
