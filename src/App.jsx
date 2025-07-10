import React from "react";

const products = [
  {
    id: 1,
    name: "Smart LED Night Light",
    price: "$19.99",
    rating: 4.7,
    image: "https://via.placeholder.com/300x200?text=LED+Night+Light",
  },
  {
    id: 2,
    name: "Portable Blender",
    price: "$34.99",
    rating: 4.8,
    image: "https://via.placeholder.com/300x200?text=Portable+Blender",
  },
  {
    id: 3,
    name: "Wireless Charging Pad",
    price: "$24.99",
    rating: 4.6,
    image: "https://via.placeholder.com/300x200?text=Charging+Pad",
  },
];

function StarIcon() {
  return (
    <svg
      className="w-4 h-4 text-yellow-500 inline-block"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.388 2.462c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L3.608 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="p-6 max-w-7xl mx-auto font-sans">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Zentri</h1>
        <div className="flex gap-2 items-center">
          <input
            placeholder="Search products..."
            className="border rounded px-3 py-1 w-64"
          />
          <button className="border rounded px-3 py-1">Search</button>
          <button className="px-3 py-1">🛒</button>
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl shadow-md border overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <div className="flex items-center gap-1">
                <StarIcon />
                <span className="text-sm">{product.rating}</span>
              </div>
              <p className="text-xl font-bold">{product.price}</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
