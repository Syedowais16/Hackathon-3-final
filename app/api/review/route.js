import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

// POST method to submit a review
export async function POST(req) {
  try {
    const { rating, comment, productId, author } = await req.json();

    // Create the review document
    const reviewDoc = {
      _type: 'review',
      rating,
      comment,
      product: {
        _type: 'reference',
        _ref: productId, // Reference to the product being reviewed
      },
      author,
    };

    // Create the review in Sanity
    const createdReview = await client.create(reviewDoc);

    return NextResponse.json(createdReview, { status: 201 });
  } catch (error) {
    console.error("Error creating review:", error);
    return new NextResponse('Error creating review', { status: 500 });
  }
}
