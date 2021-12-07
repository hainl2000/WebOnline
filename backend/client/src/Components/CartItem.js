import { Paper, makeStyles, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useDispatch } from "react-redux";
import { ToggleCartItemModal } from "../Action/CommonAction";
import { commonConstances as ACTIONS } from "../Action/ActionConstance";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        color: '#000000',
        background: '#FFFFFF',
        cursor: 'pointer'
    },
    item_title: {
        width: '300px'
    },
    info: {
        textAlign: 'left'
    }
}))

const CartItem = ({item}) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Paper className={classes.paper} onClick={() => dispatch(ToggleCartItemModal({type: ACTIONS.TOGGLE_CART_ITEM_MODAL, value: item}))}>
            <Grid container spacing={3}>
                <Grid item direction="column">
                    <Skeleton variant="rect" width={110} height={110}/>
                </Grid>
                <Grid className={classes.info} item direction="column">
                    <p>{item.name}</p>
                    <p>Số lượng: {item.quantity}</p>
                    <p>Tổng: {Intl.NumberFormat().format(item.quantity * item.price)} VND</p>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default CartItem