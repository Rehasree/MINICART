import { createStore } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'root',
    storage
}

const initialState = {
    product: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
            return { ...state, product: [...action.value]}
        case 'remove':
            return {...state, product: action.value}
        default:
            return state
    }
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }