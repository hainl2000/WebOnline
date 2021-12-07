import { Chip, makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { commonConstances as ACTIONS } from '../Action/ActionConstance';
import { ProductByIdSelector } from "../Selector/CommonSelector";
import { useEffect } from 'react';

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
    const dispatch = useDispatch()
    const product = useSelector(ProductByIdSelector)

    return (
        <Chip
            className={classes.tag}
            key={item.id}
            variant="outlined"
            size="small"
            label={item.name}
            onClick={() => {
                navigate(`/product/${item.id}`)
            }}
        />
    )
}

export default ProductTag