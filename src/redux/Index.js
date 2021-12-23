import {changereducer,selectedreducer}  from '../redux/Reducer'
import { combineReducers } from 'redux'

const reduserss = combineReducers({
    allproducts : changereducer,
    detail:selectedreducer
})

export default reduserss;