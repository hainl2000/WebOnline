import ProductTag from "./ProductTag";
import { ProductsSelector } from '../Selector/CommonSelector';
import { useSelector } from 'react-redux';

const ProductTags = () => {
    const items = useSelector(ProductsSelector)

    return (
        <>
            {items.map(item => (
                <ProductTag key={item.id} item={item}/>
            ))}
        </>
    )
}

export default ProductTags