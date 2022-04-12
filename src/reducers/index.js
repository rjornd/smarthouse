import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import appReducer from "./appReducer";
import roomsReducer from "./roomsReducer";
const applyMiddleware = require("redux").applyMiddleware
const rootReducer = combineReducers({
    app: appReducer,
    rooms: roomsReducer
})

export const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(thunk)));
