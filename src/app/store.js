import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import authReducer from "../features/Auth/reducer";
import thunk from "redux-thunk";
// untuk konek ke dev tools
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
});
const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);
export default store;
