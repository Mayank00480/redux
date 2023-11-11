import {createStore} from 'redux'

const ReducerFunction = (state = {isCartVisible : false, cartItems : []} , action) =>{
    switch(action.type){
        case 'myCart' :
        return {
            isCartVisible : !state.isCartVisible,
            cartItems : state.cartItems
        }
        case 'addItem' : return{
            isCartVisible : state.isCartVisible,
            cartItems : [...state.cartItems , action.payload]
        }

        default : return state
    }
}
const store = createStore(ReducerFunction)
export default store;