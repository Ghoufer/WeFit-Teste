import { ADD_ITEM, DELETE_ITEM } from "../actionTypes";

type Item = {
  productId: string,
  numberOfItems: number
}

const initialState: Item[] = []

const cartReducer = (state = initialState, action: any) => {
  // console.log(action.payload)
  switch (action.type) {
    case ADD_ITEM:
      console.log(action.itemId)
      const found = state.find(item => item.productId === action.itemID)

      if(!found) {
        state.push({
          productId: action.itemId,
          numberOfItems: 1
        })
      } else {
        console.log(found)
      }

      return state

    case DELETE_ITEM:
      return state.map(product => {
        if (product.productId === action.payload.id) {
          return {
            ...product, 
            numberOfItems: product.numberOfItems - 1
          }
        };
        return product;
      })

    default:
      return state;
  }
}

export default cartReducer;