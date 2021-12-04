import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ProductById } from './Page/Products';
import Home from './Page/Home';

const PageRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/product/:id" exact element={<ProductById />} />
            </Routes>
        </Router>
    )
}

export default PageRouter