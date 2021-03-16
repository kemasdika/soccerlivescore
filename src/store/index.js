import {createStore, combineReducers, applyMiddleware} from 'redux'
import {FinishedReducer} from './reducers/FinishedReducer'
import {UpcomingReducer} from './reducers/UpcomingReducer'
import thunk from 'redux-thunk'
const rootReduser = combineReducers({
    upcoming: UpcomingReducer,
    finished: FinishedReducer
})

export const store = createStore(rootReduser, applyMiddleware(thunk))


