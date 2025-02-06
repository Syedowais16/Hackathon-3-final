// app/layout.jsx

import './globals.css';
import { CartProvider } from './context/CartContext'; // Import CartProvider

export const metadata = {
  title: 'Ecommerce Template',
  description: 'Fully responsive ecommerce template with Next.js and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-sans bg-gray-100">
        {/* Wrap children with CartProvider */}
        <CartProvider>
          {children}
          </CartProvider>
      </body>
    </html>
  );
}
