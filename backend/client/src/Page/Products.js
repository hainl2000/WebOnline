import { makeStyles, Container } from "@material-ui/core";
import NavBar from "../Components/NavBar";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import { CommonReducer } from "../Reducer/CommonReducer";
import ProductInfo from "../Components/ProductInfo";
import { useParams } from "react-router";
import { SelectProduct } from '../Action/CommonAction';
import { commonConstances as ACTIONS } from '../Action/ActionConstance';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    page: {
        background: '#999999',
        height: 'calc(100vh - 10px)'
    }
}))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

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