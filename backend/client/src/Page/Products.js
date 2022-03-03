import { makeStyles, Container } from "@material-ui/core";
import NavBar from "../Components/NavBar";
import ProductInfo from "../Components/ProductInfo";
import { useParams } from "react-router";

const useStyles = makeStyles(theme => ({
    page: {
        background: '#999999',
        height: 'calc(100vh - 10px)'
    }
}))

export const ProductById = () => {
    const classes = useStyles()
    const { id } = useParams()

    return (
        <div className={classes.page}>
            <NavBar />

            <Container>
                <ProductInfo id={id}/>
            </Container>
        </div>
    )
}