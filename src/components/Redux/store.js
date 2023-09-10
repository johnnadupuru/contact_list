import { combineReducers, createStore } from "redux";
import { contactsReducer } from "./Reducers/contact";
import { usersReducer } from "./Reducers/users";

const rootReducer=combineReducers({
    contact:contactsReducer,
    user:usersReducer,
})

export const store=createStore(rootReducer)