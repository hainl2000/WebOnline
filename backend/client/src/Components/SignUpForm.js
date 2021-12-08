import { Paper, makeStyles, TextField, FormControl, Button } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { commonConstances as ACTIONS } from "../Action/ActionConstance";
import { ToggleSigninModal } from '../Action/CommonAction';
import { Signin } from "../Action/AuthenticationAction";

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
    dispatch(ToggleSigninModal({type: ACTIONS.TOGGLE_SIGNIN_MODAL, value: false}))
}

const LoginForm = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Paper className={classes.modal_content}>
            <h1 className={classes.title}>Tạo tài khoản...</h1>
            <FormControl className={classes.form}>
                <TextField
                    className={classes.textfield}
                    variant="outlined"
                    label="tên đăng nhập"
                    autoComplete={false}
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <TextField
                    className={classes.textfield}
                    variant="outlined"
                    label="email"
                    value={email}
                    autoComplete={false}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    className={classes.textfield}
                    variant="outlined"
                    type="password"
                    value={password}
                    label="mật khẩu"
                    autoComplete={false}
                    onChange={e => setPassword(e.target.value)}
                />
            </FormControl>
            <Button className={classes.btn} color="secondary" variant="contained" onClick={() => cancelHandle(dispatch)}>Hủy</Button>
            <Button className={classes.btn} color="primary" variant="contained" onClick={() => dispatch(Signin({username: username, email: email, password: password}))}>Tạo tài khoản</Button>
            <div className={classes.question}>
                <span onClick={() => dispatch(ToggleSigninModal({type: ACTIONS.TOGGLE_SIGNIN_MODAL, value: false}))}>Chưa có tài khoản?</span>
            </div>
        </Paper>
    )
}

export default LoginForm