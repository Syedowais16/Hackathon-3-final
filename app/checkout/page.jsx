// "use client";
// import React, { useState } from "react";
// import { useCart } from "../context/CartContext";
// import { useRouter } from "next/navigation";
// import TopBar from "../components/TopBar";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Link from "next/link";

// // Helper function to validate email
// const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

// const CheckoutPage = () => {
//     const { cart, clearCart } = useCart();
//     const [step, setStep] = useState(1);
//     const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });
//     const [address, setAddress] = useState({ shipping: "", billing: "" });
//     const [paymentMethod, setPaymentMethod] = useState("");
//     const [isOrderPlaced, setIsOrderPlaced] = useState(false);
//     const router = useRouter();

//     const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (step === 1) {
//             if (!userInfo.name || !userInfo.email || !userInfo.phone || !validateEmail(userInfo.email)) {
//                 alert("Please fill out all fields correctly!");
//                 return;
//             }
//             setStep(2);
//         } else if (step === 2) {
//             if (!address.shipping || !address.billing) {
//                 alert("Please provide both shipping and billing addresses!");
//                 return;
//             }
//             setStep(3);
//         } else if (step === 3) {
//             if (!paymentMethod) {
//                 alert("Please select a payment method!");
//                 return;
//             }

//             // Simulating order placement
//             setIsOrderPlaced(true);

//             // Handle form submission and order placement
//             setTimeout(() => {
//                 if (cart.length) {
//                     // Clear cart after successful order placement
//                     clearCart();
//                     // Redirect to product page after successful order
//                     router.push("/products");
//                 }
//             }, 2000); // Simulating a small delay before redirecting
//         }
//     };

//     return (
//         <div className="bg-gray-100 min-h-screen">
//             <TopBar />
//             <Navbar />

//             <div className="max-w-6xl mx-auto px-6 py-6">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h2>

//                 {cart.length === 0 ? (
//                     <p className="text-gray-600 text-lg">
//                         Your cart is empty. <Link href="/products" className="text-blue-600">Start shopping</Link>
//                     </p>
//                 ) : (
//                     <div className="flex">

//                         {/* Multi-Step Form */}
//                         <div className="w-full sm:w-2/3 bg-white p-6 rounded-lg shadow-lg">
//                             <form onSubmit={handleSubmit}>
//                                 {step === 1 && (
//                                     <div className="step-content">
//                                         <h3 className="text-2xl font-semibold text-gray-800 mb-6">Step 1: Personal Information</h3>
//                                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//                                             <input
//                                                 type="text"
//                                                 placeholder="Name"
//                                                 value={userInfo.name}
//                                                 onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
//                                                 className="px-4 py-2 border rounded-lg w-full text-black focus:ring-2 focus:ring-blue-500"
//                                                 required
//                                             />
//                                             <input
//                                                 type="email"
//                                                 placeholder="Email"
//                                                 value={userInfo.email}
//                                                 onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
//                                                 className="px-4 py-2 border rounded-lg w-full text-black focus:ring-2 focus:ring-blue-500"
//                                                 required
//                                             />
//                                             <input
//                                                 type="text"
//                                                 placeholder="Phone"
//                                                 value={userInfo.phone}
//                                                 onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
//                                                 className="px-4 py-2 border rounded-lg w-full text-black focus:ring-2 focus:ring-blue-500"
//                                                 required
//                                             />
//                                         </div>
//                                         <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
//                                             Next
//                                         </button>
//                                     </div>
//                                 )}

//                                 {step === 2 && (
//                                     <div className="step-content">
//                                         <h3 className="text-2xl font-semibold text-gray-800 mb-6">Step 2: Address Information</h3>
//                                         <div className="mb-6">
//                                             <input
//                                                 type="text"
//                                                 placeholder="Shipping Address"
//                                                 value={address.shipping}
//                                                 onChange={(e) => setAddress({ ...address, shipping: e.target.value })}
//                                                 className="px-4 py-2 border rounded-lg w-full text-black focus:ring-2 focus:ring-blue-500"
//                                                 required
//                                             />
//                                         </div>
//                                         <div className="mb-6">
//                                             <input
//                                                 type="text"
//                                                 placeholder="Billing Address"
//                                                 value={address.billing}
//                                                 onChange={(e) => setAddress({ ...address, billing: e.target.value })}
//                                                 className="px-4 py-2 border rounded-lg w-full text-black focus:ring-2 focus:ring-blue-500"
//                                                 required
//                                             />
//                                         </div>
//                                         <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
//                                             Next
//                                         </button>
//                                     </div>
//                                 )}

