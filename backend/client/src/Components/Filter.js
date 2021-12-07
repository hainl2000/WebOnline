import { TextField, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    filter: {
        display: 'flex',
        alignItems: 'center',
    },
    to: {
        marginLeft: '10px',
        marginRight: '10px'
    },
    fieldtext: {
        width: "30%",
    }
}))

const Filter = () => {
    const classes = useStyles()

    return (
        <div className={classes.filter}>
            <span className={classes.to}> from </span>
            <TextField variant="outlined" size="small" />
            <span className={classes.to}> to </span>
            <TextField variant="outlined" size="small" />
        </div>
    )
}

export default Filter