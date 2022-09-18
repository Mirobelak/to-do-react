import {createStore} from "redux";
import rootReducer from "./reducer/index"
import storage from "redux-persist/lib/storage"
import {persistStore, persistReducer} from "redux-persist"


const persistConfig = {
    key: "root",
    storage,

}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, undefined)

export const persistor = persistStore(store)
