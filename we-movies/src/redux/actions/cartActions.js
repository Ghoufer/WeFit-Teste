import store from 'redux/store';
import { ADD_ITEM, DELETE_ITEM } from "../actionTypes";

const addItem = (itemId) => {
    return {
        type: ADD_ITEM,
        itemId: itemId
    }
};

const deleteItem = (itemId) => {
    return {
        type: DELETE_ITEM,
        itemId
    }
};

export { addItem, deleteItem };