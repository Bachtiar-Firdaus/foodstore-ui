import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// untuk konek ke dev tools
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducers = combineReducers({});
const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);
export default store;
