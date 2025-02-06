// sanityClient.js

import { createClient } from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";

// Initialize the Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-03-25', // Use the latest API version
  useCdn: true, // Use the CDN for faster response
});

// Initialize the image URL builder with the client
const builder = imageUrlBuilder(client);

// Export the helper function to build image URLs
export const urlFor = (source) => builder.image(source);

// Export the client to use in other parts of your app
export default client;
