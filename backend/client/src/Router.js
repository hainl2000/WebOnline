import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ProductById } from './Page/Products';
import Home from './Page/Home';
import Cart from './Page/Cart';
import Category from './Page/Category';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { GetAllProducts, GetAllCategories } from './Action/CommonAction'

const PageRouter = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetAllProducts())
        dispatch(GetAllCategories())
    }, [])

    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/product/:id" exact element={<ProductById />} />
                <Route path="/cart" exact element={<Cart />} />
                <Route path="/category/:id" exact element={<Category />} />
            </Routes>
        </Router>
    )
}

export default PageRouter