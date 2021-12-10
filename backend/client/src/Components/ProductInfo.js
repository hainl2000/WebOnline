import { useSelector } from "react-redux";
import { ProductByIdSelector, CartItemSelector } from "../Selector/CommonSelector";
import { Paper, Grid, Button, Container } from "@material-ui/core";
import { SelectProduct } from '../Action/CommonAction';
import { commonConstances as ACTIONS } from '../Action/ActionConstance';
import { useDispatch } from 'react-redux';
import { makeStyles, TextField, FormControl } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { AddIntoCart } from "../Action/CommonAction";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '10px',
        background: '#FFFFFF',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(5),
            height: theme.spacing(30),
        },
        marginTop: "1em",
        flexGrow: 1,
        height: 'calc(100vh - 200px)',
        paddingLeft: '2em',
        paddingRight: '2em',
        paddingTop: '1em'
    },
    root: {
        flexGrow: 1
    },
    btn_group: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '3em',
        justifyContent: 'center',
        alignItems: 'center'

    },
    btn: {
        marginTop: '2em',
        height: '4em',
        width: '60%'
    },
    image: {
        marginLeft: '6em'
    },
    leftCol: {
        '&: p': {
            fontSize: 'medium'
        }
    }
}))

const ProductInfo = ({ id }) => {
    const dispatch = useDispatch()
    dispatch(SelectProduct({type: ACTIONS.SELECT_PRODUCT, value: id}))
    const product = useSelector(ProductByIdSelector)
    const cart = useSelector(CartItemSelector)
    const classes = useStyles()

    return (
        <Paper className={classes.container}>
            <Grid className={classes.root} container spacing={2}>
                <Grid item xs={6}>
                    <h1>{product?.nameProduct}</h1>
                    <Grid className={classes.leftCol} container>
                        <Grid item xs={6}>
                            <p style={{fontSize: 'x-large'}}>Mô tả</p>
                        </Grid>
                        <Grid item xs={6}>
                            <p style={{fontSize: 'x-large'}}>{product?.price}$</p>
                        </Grid>
                    </Grid>
                    <FormControl fullWidth>
                        <TextField variant="outlined" multiline rows={14} value={product?.description} disabled/>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <Grid className={classes.image} container spacing={0} xs>
                        <Grid item direction="column" xs={6}>
                            {/* <Skeleton variant="rect" height={250} width={250} /> */}
                            <img src={product?.imageURL} width={250} height={250} alt={product?.nameProduct} />
                        </Grid>
                        <Grid item direction="column" xs={4} className={classes.vertial}>
                            <Skeleton variant="rect" height={120} width={120} style={{marginBottom: '10px'}} />
                            <Skeleton variant="rect" height={120} width={120} />
                        </Grid>
                    </Grid>
                    <Container className={classes.btn_group}>
                        <Button className={classes.btn} color="primary" variant="contained" onClick={() => {
                            dispatch(AddIntoCart(product))
                        }}>Thêm vào giỏ hàng</Button>
                        <Button className={classes.btn} color="secondary" variant="contained">Đặt hàng nhanh</Button>
                    </Container>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ProductInfo