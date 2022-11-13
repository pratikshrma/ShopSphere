import { UNSAFE_convertRoutesToDataRoutes } from "@remix-run/router";

const reducer = (state, action) => {
    if (action.type === "CLEAR_CART") {
        return { ...state, cart: [] };
    }
    if (action.type === "ADDITEM") {
        const oldCart = state.cart;
        return {
            ...state,
            cart: [
                ...oldCart,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    image: action.payload.image,
                    amount: 1,
                },
            ],
        };
    }
    if(action.type==='INCREASE'){
        const newCart=state.cart.map(product=>{
            if(product.id==action.payload){
                return{
                    ...product,
                    amount:product.amount+1
                }
            }else{
                return product
            }
        })
        return {
            ...state,
            cart:newCart
        }
    }
    if(action.type==='DECREASE'){
        const remove=state.cart.find(product=>{
            if(product.id===action.payload){
                if(product.amount===1){
                    return true;
                }else{
                    return false;
                }
            }
        })
        var newCart;
        if(remove){
            newCart=state.cart.filter(item=>item.id!==action.payload)
        }else{
            newCart=state.cart.map(item=>{
                if(item.id===action.payload){
                    return{
                        ...item,
                        amount:item.amount-1
                    }
                }else{
                    return item
                }
            })
        }
        return {
            ...state,
            cart:newCart
        }
    }
    if(action.type==='REMOVE'){
        const newCart=state.cart.filter(item=>item.id!==action.payload)
        return {
            ...state,
            cart:newCart
        }
    }
    if(action.type==='GET_TOTAL'){
        var atotal=0;
        for (let i = 0; i < state.cart.length; i++) {
            const element = state.cart[i];
            atotal+=element.price * element.amount
        }
        return {
            ...state,
            total:atotal.toFixed(1)
        }
    }
    return state;
};

export default reducer;
