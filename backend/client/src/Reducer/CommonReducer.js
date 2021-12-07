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
    selectedId: 1,
    selectedPaymentMethod: 1,
    cart: [],
    products: [
        {
            id: 1,
            name: 'iPhone X',
            price: 20000000,
            descript: 'Blah Blah',
            image: "blah blah"
        },
        {
            id: 2,
            name: 'iPhone 8',
            price: 10000000,
            descript: 'Blah Blah',
            image: "blah blah"
        },
        {
            id: 3,
            name: 'Samsung Fold',
            price: 24000000,
            descript: 'Blah Blah',
            image: "blah blah"
        },
    ]
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
                const p = state.get('products')
                const selected = p.find(_p => _p.id == action.value)
                return state.withMutations(s => s.set('selectedId', selected))
            }

        case ACTIONS.ADD_CART_ITEM:
            {
                const p = state.get('cart')
                console.log(p, action.value)
                const _p = p.find(_p_ => _p_.id == action.value.id)
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
                    return state.withMutations(s => s.set('login', true))
                }else{
                    return state.withMutations(s => s.set('user', null))
                }
            }

        case ACTIONS.LOG_OUT:
            {
                return state.withMutations(s => s.set('login', false).set('user', null))
            }

        default:
            return state
    }
}