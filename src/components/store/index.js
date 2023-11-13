import { configureStore,createSlice } from "@reduxjs/toolkit";
 
const cartSlice = createSlice({
    name : 'cart',
    initialState : {showCart : false},
    reducers :{
        toggleCart(state ,action){
            state.showCart = !state.showCart
        }
    }

})

const ItemSlice = createSlice({
    name : 'CartItem',
    initialState : {
        items : [],
        totalQuantity : 0
    },
    reducers : {
    addItems(state,action){
        const newItem = action.payload;
        const existingItem = state.items.find(item => item.id === newItem.id)
       console.log(newItem.id)
        if(!existingItem){
            state.items.push({
                id : newItem.id,
                title : newItem.title,
                price : newItem.price,
                quantity : newItem.quantity,
                totalPrice : newItem.price
            })
            
        }
        else{
            existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            existingItem.quantity++;
        }
        state.totalQuantity++;
    },
    removeItem(state,action){
        const id = action.payload;
        const item = state.items.find(item => item.id === id )
        if(item.quantity > 1 ){
            item.totalPrice = item.totalPrice - item.price;
            item.quantity--;
        }
        else{
        state.items = state.items.filter(item => item.id !== id  ) 
        }
        state.totalQuantity--;
    }
    }
})
const store = configureStore({
    reducer : {
        cart : cartSlice.reducer,
        addItem : ItemSlice.reducer
    }
})
export const itemAction = ItemSlice.actions; 
export const cartAction = cartSlice.actions;
export default store; 