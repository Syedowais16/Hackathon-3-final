"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import createClient from "../../../sanityClient"; 
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const query = `*[_type == "product" && _id == "${id}"][0] {
        title,
        description,
        "imageUrl": productImage.asset->url,
        price,
        tags,
        discountPercentage,
        isNew
      }`;
      const data = await createClient.fetch(query);
      setProduct(data);
      setLoading(false);
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500 text-lg mt-10">Loading product...</p>;
  if (!product) return <p className="text-center text-red-500 text-lg mt-10">Product not found</p>;

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Product Detail Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={product.imageUrl} alt={product.title} className="w-full h-[400px] object-cover" />
          </div>

          {/* Product Info */}
          <div>
            {/* Product Title */}
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>

            {/* New Badge */}
            {product.isNew && (
              <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mt-2">
                New
              </span>
            )}

            {/* Price & Discount */}
            <div className="mt-4">
              <p className="text-2xl font-bold text-gray-800">
                ${product.price}
                {product.discountPercentage > 0 && (
                  <span className="text-red-500 line-through text-lg ml-3">
                    ${product.price + (product.price * product.discountPercentage) / 100}
                  </span>
                )}
              </p>
            </div>

            {/* Product Description */}
            <p className="mt-6 text-gray-600">{product.description}</p>

            {/* Tags */}
            {product.tags?.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700">Tags:</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Rent Button */}
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              Rent Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
