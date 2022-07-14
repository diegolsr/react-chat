import { createStore, applyMiddleware } from "redux";

import rootReducer from "./modules/rootReducer";

const enhancer = applyMiddleware();

const store = createStore(rootReducer, enhancer);

export default store;
