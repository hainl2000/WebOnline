import { FormControl, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    searchBar: {
        background: '#FFFFFF',
    }
}))

const SearchBar = ({placeholder}) => {
    const classes = useStyles()

    return (
        <FormControl fullWidth className={classes.searchBar} au>
            <TextField className={classes.searchBar} variant="outlined" placeholder={placeholder} />
        </FormControl>
    )
}

export default SearchBar