//                                 {step === 3 && (
//                                     <div className="step-content">
//                                         <h3 className="text-2xl font-semibold text-gray-800 mb-6">Step 3: Payment Method</h3>
//                                         <div className="mb-6">
//                                             <label className="block text-gray-800">Choose Payment Method</label>
//                                             <select
//                                                 value={paymentMethod}
//                                                 onChange={(e) => setPaymentMethod(e.target.value)}
//                                                 className="px-4 py-2 border rounded-lg w-full text-black focus:ring-2 focus:ring-blue-500"
//                                             >
//                                                 <option value="">Select Payment Method</option>
//                                                 <option value="paypal">PayPal</option>
//                                                 <option value="stripe">Stripe</option>
//                                                 <option value="bank-transfer">Bank Transfer</option>
//                                             </select>
//                                         </div>
//                                         <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
//                                             Place Order
//                                         </button>
//                                     </div>
//                                 )}
//                             </form>
//                         </div>

//                         {/* Order Summary */}
//                         <div className="bg-white p-6 rounded-lg shadow-lg ml-6 w-1/3">
//                             <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>
//                             {cart.map((item) => (
//                                 <div key={item._id} className="flex items-center justify-between border-b py-4">
//                                     <img src={item.imageUrl} alt={item.title} className="w-24 h-24 rounded-lg object-cover" />
//                                     <div className="flex-1 px-4">
//                                         <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
//                                         <p className="text-gray-600">${item.price}</p>
//                                     </div>
//                                     <div className="flex items-center">
//                                         <span className="px-3">{item.quantity}</span>
//                                         <p className="text-gray-800 font-bold">x${item.price * item.quantity}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                             <div className="mt-4 border-t pt-4">
//                                 <p className="text-lg font-semibold text-gray-800">
//                                     Total Price: ${totalPrice.toFixed(2)}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>

//             <Footer />

//             {/* Order Success Popup */}
//             {isOrderPlaced && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
//                     <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
//                         <h3 className="text-xl font-semibold text-green-600 mb-4">Order Placed Successfully!</h3>
//                         <p className="text-lg text-gray-600 mb-4">You will be redirected shortly.</p>
//                         <div className="flex justify-center">
//                             <svg
//                                 className="animate-spin h-8 w-8 text-green-600"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                 <path
//                                     className="opacity-75"
//                                     fill="currentColor"
//                                     d="M4 12a8 8 0 0 1 8-8V4a10 10 0 1 0 0 20v-2a8 8 0 0 1-8-8z"
//                                 ></path>
//                             </svg>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CheckoutPage;

"use client";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Helper function to validate email
const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

