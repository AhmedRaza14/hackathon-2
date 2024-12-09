"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { Navbar3 } from "@/components/Navbar3"; // Ensure this import is correct
import Footer from "@/components/footer"; // Ensure this import is correct
import { Card } from "@/components/ui/card"

const ProductPage = () => {
  const params = useParams();
  const id = params?.id as string; // Ensure `id` is a string
  const [quantity, setQuantity] = useState(1);

  // Dummy product data; replace with real API or database calls
  const products = [
    { id: "1", name: "The Dandy Chair", price: 250, image: "/dandy-chair.png" },
    { id: "2", name: "Rustic Vase Set", price: 155, image: "/vase-set.png" },
    { id: "3", name: "The Silky Vase", price: 125, image: "/silky-vase.png" },
    { id: "4", name: "The Lucy Lamp", price: 399, image: "/lucy-lamp.png" },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Number(e.target.value)); // Ensure quantity is at least 1
    setQuantity(value);
  };

  const totalCost = product.price * quantity;

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar3 />

        {/* Main content */}
        <main className="flex-grow mb-16"> {/* Add bottom margin to prevent footer overlap */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] mx-auto h-[350px]">
            {/* Image Section (Left Side) */}
            <div className="bg-gray-200 w-full h-[80%] flex items-center justify-center p-6">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text Section (Product Details, Right Side) */}
            <div className="flex flex-col justify-center p-6 w-full h-full">
              <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg mb-4">Price: £{product.price}</p>
              <p className="text-lg mb-6">
                This product is crafted with care and precision, offering timeless design and lasting quality.
              </p>

              {/* Quantity Input */}
              <div className="flex items-center space-x-4 mb-6">
                <label htmlFor="quantity" className="text-sm font-medium">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 p-2 border rounded"
                />
              </div>

              {/* Total Cost Display */}
              <p className="text-lg font-semibold mb-6">Total Cost: £{totalCost}</p>

              {/* Add to Cart Button */}
              <Button className="w-[30%]">Add to Cart</Button>
            </div>
          </section>
        </main>

              </div>
              <div className="py-3 pb-6">
  <h2 className="text-3xl font-semibold mb-6 text-black-800">You might also like</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-start">
    {products.map((product, index) => (
      <div
        key={product.id}
        className="transition-all duration-500 ease-out"
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <Card className="border-0 shadow-none group">
          <div className="aspect-square relative overflow-hidden mb-3">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="font-clash font-medium text-lg">{product.name}</h3>
          <p className="text-muted-foreground mb-3">£{product.price}</p>
          <Button className="w-full transition-transform duration-200 hover:scale-105 active:scale-95" variant="outline">
            Add to cart
          </Button>
        </Card>
      </div>
    ))}
  </div>
</div>



        {/* Footer */}
        <Footer />
    </>
  );
};

export default ProductPage;
