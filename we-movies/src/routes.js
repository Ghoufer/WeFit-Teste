import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "pages/Home";
import Cart from "pages/Cart";
import Success from "pages/Success";
import Header from "components/Header";

const AppRoutes = () => {
   return (
       <Router>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/success' element={<Success />} />
            </Routes>
       </Router>
   )
}

export default AppRoutes;