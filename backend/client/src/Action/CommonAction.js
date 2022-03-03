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

export function UpdateQuantity({type, value, item} = {})
{
    console.log(value)
    if(value === 1)
    {
        axios.post('http://localhost:8000/user/cart/add', {productId: item._id, quantity: 1}, { withCredentials: true }).then(response => {
            console.log(response)
        })
    }else{
        console.log(value)
        axios.post('http://localhost:8000/user/cart/discard', {productId: item._id, quantity: 1}, {withCredentials: true}).then(response => console.log(response))
    }
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
    return (dispatch) => {
        axios.post('http://localhost:8000/user/cart/add', {productId: value._id, quantity: 1}, { withCredentials: true }).then(response => {
            dispatch({type: ACTIONS.ADD_CART_ITEM, value: value})
        })
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
    return (dispatch) =>
    {
        return axios.post('http://localhost:8000/getListProductsByCategory', {
            category: id
        }, { withCredentials: true }).then(response => {
            dispatch({
                type: ACTIONS.GET_PRODUCT_BY_CATEGORY,
                value: response.data.listProducts
            })
        })
    }
}

export function GetProductById(id)
{
    return (dispatch) => {
        return axios.post('http://localhost:8000/getProductData', { productId: id }).then(response => {
            console.log(response)
            dispatch({type: ACTIONS.RETRIEVE_ITEM, value: response.data.dataProduct})
        })
    }
}

export function ConfirmOrder()
{
    return (dispatch) => {
        return axios.get('http://localhost:8000/user/cart/checkout', { withCredentials: true }).then(() => {
            dispatch({type: ACTIONS.CONFIRM_ORDER})
        })
    }
}

export function GetCart()
{
    return (dispatch) => {
        return axios.get('http://localhost:8000/user/cart/show', { withCredentials: true }).then((response) => {
            dispatch({ type: ACTIONS.GET_CART_ITEMS, value: response.data.listProducts })
        })
    }
}