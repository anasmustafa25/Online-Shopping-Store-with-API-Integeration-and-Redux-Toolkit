// import { createSlice } from "@reduxjs/toolkit";
// const initialState={
//     items:[],
//     tempItems:[],
//     totalPrice:0
// }
// const cartSilce=createSlice({
// name:'cart',
// initialState,
// reducers:{
// addtoCart(state,action){
//     const existingItem=state.items.find(item=>item.id===action.payload.id);
//     if(existingItem){
//         existingItem.quantity+=1;
//     }
//     else{
//         state.items.push({...action.payload,quantity:1})
//     }
//     state.tempItems=[...state.items];
//     state.totalPrice=state.items.reduce((sum,item)=>sum+item.price*item.quantity,0);
// },
// updateTempQuantity(state,action){
// const tempItem=state.tempItems.find(item=>item.id===action.payload.id)
// if(tempItem){
//     tempItem.quantity=action.payload.quantity;
// }
// },
// applyTempUpdates(state,action){
// const tempItem=state.tempItems.find((item)=>item.id===action.payload);
// const cartItem=state.items.find((item)=>item.id===action.payload);
// if(tempItem && cartItem){
// cartItem.quantity=tempItem.quantity
// }
// state.totalPrice=state.items.reduce((sum,item)=>sum+item.price*item.quantity,0);
// },
// removeFromCart(state,action){
// state.items=state.items.filter(item=>item.id!==action.payload);
// state.tempItems=[...state.items];
// state.totalPrice=state.items.reduce((sum,item)=>sum+item.price*item.quantity,0);
// }

// }
// })
// export const {addtoCart,removeFromCart,updateTempQuantity,applyTempUpdates}=cartSilce.actions
// export default cartSilce.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    tempItems: [],
    totalPrice: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.tempItems = [...state.items];
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },
        updateTempQuantity(state, action) {
            const tempItem = state.tempItems.find(item => item.id === action.payload.id);
            if (tempItem) {
                tempItem.quantity = action.payload.quantity;
            }
        },
        applyTempUpdates(state, action) {
            const tempItem = state.tempItems.find(item => item.id === action.payload);
            const cartItem = state.items.find(item => item.id === action.payload);
            if (tempItem && cartItem) {
                cartItem.quantity = tempItem.quantity;
            }
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },
        removeFromCart(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload);
                }
            }
            state.tempItems = [...state.items];
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        }
    }
});

export const { addtoCart, removeFromCart, updateTempQuantity, applyTempUpdates } = cartSlice.actions;
export default cartSlice.reducer;
