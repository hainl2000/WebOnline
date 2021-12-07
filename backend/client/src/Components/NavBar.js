import { Grid, makeStyles } from '@material-ui/core';
import SearchBar from '../Components/SearchBar';
import User from '../Components/User';
import { Provider } from 'react-redux';
import { CommonReducer } from '../Reducer/CommonReducer';
import { applyMiddleware, compose } from 'redux';
import ProductTags from './ProductsTag';

const useStyles = makeStyles(theme => ({
    nav: {
        background: '#F9A272',
        height: '150px'
    },
    tagList: {
        display: 'flex',
    },
    upperNavBar: {
        paddingLeft: '20px',
        paddingTop: '20px'
    },
    searchBar: {
        display: 'flex',
    },
    btn: {
        height: '50px',
    }
}))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const NavBar = () => {
    const classes = useStyles()

    return (
        <div className={classes.nav}>
            <Grid container direction="row" alignItems="center" spacing={2}>
                <Grid item xs={2}>
                    <div>BAC</div>
                </Grid>
                <Grid container item xs={10} direction="column">
                    <Grid className={classes.upperNavBar} container item xs={10}>
                        <Grid item xs={9}>
                            <SearchBar placeholder="Tìm sản phẩm, thương hiệu mong muốn..."/>
                        </Grid>
                        <Grid item container xs={3}>
                            {/* <Provider store={store}> */}
                                <User />
                            {/* </Provider> */}
                        </Grid>
                    </Grid>
                    <Grid item xs={2} className={classes.tagList}>
                        {/* <Provider store={store}> */}
                            <ProductTags />
                        {/* </Provider> */}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default NavBar