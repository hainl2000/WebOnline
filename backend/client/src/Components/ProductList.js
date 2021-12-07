import { makeStyles, Paper } from "@material-ui/core";
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    product: {
        cursor: 'pointer',
        border: '1px solid #AAAAAA'
    },
    product_image: {
        marginBottom: '1em'
    },
    product_title: {
        marginLeft: '1em',
        marginBottom: '1em',
        borderRadius: '5px',
    }
}))

const ProductList = () => {
    const classes = useStyles()

    return (
        <>
            {[1,2,3,4,5,6,7,8,9,10].map(id => {
                return (
                    <Paper key={id} className={classes.product} variant="elevation" elevation={3}>
                        <Skeleton variant="rect" width={200} height={200} className={classes.product_image}/>
                        <Skeleton variant="h3" width="60%" className={classes.product_title}/>
                        <Skeleton variant="h3" width="50%" className={classes.product_title}/>
                    </Paper>
                )
            })}
        </>
    )
}

export default ProductList