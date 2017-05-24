import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    return createStore(
        rootReducer, // Reducer
        initialState, // Current State
        applyMiddleware(thunk) // New State
    );
}
