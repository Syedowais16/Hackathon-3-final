"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import createClient from "../../sanityClient"; 
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import FilterPanel from "../components/FilterPanel";
import CategoryFilter from "../components/CategoryFilter";
import { useCart } from "../context/CartContext";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  //const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: 500,
    inStock: false,
  });
  const { addToCart, addToWishlist } = useCart();
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] {
        _id,
        title,
        category,
        description,
        "imageUrl": productImage.asset->url,
        price,
        tags,
        discountPercentage,
        isNew
      }`;
      const data = await createClient.fetch(query);
      setProducts(data);
      setFilteredProducts(data);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let updatedProducts = products.filter((product) => product.price <= filters.priceRange);

    if (filters.inStock) {
      updatedProducts = updatedProducts.filter((product) => product.inStock);
    }

    setFilteredProducts(updatedProducts);
  }, [filters, products]);

  // Filter products when category or search query changes
  useEffect(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.tags && product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery, products]);



  if (!products.length) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Search & Category Filter Section */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        {/* Filter Panel */}
      <FilterPanel filters={filters} setFilters={setFilters} />
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Category Filter Component */}
        <div className="mt-4">
          <CategoryFilter selectedCategory={selectedCategory} onCategorySelect={setSelectedCategory} />
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Product Image */}
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              {/* New Badge */}
              {product.isNew && (
                <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  New
                </span>
              )}

              {/* Product Title */}
              <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>

              {/* Product Price with Discount */}
              <p className="text-lg font-bold text-gray-600">
                ${product.price}{" "}
                {product.discountPercentage > 0 && (
                  <span className="text-red-500 line-through text-sm">
                    ${product.price + (product.price * product.discountPercentage) / 100}
                  </span>
                )}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-lg"
                  onClick={() => addToWishlist(product)}
                >
                  ❤️
                </button>
              </div>
              {/* Link to Product Detail Page */}
              <Link legacyBehavior href={`/products/${product._id}`}>
                <a className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg">
                  View Details
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
