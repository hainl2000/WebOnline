import { commonConstances as ACTIONS } from "./ActionConstance"

export function ToggleLoginModal({type, value} = {})
{
    return {
        type: type,
        value: value
    }
}

export function ToggleSigninModal({type, value} = {})
{
    return {
        type: type,
        value: value
    }
}

export function ToggleCartItemModal({type, value} = {})
{
    return {
        type: type,
        value: value
    }
}

export function ChoosePaymentMethod({type, value} = {})
{
    return {
        type: type,
        value: value
    }
}

export function UpdateQuantity({type, value} = {})
{
    console.log(value)
    return {
        type: type,
        value: value
    }
}

export function UpdateCart({type, value} = {})
{
    const instance = value.cart.find(item => item.id === value.product.id)
    if(instance)
        instance.quantity = value.product.quantity
    return {
        type: type,
        value: value.cart
    }
}

export function SelectProduct({type, value} = {})
{
    return {
        type: type,
        value: value
    }
}

export function AddIntoCart(value)
{
    return {
        type: ACTIONS.ADD_CART_ITEM,
        value: value
    }
}

export function DiscardFromCart(value)
{
    console.log(value)
    return {
        type: ACTIONS.DISCARD_ITEM,
        value: value
    }
}

export function Login(value)
{
    return (dispatch) => {
        dispatch({type: ACTIONS.LOGIN_BEGIN, value: value})
        return {
            type: ACTIONS.LOGIN_SUCCESS,
            value: true
        }
    }
}

export function Logout()
{
    return {
        type: ACTIONS.LOG_OUT
    }
}