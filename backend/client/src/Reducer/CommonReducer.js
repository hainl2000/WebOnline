import { Record } from 'immutable';
import { commonConstances as ACTIONS } from "../Action/ActionConstance";

const CommonState = new Record({
    login: false,
    user: null,
    loginModal: false,
    signinModal: false,
    selectProduct: {
        name: null,
        id: null,
        descript: null,
        price: null,
        quantity: 0
    },
    selectedId: null,
    selectedPaymentMethod: 1,
    cart: [],
    products: [],
    category: [],
    product_by_cate: []
})

const intialState = new CommonState()

export const CommonReducer = (state = intialState, action) => {
    switch (action.type)
    {
        case ACTIONS.TOGGLE_LOGIN_MODAL:
            {
                return state.withMutations(s => s.set('loginModal', action.value))
            }

        case ACTIONS.TOGGLE_SIGNIN_MODAL:
            {
                return state.withMutations(s => s.set('signinModal', action.value))
            }
        
        case ACTIONS.TOGGLE_CART_ITEM_MODAL:
            {
                return state.withMutations(s => s.set('selectProduct', action.value))
            }

        case ACTIONS.TOGGLE_PAYMENT_METHOD:
            {
                return state.withMutations(s => s.set('selectedPaymentMethod', action.value))
            }

        case ACTIONS.UPDATE_ITEM_QUANTITY:
            {
                return state.withMutations(s => s.updateIn(['selectProduct', 'quantity'], value => (value === 0 && action.value === -1) ? value : value + action.value))
            }
        
        case ACTIONS.UPDATE_CART_ITEM:
            {
                return state.withMutations(s => s.set('selectProduct', {id: null, name: null, quantity: null, descript: null, price: null}).set('cart', action.value))
            }
        
        case ACTIONS.SELECT_PRODUCT:
            {
                console.log(action.value)
                const p = state.get('products')
                console.log(p)
                const selected = p.find(_p => _p._id === action.value)
                console.log(selected)
                return state.withMutations(s => s.set('selectedId', selected))
            }

        case ACTIONS.ADD_CART_ITEM:
            {
                const p = state.get('cart')
                console.log(p, action.value)
                const _p = p.find(_p_ => _p_._id === action.value.id)
                if(_p)
                {
                    _p.quantity += 1
                    return state.withMutations(s => s.set('cart', p))
                }
                else{
                    const cart = [...state.get('cart'), {...action.value, quantity: 1}]
                    return state.withMutations(s => s.set('cart', cart))
                }
            }

        case ACTIONS.DISCARD_ITEM:
            {
                const p = state.get('cart')
                const index = p.findIndex(_p => _p.id == action.value)
                p.splice(index, 1)
                console.log(p)

                return state.withMutations(s => s.set('cart', p))
            }

        case ACTIONS.LOGIN_BEGIN:
            {
                return state.withMutations(s => s.set('user', action.value))
            }

        case ACTIONS.LOGIN_SUCCESS:
            {
                if(action.value)
                {
                    return state.withMutations(s => s.set('login', true).set('loginModal', false))
                }else{
                    return state.withMutations(s => s.set('user', null).set('loginModal', false))
                }
            }

        case ACTIONS.SIGN_UP_BEGIN:
            {
                return state.withMutations(s => s.set('user', action.value))
            }

        case ACTIONS.SIGN_UP_SUCCESS:
            {
                if(action.value)
                {
                    return state.withMutations(s => s.set('login', true).set('signinModal', false))
                }else{
                    return state.withMutations(s => s.set('user', null).set('signinModal', false))
                }
            }

        case ACTIONS.LOG_OUT:
            {
                return state.withMutations(s => s.set('login', false).set('user', null))
            }

        case ACTIONS.GET_ALL_PRODUCTS:
            {
                return state.withMutations(s => s.set('products', action.value))
            }

        case ACTIONS.GET_ALL_CATEGORIES:
            {
                return state.withMutations(s => s.set('category', action.value))
            }

        case ACTIONS.GET_PRODUCT_BY_CATEGORY:
            {
                return state.withMutations(s => s.set('product_by_cate', action.value))
            }

        case ACTIONS.SET_COOKIE:
            {
                if(action.value)
                {
                    console.log('set cookies')
                    return state.withMutations(s => s.set('user', action.value).set('login', true))
                }else{
                    return state
                }
            }

        default:
            return state
    }
}