export const addProduct = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};
export const deleteProduct = (product) => {
    return {
      type: "DELETEITEM",
      payload: product,
    };
  };
  export const removeProduct = (product) => {
    return {
      type: "REMOVEITEM",
      payload: product,
    };
  };
