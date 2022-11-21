import { ADD_ITEM, REMOVE_ITEM, DELETE_ITEM, DELETE_ALL } from "../actionTypes";

const addItem = (newItem) => {
    return {
        type: ADD_ITEM,
        newItem
    }
}

const removeItem = (itemId) => {
    return {
        type: REMOVE_ITEM,
        itemId
    }
}

const deleteItem = (itemId) => {
    return {
        type: DELETE_ITEM,
        itemId
    }
}

const deleteAll = () => {
    return {
        type: DELETE_ALL,
    }
}

export { addItem, deleteItem, removeItem, deleteAll };