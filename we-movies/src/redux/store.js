import { createStore } from "redux";
import { default as cartReducer } from "./reducers/cartReducer";

const store = createStore(cartReducer);

export default store;