import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { Grid, makeStyles, Modal, Backdrop, Badge, Button } from '@material-ui/core';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import {
    LoginModalSelector,
    SigninModalSelector,
    CartItemSelector,
    UserSelector,
    AuthenStatusSelector
} from '../Selector/CommonSelector';
import { ToggleLoginModal, ToggleSigninModal } from '../Action/CommonAction';
import { useSelector, useDispatch } from 'react-redux';
import { commonConstances as ACTIONS } from '../Action/ActionConstance';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useNavigate } from 'react-router';
import { Logout } from '../Action/AuthenticationAction';

const useStyles = makeStyles(theme => ({
    user: {
        paddingLeft: '20px',
    },
    icon: {
        fontSize: '60px',
        color: '#FFFFFF'
    },
    user_function: {
        height: '1.5em',
        marignBottom: 0,
        color: '#FFFFFF',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal_content: {
        margin: theme.spacing(1),
        width: theme.spacing(50),
        height: theme.spacing(70),
        outline: 'none'
    },
    loginLink: {
        cursor: 'pointer'
    },
    cart: {
        cursor: 'pointer',
        fontSize: '30px'
    }
}))

const User = () => {
    const classes = useStyles()
    const openLogin = useSelector(LoginModalSelector)
    const openSignin = useSelector(SigninModalSelector)
    const carts = useSelector(CartItemSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const login = useSelector(AuthenStatusSelector)
    const currentUser = useSelector(UserSelector)

    return (
        <>
            <Grid direction="column" item xs={4}>
                <PersonOutlineOutlinedIcon className={classes.icon}/>
            </Grid>
            <Grid className={classes.option_container} direction="row" container item xs={7} spacing={0}>
                {!login ? 
                    <Grid className={classes.user_function} item xs={12} onClick={() => dispatch(ToggleLoginModal({type: ACTIONS.TOGGLE_LOGIN_MODAL, value: true}))}>
                        <span className={classes.loginLink}>????ng nh???p/????ng k??</span>
                    </Grid> : <Grid item xs={12}>
                        <span>{currentUser.username}</span>
                    </Grid>
                }
                <Grid className={classes.user_function} item xs={12}>
                    <Badge badgeContent={carts.length} color="primary">
                        <ShoppingCartOutlinedIcon className={classes.cart} onClick={() => navigate('/cart')}/>
                    </Badge>
                    {login && <Button onClick={() => dispatch(Logout())}>Log out</Button>}
                </Grid>
            </Grid>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openLogin && !login}
                onClose={() => dispatch(ToggleLoginModal({type: ACTIONS.TOGGLE_LOGIN_MODAL, value: false}))}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <LoginForm />
            </Modal>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openSignin && !login}
                onClose={() => dispatch(ToggleSigninModal({type: ACTIONS.TOGGLE_SIGNIN_MODAL, value: false}))}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <SignUpForm />
            </Modal>
        </>
    )
}

export default User