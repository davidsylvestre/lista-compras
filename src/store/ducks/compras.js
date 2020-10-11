import { v4 as uuidv4 } from "uuid";

// Action Types

export const Types = {
  ADD: "compras/ADD",
  REMOVE: "compras/REMOVE",
  REMOVE_ALL: "compras/REMOVE_ALL",
  INCREMENT: "compras/INCREMENT",
  DECREMENT: "compras/DECREMENT",
  TOGGLE: "compras/TOGGLE",
};

// Helpter
const dec = (num) => {
  if (num <= 1) {
    return 1;
  } else {
    return num - 1;
  }
};

// Reducer

const INITIAL_STATE = {
  cart: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return {
        cart: [
          ...state.cart,
          {
            id: action.payload.id,
            product: action.payload.product,
            quantity: action.payload.quantity,
            toggle: action.payload.toggle,
          },
        ],
      };
    case Types.REMOVE:
      return {
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case Types.REMOVE_ALL:
      return {
        cart: [],
      };
    case Types.INCREMENT:
      return {
        cart: state.cart.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      };
    case Types.DECREMENT:
      return {
        cart: state.cart.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: dec(item.quantity) }
            : item;
        }),
      };
    case Types.TOGGLE:
      return {
        cart: state.cart.map((item) => {
          return item.id === action.payload.id
            ? { ...item, toggle: !item.toggle }
            : item;
        }),
      };
    default:
      return state;
  }
}

// Action Creators
export function add(product, quantity) {
  return {
    type: Types.ADD,
    payload: {
      id: uuidv4(),
      product: product,
      quantity: quantity,
      toggle: false,
    },
  };
}

export function remove(id) {
  return {
    type: Types.REMOVE,
    payload: { id },
  };
}

export function removeAll() {
  return {
    type: Types.REMOVE_ALL,
  };
}

export function increment(id) {
  return {
    type: Types.INCREMENT,
    payload: { id },
  };
}

export function decrement(id) {
  return {
    type: Types.DECREMENT,
    payload: { id },
  };
}

export function toggle(id) {
  return {
    type: Types.TOGGLE,
    payload: { id },
  };
}
