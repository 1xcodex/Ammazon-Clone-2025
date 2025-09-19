// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Landing from "./Pages/Landing/Landing";
// import Auth from "./Pages/Auth/Auth";
// import Payment from "./Pages/Payment/Payment";
// import Orders from "./Pages/Orders/Orders";
// import Cart from "./Pages/Cart/Cart";
// import Results from "./Pages/Results/Results";
// import ProductDetail from "./Pages/ProductDetail/ProductDetail"
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';

// // const stripePromise = loadStripe('pk_test_51OixrZIQOoGC5BCayLWvGNjhYQCr21qhY53TBfTHkaJF6Mlf6MdwAC1HUGgYzqKV6Jp2h7BTp7RxdKxw8TYKOYXV00okonf64Y');

// function Routering() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/auth" element={<Auth />} />
//         <Route path="/payments" element={
//         <Elements stripe={stripePromise}>
//           <Payment />
//         </Elements>
//         } />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/category/:categoryName" element={<Results/>} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/products/:productId" element={<ProductDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Routering;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
// import SignIn from "./Pages/Auth/SignIn";
// import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/auto" element={<SignIn />} /> */}
        {/* <Route path="/payments" element={<Payment />} /> */}
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
export default Routering;