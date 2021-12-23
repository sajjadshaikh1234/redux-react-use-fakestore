import { createStore } from "redux";
import  reduserss from '../redux/Index'

const Store = createStore(reduserss  , {} , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default Store;