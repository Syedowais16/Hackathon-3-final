"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import createClient from "../../../sanityClient";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RelatedProducts from "../../components/RelatedProducts";
import { useCart } from "../../context/CartContext";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [author, setAuthor] = useState('');
    const [error, setError] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            setLoading(true);

            // Fetch product details
            const query = `*[_type == "product" && _id == "${id}"][0] {
        title,
        description,
        "imageUrl": productImage.asset->url,
        price,
        tags,
        discountPercentage,
        isNew
      }`;
            const productData = await createClient.fetch(query);

            // Fetch reviews for the product
            const reviewsQuery = `*[_type == "review" && product._ref == "${id}"] {
        _id,
        rating,
        comment,
        author
      }`;
            const reviewsData = await createClient.fetch(reviewsQuery);

            setProduct(productData);
            setReviews(reviewsData);
            setLoading(false);
        };

        fetchProduct();
    }, [id]);

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        if (rating < 1 || rating > 5) {
            setError('Please select a rating between 1 and 5');
            return;
        }

        try {
            const response = await fetch('/api/review', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ rating, comment, productId: id, author }),
            });

            if (response.ok) {
                // Re-fetch reviews after a successful submission to keep the list updated
                const newReview = await response.json();
                setReviews((prevReviews) => [...prevReviews, newReview]);  // Update state without clearing reviews
                setRating(0);
                setComment('');
                setAuthor('');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error submitting review');
            }
        } catch (error) {
            setError('Error submitting review');
        }
    };

    if (loading) return <p className="text-center text-gray-500 text-lg mt-10">Loading product...</p>;
    if (!product) return <p className="text-center text-red-500 text-lg mt-10">Product not found</p>;

    return (
        <div>
            <TopBar />
            <Navbar />
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img src={product.imageUrl} alt={product.title} className="w-full h-[400px] object-cover" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                        {product.isNew && <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mt-2">New</span>}
                        <div className="mt-4">
                            <p className="text-2xl font-bold text-gray-800">${product.price}
                                {product.discountPercentage > 0 && (
                                    <span className="text-red-500 line-through text-lg ml-3">
                                        ${product.price + (product.price * product.discountPercentage) / 100}
                                    </span>
                                )}
                            </p>
                        </div>
                        <p className="mt-6 text-gray-600">{product.description}</p>
                        {product.tags?.length > 0 && (
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold text-gray-700">Tags:</h3>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {product.tags.map((tag, index) => (
                                        <span key={index} className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                        <button onClick={() => addToCart(product)} className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">Add to Cart</button>
                    </div>
                </div>
                {/* Related Products Section */}
                <RelatedProducts currentProduct={product} />
                {/* Review Section */}
                <div className="mt-12">
                    <h2 className="text-xl font-bold text-gray-800">Customer Reviews</h2>
                    {reviews.length === 0 ? (
                        <p className="mt-4 text-gray-500">No reviews yet. Be the first to review!</p>
                    ) : (
                        <ul className="mt-4 space-y-4">
                            {reviews.map((review) => (
                                <li key={review._id} className="border-b pb-4">
                                    <div className="flex items-center">
                                        <span className="font-semibold">{review.author}</span>
                                        <span className="ml-2 text-yellow-500">{"⭐".repeat(review.rating)}</span>
                                    </div>
                                    <p className="mt-2 text-gray-600">{review.comment}</p>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Review Form */}
                    <h3 className="mt-6 text-lg font-semibold text-gray-700">Leave a Review</h3>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    <form onSubmit={handleSubmitReview} className="mt-4">
                        <div>
                            <label htmlFor="rating" className="block text-black">Rating (1-5):</label>
                            <input
                                id="rating"
                                type="number"
                                min="1"
                                max="5"
                                value={rating}
                                onChange={(e) => setRating(Number(e.target.value))}
                                className="mt-2 px-4 py-2 border rounded-md w-full text-black"
                                required
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="comment" className="block text-black">Comment:</label>
                            <textarea
                                id="comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="mt-2 px-4 py-2 border rounded-md w-full text-black"
                                required
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="author" className="block text-black">Your Name:</label>
                            <input
                                id="author"
                                type="text"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                className="mt-2 px-4 py-2 border rounded-md w-full text-black"
                                required
                            />
                        </div>
                        <button type="submit" className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;

