export const addToCart = (dispatch, product) => {
  dispatch({
    type: 'added',
    payLoad: product,
  });
};

export const removeFromCart = (dispatch, productId) => {
  dispatch({
    type: 'removed',
    payLoad: productId,
  });
};

export const increaseCount = (dispatch, productId) => {
  dispatch({
    type: 'increased_count',
    payLoad: productId,
  });
};

export const decreaseCount = (dispatch, productId) => {
  dispatch({
    type: 'decreased_count',
    payLoad: productId,
  });
};