const CheckoutPage = () => {
    const { cart, clearCart } = useCart();
    const [step, setStep] = useState(1);
    const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });
    const [address, setAddress] = useState({ shipping: "", billing: "" });
    const [paymentMethod, setPaymentMethod] = useState("");
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
    const router = useRouter();

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (step === 1) {
            if (!userInfo.name || !userInfo.email || !userInfo.phone || !validateEmail(userInfo.email)) {
                alert("Please fill out all fields correctly!");
                return;
            }
            setStep(2);
        } else if (step === 2) {
            if (!address.shipping || !address.billing) {
                alert("Please provide both shipping and billing addresses!");
                return;
            }
            setStep(3);
        }
    };

    // Handle Place Order
    const handlePlaceOrder = () => {
        if (!paymentMethod) {
            alert("Please select a payment method!");
            return;
        }
        // Display success toast notification
        toast.success("Order placed successfully! You will be redirected shortly.");
        // Simulating order placement
        setIsOrderPlaced(true);

        // Handle form submission and order placement
        setTimeout(() => {
            if (cart.length) {
                // Clear cart after successful order placement
                clearCart();
                // Redirect to product page after successful order
                router.push("/products");
            }
        }, 2000); // Simulating a small delay before redirecting
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <TopBar />
            <Navbar />

            <div className="max-w-6xl mx-auto px-6 py-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h2>

                {cart.length === 0 ? (
                    <p className="text-gray-600 text-lg">
                        Your cart is empty. <Link href="/products" className="text-blue-600">Start shopping</Link>
                    </p>
                ) : (
                    <div className="flex">

                        {/* Multi-Step Form */}
                        <div className="w-full sm:w-2/3 bg-white p-6 rounded-lg shadow-lg">
                            <form onSubmit={handleSubmit}>
                                {step === 1 && (
                                    <div className="step-content">
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Step 1: Personal Information</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                value={userInfo.name}
                                                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                                                className="px-4 py-2 border rounded-lg w-full text-black focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                value={userInfo.email}
                                                onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                                                className="px-4 py-2 border rounded-lg w-full text-black focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                            <input
                                                type="text"
                                                placeholder="Phone"
                                                value={userInfo.phone}
                                                onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                                                className="px-4 py-2 border rounded-lg w-full text-black focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                                            Next
                                        </button>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="step-content">
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Step 2: Address Information</h3>
                                        <div className="mb-6">
                                            <input
                                                type="text"
                                                placeholder="Shipping Address"
                                                value={address.shipping}
                                                onChange={(e) => setAddress({ ...address, shipping: e.target.value })}
                                                className="px-4 py-2 border rounded-lg w-full text-black focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <input
                                                type="text"
                                                placeholder="Billing Address"
                                                value={address.billing}
                                                onChange={(e) => setAddress({ ...address, billing: e.target.value })}
                                                className="px-4 py-2 border rounded-lg w-full text-black focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                                            Next
                                        </button>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="step-content">
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Step 3: Payment Method</h3>
                                        <div className="mb-6">
                                            <label className="block text-gray-800">Choose Payment Method</label>
                                            <select
                                                value={paymentMethod}
                                                onChange={(e) => setPaymentMethod(e.target.value)}
                                                className="px-4 py-2 border rounded-lg w-full text-black focus:ring-2 focus:ring-blue-500"
                                            >
                                                <option value="">Select Payment Method</option>
                                                <option value="paypal">PayPal</option>
                                                <option value="stripe">Stripe</option>
                                                <option value="bank-transfer">Bank Transfer</option>
                                            </select>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Order Summary */}
                        <div className="bg-white p-6 rounded-lg shadow-lg ml-6 w-1/3">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>
                            {cart.map((item) => (
                                <div key={item._id} className="flex items-center justify-between border-b py-4">
                                    <img src={item.imageUrl} alt={item.title} className="w-24 h-24 rounded-lg object-cover" />
                                    <div className="flex-1 px-4">
                                        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                        <p className="text-gray-600">${item.price}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="px-3">{item.quantity}</span>
                                        <p className="text-gray-800 font-bold">x${item.price * item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="mt-4 border-t pt-4">
                                <p className="text-lg font-semibold text-gray-800">
                                    Total Price: ${totalPrice.toFixed(2)}
                                </p>
                                {step === 3 && (
                                    <button
                                        onClick={handlePlaceOrder}
                                        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 mt-6"
                                    >
                                        Place Order
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* Order Success Popup */}
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <Footer />

            {/* Order Success Popup */}
            {isOrderPlaced && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
                        <h3 className="text-xl font-semibold text-green-600 mb-4">Order Placed Successfully!</h3>
                        <p className="text-lg text-gray-600 mb-4">You will be redirected shortly.</p>
                        <div className="flex justify-center">
                            <svg
                                className="animate-spin h-8 w-8 text-green-600"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 0 1 8-8V4a10 10 0 1 0 0 20v-2a8 8 0 0 1-8-8z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckoutPage;
