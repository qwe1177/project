import { combineReducers } from 'redux';
import EditModal from '../../../components/publicFollowUp/redux';
import FollowUP from '../actions/index.js';
//使用combineReducers把store内容分到不同作用域
const rootReducer = combineReducers({
    EditModal,
    FollowUP
})

export default rootReducer
