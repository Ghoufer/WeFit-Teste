import { Product } from "helpers/types";
import { ADD_ITEM, DELETE_ITEM, REMOVE_ITEM, DELETE_ALL } from "../actionTypes";

type Item = {
  info: Product,
  numberOfItems: number
}

const initialState: Item[] = []

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ITEM:

      const found = state.find(item => item.info.id === action.newItem.id)

      if(!found) {
        return [
          ...state,
          {
            info: action.newItem,
            numberOfItems: 1
          }
        ]
      } 
      else {
        return state.map((product) => {
          return product.info.id === action.newItem.id
                  ? { ...product, numberOfItems: product.numberOfItems + 1 } : product
        })
      }

    case REMOVE_ITEM:
      return state.map(product => {
        if (product.info.id === action.itemId) {
          return {
            ...product, 
            numberOfItems: product.numberOfItems - 1
          }
        };
        return product;
      })
    
    case DELETE_ITEM:
      return state.filter((product) => product.info.id !== action.itemId)
    
    case DELETE_ALL:
      return initialState

    default:
      return state;
  }
}

export default cartReducer;