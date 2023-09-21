import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { appReducer } from "../components/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    app: appReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));