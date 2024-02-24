import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LazyLayout from './components/LazyLayout';


//Lazy Imports 
import UserLayout from './components/User/UserLayout';
import HomeLayout from './components/Home/HomeLayout'; 

import LazyLogin from './auth/login/login';
import LazyRegister from './auth/register/register';
import LazyHome from './components/Home/Homepage/homepage';
import LazyProfile from './components/User/Profile/Profile';
import LazyProducts from './components/User/Products/Products';
import LazyOrder from './components/User/Order/Order';
import LazyCart from './components/User/Cart/Cart';
import LazyPay from './components/User/Payment/Payment';


const HomeRoutes = () => {
    return (
            <HomeLayout> {/* Wrap the Routes with HomeLayout */}
                <Routes>
                  <Route path='/' element = { <LazyLayout component={LazyHome}/>}/>
                </Routes>
            </HomeLayout>
    );
};

const UserRoutes = () => {
    return (
            <UserLayout> {/* Wrap the Routes with UserLayout */}
                <Routes>
                  <Route path='/products' element = { <LazyLayout component={LazyProducts}/>}/>
                  <Route path='/profile' element = { <LazyLayout component={LazyProfile}/>}/>
                  <Route path='/order' element = { <LazyLayout component={LazyOrder}/>}/>
                  <Route path='/cart' element = { <LazyLayout component={LazyCart}/>}/>
                  <Route path='/cart/pay' element = { <LazyLayout component={LazyPay}/>}/>
                </Routes>
            </UserLayout>
    );
};

const App = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/giftvibes/home"/>}/>
                    <Route path="/giftvibes/login" element={<LazyLayout component={LazyLogin}/>}/>
                    <Route path="/giftvibes/register" element={<LazyLayout component={LazyRegister}/>}/>
                    <Route path="/giftvibes/home/*" element={<HomeRoutes />}/>
                    <Route path="/giftvibes/user/*" element={<UserRoutes />}/>
                </Routes>
       </BrowserRouter>
    );
};

export default App;








// import { useState, lazy, Suspense } from 'react';
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import LazyLayout from './components/LazyLayout';

// const LazyLogin = lazy(() => import('./auth/login/login'));
// const LazyRegister = lazy(() => import('./auth/register/register'));

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Suspense fallback="Loading...">
//         <Routes>
//           <Route path="/" element={<LazyLayout component={HomePage} />} />
//           <Route path="/giftvibes/login" element={<LazyLayout component={LazyLogin} />} />
//           <Route path="/giftvibes/register" element={<LazyLayout component={LazyRegister} />} />
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// };

// const HomePage = () => {
//   return <Navigate to="/giftvibes/login" />;
// };

// export default App;
