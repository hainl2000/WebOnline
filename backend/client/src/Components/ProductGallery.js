import { Container, makeStyles } from "@material-ui/core";
import Filter from "./Filter";
import ProductList from './ProductList'

const useStyles = makeStyles(theme => ({
    list: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(25),
          height: theme.spacing(35),
        },
        marginTop: "1em",
    },
    filter: {
        display: 'flex',
        justifyContent: 'start',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(25),
          height: theme.spacing(10),
        },
        marginTop: "1em",
        paddingLeft: "6.5em"
    },
    product_image: {
        marginBottom: '1em'
    },
    product_title: {
        marginLeft: '1em',
        marginBottom: '1em'
    }
}))

const ProductGallery = ({items = []}) => {
    const classes = useStyles()

    return (
        <>
            <Container className={classes.filter}>
                <Filter />
            </Container>
            <Container maxWidth="lg" className={classes.list}>
                <ProductList items={items}/>
            </Container>
        </>
    )
}

export default ProductGallery