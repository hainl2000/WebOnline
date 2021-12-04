import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    user: {
        paddingLeft: '20px',
    },
    icon: {
        fontSize: '60px',
        // position: 'absolute',
        color: '#FFFFFF'
    },
    user_function: {
        height: '1.5em',
        marignBottom: 0,
        cursor: 'pointer',
        color: '#FFFFFF',
    },
}))

const User = () => {
    const classes = useStyles()

    return (
        <>
            <Grid direction="column" item xs={4}>
                <PersonOutlineOutlinedIcon className={classes.icon}/>
            </Grid>
            <Grid className={classes.option_container} direction="row" container item xs={7} spacing={0}>
                <Grid className={classes.user_function} item xs={12}>
                    Đăng nhập/Đăng ký
                </Grid>
                <Grid className={classes.user_function} item xs={12}>
                    Giỏ hàng
                </Grid>
            </Grid>
        </>
    )
}

export default User