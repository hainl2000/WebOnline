import { Grid, makeStyles } from '@material-ui/core';
import ProductTag from '../Components/ProductTag';
import SearchBar from '../Components/SearchBar';
import User from '../Components/User';
// import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const items = [{id: 1, name: 'iPhone X'}, {id: 2, name: 'iPhone 3'}, {id: 3, name: 'iPhone X Pro'}, {id: 4, name: 'iPhone XS'}]
const useStyles = makeStyles(theme => ({
    nav: {
        background: '#F9A272',
    },
    tagList: {
        display: 'flex',
    },
    searchBar: {
        paddingLeft: '20px',
        paddingTop: '20px'
    }
}))
const NavBar = () => {
    const classes = useStyles()
    return (
        <div className={classes.nav}>
            <Grid container direction="row" alignItems="center" spacing={2}>
                <Grid item xs={2}>
                    <div>BAC</div>
                </Grid>
                <Grid container item xs={10} direction="column">
                    <Grid className={classes.searchBar} container item xs={10}>
                        <Grid item xs={9}>
                            <SearchBar placeholder="Tìm sản phẩm, thương hiệu mong muốn..."/>
                        </Grid>
                        <Grid item container xs={3}>
                            <User />
                        </Grid>
                    </Grid>
                    <Grid item xs={2} className={classes.tagList}>
                        {items.map(item => (
                            <ProductTag key={item.id} item={item}/>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default NavBar