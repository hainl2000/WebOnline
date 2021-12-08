import NavBar from '../Components/NavBar';
import ProductGallery from '../Components/ProductGallery';
import { ProductsSelector } from '../Selector/CommonSelector';
import { useSelector, useDispatch } from 'react-redux';
import { GetProductsByCategory } from '../Action/CommonAction';
import { useParams } from "react-router";

const Category = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    dispatch(GetProductsByCategory(id))

    return (
        <div>
            <NavBar />

            {/* <ProductGallery /> */}
        </div>
    )
}

export default Category