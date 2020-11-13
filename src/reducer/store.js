import { createStore } from 'redux'
import homepageReducer from './homepageReducer'

const store = createStore(homepageReducer)

export default store