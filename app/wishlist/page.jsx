"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WishlistPage = () => {
  const { wishlist, addToCart, removeFromWishlist } = useCart();

  return (
    <div className="bg-gray-100 min-h-screen">
      <TopBar />
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">💖 Your Wishlist</h2>

        {wishlist.length === 0 ? (
          <p className="text-gray-600 text-lg">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              <div key={item._id} className="bg-white p-4 rounded-lg shadow-lg">
                <img src={item.imageUrl} alt={item.title} className="w-full h-48 rounded-lg object-cover" />
                <h3 className="text-lg font-semibold text-gray-800 mt-2">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>

                <div className="flex justify-between mt-4">
                  {/* Add to Cart */}
                  <button
                    onClick={() => {
                      addToCart(item);
                      removeFromWishlist(item._id);
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg"
                  >
                    🛒 Add to Cart
                  </button>

                  {/* Remove from Wishlist */}
                  <button
                    onClick={() => removeFromWishlist(item._id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg"
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default WishlistPage;
