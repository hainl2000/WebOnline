import { Chip, makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    tag: {
        marginLeft: '1em',
        marginTop: '1em',
        background: '#FFFFFF',
        '&:hover': {
            background: '#AAAAAA',
        }
    }
}))

const ProductTag = ({item}) => {
    const classes = useStyles()
    const navigate = useNavigate()

    return (
        <Chip
        className={classes.tag}
        key={item.id}
        variant="outlined"
        size="small"
        label={item.name}
        onClick={() => navigate(`/product/${item.id}`)}
        />
    )
}

export default ProductTag