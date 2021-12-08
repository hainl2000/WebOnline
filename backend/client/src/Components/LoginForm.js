import { Paper, makeStyles, TextField, FormControl, InputAdornment, Button } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import { useDispatch } from "react-redux";
import { commonConstances as ACTIONS } from "../Action/ActionConstance";
import { ToggleLoginModal, ToggleSigninModal } from '../Action/CommonAction';
import { Login } from '../Action/AuthenticationAction';
import { useState } from "react";
import { AuthenStatusSelector, UserSelector } from "../Selector/CommonSelector";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
    modal_content: {
        margin: theme.spacing(1),
        width: theme.spacing(50),
        height: theme.spacing(70),
        outline: 'none'
    },
    title: {
        marginLeft: '30px',
        marginTop: '30px'
    },
    form: {
        width: '80%',
        marginLeft: '40px',
        marginTop: '90px',
        textAlign: 'center'
    },
    textfield: {
        marginBottom: '1em'
    },
    icon: {
        opacity: '0.5'
    },
    btn: {
        width: theme.spacing(17.5),
        marginLeft: '40px',
        marginTop: '40px'
    },
    question: {
        textAlign: 'center',
        marginTop: '80px',
        cursor: 'pointer',
        fontWeight: 'bold',
        '&:hover': {
            color: '#999999'
        },
        transition: 'color 500ms'
    }
}))

const cancelHandle = (dispatch) => {
    dispatch(ToggleLoginModal({type: ACTIONS.TOGGLE_LOGIN_MODAL, value: false}))
}

const LoginForm = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const login = useSelector(AuthenStatusSelector)
    const currentUser = useSelector(UserSelector)

    return (
        <Paper className={classes.modal_content}>
            <h1 className={classes.title}>Xin chào...</h1>
            <FormControl className={classes.form}>
                <TextField
                    className={classes.textfield}
                    variant="outlined"
                    value={username}
                    label="tên đăng nhập"
                    autoComplete={false}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon className={classes.icon} />
                            </InputAdornment>
                        )
                    }}
                    onChange={e => setUsername(e.target.value)}
                />
                <TextField
                    className={classes.textfield}
                    error={!login && (currentUser !== null)}
                    variant="outlined"
                    value={password}
                    type="password"
                    label="mật khẩu"
                    autoComplete={false}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon className={classes.icon}/>
                            </InputAdornment>
                        )
                    }}
                    onChange={e => setPassword(e.target.value)}
                />
            </FormControl>
            <Button className={classes.btn} color="secondary" variant="contained" onClick={() => cancelHandle(dispatch)}>Hủy</Button>
            <Button
                className={classes.btn}
                color="primary"
                variant="contained"
                onClick={() => dispatch(Login({username: username, password: password}))}
            >
                Đăng nhập
            </Button>
            <div className={classes.question}>
                <span onClick={() => {
                    dispatch(ToggleLoginModal({type: ACTIONS.TOGGLE_LOGIN_MODAL, value: false}))
                    dispatch(ToggleSigninModal({type: ACTIONS.TOGGLE_SIGNIN_MODAL, value: true}))
                }}>Chưa có tài khoản?</span>
            </div>
        </Paper>
    )
}

export default LoginForm