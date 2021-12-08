import { commonConstances as ACTIONS } from "./ActionConstance";
import axios from 'axios';

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
    return {
        type: ACTIONS.DISCARD_ITEM,
        value: value
    }
}

export function GetAllProducts()
{
    return (dispatch) =>
    {
        return axios.get('http://localhost:8000/getAllActiveProducts').then(response => {
            dispatch({
                type: ACTIONS.GET_ALL_PRODUCTS,
                value: response.data.listActiveProducts
            })
        })
    }
}

export function GetAllCategories()
{
    return (dispatch) =>
    {
        return axios.get('http://localhost:8000/getListCategories').then(response => {
            dispatch({
                type: ACTIONS.GET_ALL_CATEGORIES,
                value: response.data.listCategories
            })
        })
    }
}

export function GetProductsByCategory(id)
{
    console.log(id)
    return (dispatch) =>
    {
        return axios.get('http://localhost:8000/getListProductsByCategory', {
            data: {
                category: id
            }
        }).then(response => {
            console.log(response.data)
            dispatch({
                type: ACTIONS.GET_PRODUCT_BY_CATEGORY,
                value: response.data.listCategories
            })
        })
    }
}