const cart = [];

const handleCart = (state = cart, action) => {
  switch (action.type) {
    case "ADDITEM":
      //check product exist
      const exist = state.find((x) => x.id === action.payload.id);
      //increase quanlity product
      if (exist) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [
          ...state,
          {
            ...action.payload,
            qty: 1,
          },
        ];
      }
    case "DELETEITEM":
      const exist1 = state.find((x) => x.id === action.payload.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === action.payload.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    case "REMOVEITEM":
      const exist2 = state.find((x) => x.id === action.payload.id);
      return state.filter((x) => x.id !== exist2.id);
    default:
      return state;
  }
};
export default handleCart
