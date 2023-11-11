import {createStore} from 'redux'

const ReducerFunction = (state = {isCartVisible : false} , action) =>{
    switch(action.type){
        case 'myCart' :
        return {
            isCartVisible : !state.isCartVisible
        }
        default : return state
    }
}
const store = createStore(ReducerFunction)
export default store;