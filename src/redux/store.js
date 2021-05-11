//import { combineReducers } from 'redux';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import { authReducer} from './auth';
import {
     persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import contactsReduser from './contacts/contacts-reducer'


// const rootReducer = combineReducers({
//     contacts: contactsReduser,
// });

//console.log(getDefaultMiddleware())



const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
}), logger,];

// const rootReducer = combineReducers({
//       contacts: persistReducer(persistConfig, contactsReduser) 
//     })

// const persistedReducer = persistReducer(persistConfig, rootReducer )

// const store = createStore(rootReducer, composeWithDevTools());

// const contactspersistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter'],
// };

const authPersistConfig = {
    key: 'auth',
     storage,
    whitelist: ['token'],
}

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReduser,
            // persistReducer(contactspersistConfig, contactsReduser)
    },
    middleware,
})

const persistor = persistStore(store)

 export default { store, persistor };
//export default store;