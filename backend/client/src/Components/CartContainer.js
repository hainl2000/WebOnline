import { Container, makeStyles, Grid, Paper, Button, Modal, Backdrop } from "@material-ui/core"
import CartItem from "./CartItem";
import { CartItemModal, PaymentMethodSelector, CartItemSelector } from '../Selector/CommonSelector';
import { useSelector, useDispatch } from "react-redux";
import { commonConstances as ACTIONS } from "../Action/ActionConstance";
import { ChoosePaymentMethod, UpdateCart } from "../Action/CommonAction";
import ProductOrderDetail from "./ProductOrderDetail";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const paymentMethod = [
    {
        id: 1,
        name: 'Tiền mặt',
        discount: 1
    },
    {
        id: 2,
        name: 'VISA',
        discount: 1,
    },
    {
        id: 3,
        name: 'VN PAY',
        discount: 0.8
    }
]

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '10px',
        background: '#FFFFFF',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(25),
            height: theme.spacing(30),
        },
        marginTop: "1em",
        flexGrow: 1,
        height: 'calc(100vh - 185px)'
    },
    productGallery: {
        display: 'flex',
        justifyContent: 'center'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: '#C4C4C4',
        height: 'calc(100vh - 350px)',
        overflow: 'auto'
    },
    bill: {
        padding: theme.spacing(2),
        fontWeight: 'regular',
        fontSize: 'large',
        color: '#000000',
        background: '#E9E9E9',
        height: 'calc(100vh - 350px)',
        overflow: 'auto'
    },
    root: {
        flexGrow: 1,
        height: 'calc(100% - 40px)'
    },
    payment: {
        marginBottom: '1em',
        height: '4.5em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '1em',
        paddingRight: '1em',
        cursor: 'pointer',
    },
    buttons: {
        width: '100%',
        textAlign: 'center'
    },
    btn: {
        width: theme.spacing(20)
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectIcon: {
        color: "green",
    }
}))

const CartContainer = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const selectProduct = useSelector(CartItemModal)
    const items = useSelector(CartItemSelector)
    
    return (
        <Container className={classes.container} maxWidth="lg">
            <Grid className={classes.root} container spacing={3}>
                <Grid item xs={7}>
                    <h1>Đơn hàng</h1>
                    <Paper className={classes.paper}>
                        <Grid container spacing={3} className={classes.list}>
                            {items.map(item => 
                                <Grid key={item.id} item xs={12}>
                                    <CartItem item={item}/>
                                </Grid>
                            )}
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <h1>Hóa đơn</h1>
                    <Paper className={classes.bill}>
                        <p>Số sản phẩm: {items.length}</p>
                        <p>Tổng giá: {Intl.NumberFormat().format(items.reduce((previousValue, curentValue) => curentValue.quantity * curentValue.price + previousValue, 0))} VND</p>
                        <p>VAT: 30,000 VND</p>
                        <p>Giảm giá: không có</p>
                        <p>Thành tiền: {Intl.NumberFormat().format(items.reduce((previousValue, curentValue) => curentValue.quantity * curentValue.price + previousValue, 30000))} VND</p>
                        <h3>Phương thức thanh toán</h3>
                        {paymentMethod.map(method => <PaymentMethod key={method.id} method={method} value={items.reduce((previousValue, curentValue) => curentValue.quantity * curentValue.price + previousValue, 30000)}/>)}
                        <Container className={classes.buttons}>
                            <Button className={classes.btn} variant="contained" color="secondary">Confirm</Button>
                        </Container>
                    </Paper>
                </Grid>
            </Grid>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={selectProduct.id !== null}
                onClose={() => dispatch(UpdateCart({type: ACTIONS.UPDATE_CART_ITEM, value: {product: selectProduct, cart: items}}))}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                >
                <ProductOrderDetail c_item={selectProduct}/>
            </Modal>
        </Container>
    )
}

const PaymentMethod = ({method, value}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const selected = useSelector(PaymentMethodSelector)
    
    return (
        <Paper className={classes.payment} onClick={() => dispatch(ChoosePaymentMethod({type: ACTIONS.TOGGLE_PAYMENT_METHOD, value: method.id}))}>
            <p>{method.name} {selected === method.id ? <CheckCircleIcon className={classes.selectIcon} /> : null}</p>
            <p>{Intl.NumberFormat().format(value * method.discount)} VND</p>
        </Paper>
    )
}

export default CartContainer