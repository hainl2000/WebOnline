import { Grid, makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import SearchBar from '../Components/SearchBar';
import User from '../Components/User';
import ProductTags from './ProductsTag';
import { useNavigate } from 'react-router';

const useStyles = makeStyles(theme => ({
    nav: {
        background: '#F9A272',
        height: '150px',
        display: 'flex',
        alignItems: 'center'
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
    },
    navLink:
    {
        color: '#FFFFFF'
    }
}))

const NavBar = ({isAdmin = false}) => {
    const classes = useStyles()
    const navigate = useNavigate()

    return (
        <div className={classes.nav}>
            <Grid container direction="row" alignItems="center" spacing={0}>
                <Grid item xs={2}>
                    <Skeleton variant='rect' width={100} height={100} onClick={() => navigate('/')}/>
                </Grid>
                {!isAdmin ? <Grid container item xs={10} direction="column">
                    <Grid className={classes.upperNavBar} container item xs={10}>
                        <Grid item xs={9}>
                            <SearchBar placeholder="Tìm sản phẩm, thương hiệu mong muốn..."/>
                        </Grid>
                        <Grid item container xs={3}>
                            <User />
                        </Grid>
                    </Grid>
                    <Grid item xs={2} className={classes.tagList}>
                        <ProductTags />
                    </Grid>
                </Grid> : <Grid container item xs={10}>
                    <Grid item xs={5}>
                        <h2 className={classes.navLink}>Management</h2>
                    </Grid>
                    <Grid item xs={5}>
                        <h2 className={classes.navLink}>Support</h2>
                    </Grid>
                    <Grid item xs={2}>
                        <h2 className={classes.navLink}>Admin</h2>
                    </Grid>
                </Grid>}
            </Grid>
        </div>
    )
}

export default NavBar