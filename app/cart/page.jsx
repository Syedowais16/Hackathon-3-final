// "use client";
// import React, { useState } from "react";
// import { useCart } from "../context/CartContext";
// import TopBar from "../components/TopBar";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Link from "next/link";
// import Toast from "../components/Toast";

// const CartPage = () => {
//     const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
//     const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//     const [toastMessage, setToastMessage] = useState(""); // Toast message state
//     const [toastType, setToastType] = useState(""); // Toast type (success/error)

//     // Function to show toast notification
//     const showToast = (message, type) => {
//         setToastMessage(message);
//         setToastType(type);
//     };


//     return (
//         <div className="bg-gray-100 min-h-screen">
//             <TopBar />
//             <Navbar />

//             <div className="max-w-6xl mx-auto px-6 py-6">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h2>

//                 {cart.length === 0 ? (
//                     <p className="text-gray-600 text-lg">Your cart is empty.</p>
//                 ) : (
//                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                             {/* Cart Items */}
//                             <div className="col-span-2">
//                                 {cart.map((item) => (
//                                     <div key={item._id} className="flex items-center justify-between border-b py-4">
//                                         <img src={item.imageUrl} alt={item.title} className="w-24 h-24 rounded-lg object-cover" />
//                                         <div className="flex-1 px-4">
//                                             <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
//                                             <p className="text-gray-600">${item.price}</p>
//                                         </div>

//                                         <div className="flex items-center">
//                                             {/* Quantity Controls */}
//                                             <button
//                                                 className="px-3 py-1 bg-gray-300 rounded-l-lg"
//                                                 onClick={() => updateQuantity(item._id, item.quantity - 1)}
//                                                 disabled={item.quantity === 1}
//                                             >
//                                                 -
//                                             </button>
//                                             <span className="px-3">{item.quantity}</span>
//                                             <button
//                                                 className="px-3 py-1 bg-gray-300 rounded-r-lg"
//                                                 onClick={() => updateQuantity(item._id, item.quantity + 1)}
//                                             >
//                                                 +
//                                             </button>
//                                         </div>

//                                         <button
//                                             onClick={() => {
//                                                 removeFromCart(item._id);
//                                                 showToast(`${item.title} has been removed from your cart.`, "error");
//                                             }}
//                                             className="ml-4 px-3 py-1 bg-red-500 text-white rounded-lg"
//                                         >
//                                             🗑 Remove
//                                         </button>
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* Cart Summary */}
//                             <div className="bg-gray-200 p-6 rounded-lg">
//                                 <h3 className="text-xl font-bold text-gray-800">Cart Summary</h3>
//                                 <p className="text-gray-600 mt-2">Total Items: {cart.length}</p>
//                                 <p className="text-lg font-bold text-gray-800 mt-2">
//                                     Total Price: ${totalPrice.toFixed(2)}
//                                 </p>
//                                 <Link href="/checkout" className="mt-4 px-4 py-2 bg-green-600 text-white w-full rounded-lg">
//                                     Proceed to Checkout
//                                 </Link>
//                                 <button
//                                     onClick={() => {
//                                         clearCart();
//                                         showToast("Your cart has been cleared.", "error");
//                                     }}
//                                     className="mt-2 px-4 py-2 bg-red-600 text-white w-full rounded-lg"
//                                 >
//                                     Empty Cart
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//             {/* Toast Notification */}
//             <Toast message={toastMessage} type={toastType} onClose={() => setToastMessage("")} />
//             <Footer />
//         </div>
//     );
// };

// export default CartPage;

"use client";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Toast from "../components/Toast";

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const [toastMessage, setToastMessage] = useState(""); // Toast message state
    const [toastType, setToastType] = useState(""); // Toast type (success/error)

    // Function to show toast notification
    const showToast = (message, type) => {
        setToastMessage(message);
        setToastType(type);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <TopBar />
            <Navbar />

            <div className="max-w-6xl mx-auto px-6 py-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Shopping Cart</h2>

                {cart.length === 0 ? (
                    <p className="text-gray-500 text-lg text-center">Your cart is empty.</p>
                ) : (
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Cart Items */}
                            <div className="col-span-2">
                                {cart.map((item) => (
                                    <div
                                        key={item._id}
                                        className="flex items-center justify-between border-b py-4 hover:bg-gray-100 transition-all duration-300 rounded-lg px-3"
                                    >
                                        <img src={item.imageUrl} alt={item.title} className="w-24 h-24 rounded-lg object-cover shadow-md" />
                                        <div className="flex-1 px-4">
                                            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                            <p className="text-gray-600">${item.price}</p>
                                        </div>

                                        <div className="flex items-center">
                                            {/* Quantity Controls */}
                                            <button
                                                className="px-3 py-1 bg-gray-300 rounded-l-lg hover:bg-gray-400 transition"
                                                onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                                disabled={item.quantity === 1}
                                            >
                                                -
                                            </button>
                                            <span className="px-3">{item.quantity}</span>
                                            <button
                                                className="px-3 py-1 bg-gray-300 rounded-r-lg hover:bg-gray-400 transition"
                                                onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => {
                                                removeFromCart(item._id);
                                                showToast(`${item.title} has been removed from your cart.`, "error");
                                            }}
                                            className="ml-4 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                                        >
                                             Remove
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Cart Summary */}
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md border">
                                <h3 className="text-xl font-bold text-gray-800">Cart Summary</h3>
                                <p className="text-gray-600 mt-2">Total Items: {cart.length}</p>
                                <p className="text-lg font-bold text-gray-900 mt-2">
                                    Total Price: <span className="text-green-600">${totalPrice.toFixed(2)}</span>
                                </p>

                                <Link
                                    href="/checkout"
                                    className="mt-6 block w-full text-center bg-green-600 hover:bg-green-700 transition-all duration-300 text-white font-semibold py-3 rounded-lg shadow-md"
                                >
                                    Proceed to Checkout
                                </Link>

                                <button
                                    onClick={() => {
                                        clearCart();
                                        showToast("Your cart has been cleared.", "error");
                                    }}
                                    className="mt-3 w-full text-center bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-semibold py-3 rounded-lg shadow-md"
                                >
                                    Empty Cart
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Toast Notification */}
            <Toast message={toastMessage} type={toastType} onClose={() => setToastMessage("")} />
            <Footer />
        </div>
    );
};

export default CartPage;
