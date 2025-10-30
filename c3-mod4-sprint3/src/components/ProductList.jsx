import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

const ProductList = () => {
  const { addToCart } = useCart();
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    fetch("/src/api/servicios.json")
      .then((res) => res.json())
      .then((data) => setServicios(data))
      .catch((error) => console.error("Error al cargar servicios:", error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">
        Servicios Turísticos en Fiambalá
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicios.map((s) => (
          <div key={s.id} className="border rounded-xl p-4 shadow-md bg-amber-50">
            <h3 className="text-black text-lg font-semibold">{s.nombre}</h3>
            <p className="text-gray-600 text-sm">{s.descripcion}</p>
            <p className="mt-2 text-gray-800 font-medium">Precio: ${s.precio}</p>
            <button
              onClick={() => addToCart(s)}
              className="mt-3 bg-amber-700 text-white px-3 py-1 rounded-lg hover:bg-amber-800"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
