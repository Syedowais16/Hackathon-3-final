import React, { useEffect, useState } from "react";

const RelatedProducts = ({ currentProduct }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (currentProduct) {
      fetchRelatedProducts();
    }
  }, [currentProduct]);

  const fetchRelatedProducts = async () => {
    try {
      // Fetch all products (Replace with your actual API endpoint)
      const response = await fetch("/api/products");
      const data = await response.json();

      // Filter out the current product
      let filteredProducts = data.filter((product) => product._id !== currentProduct._id);

      // Shuffle array and select 2 random products
      filteredProducts = filteredProducts.sort(() => 0.5 - Math.random()).slice(0, 2);

      setRelatedProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching related products:", error);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-black">Related Products</h2>
      <div className="grid grid-cols-2 gap-6">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((product) => (
            <div key={product._id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md mb-3 text-black"
              />
              <h3 className="text-lg font-medium text-black">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
              <a
                href={`/products/${product._id}`}
                className="mt-2 inline-block text-blue-600 hover:text-blue-800 font-medium"
              >
                View Details →
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
