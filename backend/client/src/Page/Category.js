import NavBar from '../Components/NavBar';
import ProductGallery from '../Components/ProductGallery';
import { ProductByCategory } from '../Selector/CommonSelector';
import { useSelector, useDispatch } from 'react-redux';
import { GetProductsByCategory } from '../Action/CommonAction';
import { useParams } from "react-router";

const Category = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    dispatch(GetProductsByCategory(id))
    const items = useSelector(ProductByCategory)

    return (
        <div>
            <NavBar />

            <ProductGallery items={items}/>
        </div>
    )
}

export default Category