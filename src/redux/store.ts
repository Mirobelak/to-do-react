import {createStore} from "redux";
import rootReducer from "./rootReducer"
import storage from "redux-persist/lib/storage"
import {persistStore, persistReducer, PersistConfig} from "redux-persist"

export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersistConfig = PersistConfig<RootState> & {key: string} & {storage: typeof storage}

const persistConfig:ExtendedPersistConfig = {
    key: "root",
    storage,

}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, undefined)

export const persistor = persistStore(store)
