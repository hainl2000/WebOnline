import ProductTag from "./ProductTag";
import { AllCategorySelector } from '../Selector/CommonSelector';
import { useSelector } from 'react-redux';

const ProductTags = () => {
    const items = useSelector(AllCategorySelector)
    console.log(items)

    return (
        <>
            {items.map(item => (
                <ProductTag key={item._id} item={item}/>
            ))}
        </>
    )
}

export default ProductTags