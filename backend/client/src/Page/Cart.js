import CartContainer from "../Components/CartContainer"
import NavBar from "../Components/NavBar"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    page: {
        background: '#999999',
        height: 'calc(100vh - 10px)'
    }
}))

const Cart = () => {
    const classes = useStyles()
    
    return (
        <div className={classes.page}>
            <NavBar />
            <CartContainer />
        </div>
    )
}

export default Cart