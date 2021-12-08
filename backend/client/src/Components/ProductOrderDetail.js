import { Paper, makeStyles, Grid, Container, TextField, FormControl } from "@material-ui/core"
import { Skeleton } from "@material-ui/lab"
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import { UpdateQuantity, DiscardFromCart, ToggleCartItemModal } from "../Action/CommonAction";
import { useDispatch, useSelector } from "react-redux";
import { commonConstances as ACTIONS } from "../Action/ActionConstance";
import { ItemQuantity, CartItemModal } from '../Selector/CommonSelector';
import { useEffect, useState } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
    info: {
        margin: theme.spacing(1),
        width: theme.spacing(100),
        height: "70vh",
        outline: 'none',
        overflow: 'auto'
    },
    image: {
        marginTop: '2em'
    },
    total: {
        color: '#FF0000'
    },
    detail: {
        marginTop: 10,
        marginBottom: 0
    },
    quantity: {
        display: 'flex',
        alignItems: 'center'
    }
}))

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const ProductOrderDetail = ({c_item}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const quantity = useSelector(ItemQuantity)
    const selectProduct = useSelector(CartItemModal)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if(quantity === 0)
        {
            setOpen(true)
            dispatch(DiscardFromCart(c_item.id))
        }
    }, [quantity])

    return (
        <Paper className={classes.info}>
            <Grid container spacing={0}>
                <Grid item direction="column" xs={5}>
                    <Container>
                        <h1>{c_item?.nameProduct}</h1>
                        <h3>Mô tả:</h3>
                        <FormControl fullWidth>
                            <TextField variant="outlined" multiline rows={15} disabled value={c_item.description}/>
                        </FormControl>
                    </Container>
                </Grid>
                <Grid item direction="column" xs={7}>
                    <Container>
                        {/* <Skeleton className={classes.image} variant="rect" width={215} height={215}/> */}
                        <img src={c_item.imageURL} width={215} height={215} alt={c_item.nameProduct} />
                        <Grid container>
                            <Grid item xs={12}>
                                <p className={classes.detail}>Đơn giá: {Intl.NumberFormat().format(c_item?.price)}$</p>
                            </Grid>
                            <Grid className={classes.quantity} item xs={6}>
                                <p>Số lượng:</p>{<AddBoxIcon onClick={() => dispatch(UpdateQuantity({type: ACTIONS.UPDATE_ITEM_QUANTITY, value: 1}))}/>}<p>{quantity}</p>{<IndeterminateCheckBoxIcon onClick={() => dispatch(UpdateQuantity({type: ACTIONS.UPDATE_ITEM_QUANTITY, value: -1}))} />}
                            </Grid>
                            <Grid item xs={6}>
                                <p className={classes.total}>{Intl.NumberFormat().format(c_item?.price * c_item?.quantity)}$</p>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <TextField multiline rows={4} variant="outlined" label="Yêu cầu đặc biệt"/>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity="warning">
                    Sản phẩm đã bị xóa
                </Alert>
            </Snackbar>
        </Paper>
    )
}

export default ProductOrderDetail