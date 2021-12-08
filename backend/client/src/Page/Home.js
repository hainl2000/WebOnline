import NavBar from '../Components/NavBar';
// import Filter from '../Components/Filter';
import ProductGallery from '../Components/ProductGallery';
import { ProductsSelector } from '../Selector/CommonSelector';
import { useSelector } from 'react-redux';

const Home = () => {
    const products = useSelector(ProductsSelector)

    return (
        <div>
            <NavBar />

            <ProductGallery items={products}/>
        </div>
    )
}

export default Home