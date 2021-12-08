import { makeStyles, Paper } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    product: {
        cursor: 'pointer',
        border: '1px solid #AAAAAA'
    },
    product_image: {
        marginBottom: '0.5em'
    },
    product_title: {
        marginLeft: '1em',
        marginTop: 0,
        borderRadius: '5px',
    }
}))

const ProductList = ({items}) => {
    const classes = useStyles()
    const navigate = useNavigate()

    return (
        <>
            {items.map(item => {
                return (
                    <Paper
                        key={item._id}
                        className={classes.product}
                        variant="elevation"
                        elevation={3}
                        onClick={() => {
                            navigate(`/product/${item._id}`)
                        }}
                    >
                        <img src={item.imageURL} alt={item.nameProduct} width={200} height={200} />
                        <h3 className={classes.product_title}>{item.nameProduct}</h3>
                        <h3 className={classes.product_title}>{item.price}$</h3>
                    </Paper>
                )
            })}
        </>
    )
}

export default ProductList