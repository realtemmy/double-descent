import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { rootReducers } from "./root-reducer";

const middlewares = [logger, thunk]

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducers, undefined, composedEnhancers);
