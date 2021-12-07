import { FormControl, TextField, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    searchBar: {
        background: '#FFFFFF',
    },
    searchArea: {
        display: 'flex',
    }
}))

const SearchBar = ({placeholder}) => {
    const classes = useStyles()

    return (
        <div className={classes.searchArea}>
            <FormControl fullWidth className={classes.searchBar}>
                <TextField className={classes.searchBar} variant="outlined" placeholder={placeholder} />
            </FormControl>
            <Button color="primary" variant="contained">Search</Button>
        </div>
    )
}

export default SearchBar