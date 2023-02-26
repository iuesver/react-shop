import { cartAction, cartItem } from '../components/types/reducerType';

const initState: cartItem[] = [];

const cartReducer = (state = initState, action: cartAction) => {
  let newState: cartItem[] = [...state];
  switch (action.type) {
    case 'ADD':
      if (newState.find((item: cartItem) => item.id === action.payload.id)) {
        const idx = newState.findIndex(
          (item: cartItem) => item.id === action.payload.id
        );
        newState[idx].count += 1;
      } else {
        newState.push(action.payload);
      }
      return newState;
    case 'REMOVE':
      const idx = newState.findIndex(
        (item: cartItem) => item.id === action.payload.id
      );
      if (newState[idx].count === 1) {
        newState = newState.filter((item) => item.id !== newState[idx].id);
      } else {
        newState[idx].count -= 1;
      }
      return newState;
    case 'RESET':
      return [];
    default:
      return state;
  }
};
export default cartReducer;
