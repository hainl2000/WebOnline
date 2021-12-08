import { createSelector } from 'reselect';

const getLoginModal = state => state.loginModal
const getSigninModal = state => state.signinModal
const getCartItemModal = state => state.selectProduct
const getPaymentMethod = state => state.selectedPaymentMethod
const getItemQuantity = state => state.selectProduct.quantity
const getCart = state => state.cart
const getProduct = state => state.products
const getProductById = state => {
    return state.selectedId
}
const getUser = state => state.user
const getAllCategories = state => state.category
const getProductByCate = state => state.product_by_cate
const getAuthenStatus = state => state.login

export const LoginModalSelector = createSelector(
    getLoginModal,
    openModal => openModal
)

export const SigninModalSelector = createSelector(
    getSigninModal,
    openModal => openModal
)

export const CartItemModal = createSelector(
    getCartItemModal,
    openModal => openModal
)

export const PaymentMethodSelector = createSelector(
    getPaymentMethod,
    id => id
)

export const ItemQuantity = createSelector(
    getItemQuantity,
    value => value
)

export const CartItemSelector = createSelector(
    getCart,
    cart => cart
)

export const ProductsSelector = createSelector(
    getProduct,
    products => products
)

export const ProductByIdSelector = createSelector(
    getProductById,
    product => product
)

export const AllCategorySelector = createSelector(
    getAllCategories,
    categories => categories
)

export const ProductByCategory = createSelector(
    getProductByCate,
    products => products
)

export const UserSelector = createSelector(
    getUser,
    user => user
)

export const AuthenStatusSelector = createSelector(
    getAuthenStatus,
    status => status
)