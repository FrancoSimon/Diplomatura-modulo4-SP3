import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  // Total general considerando cantidad * precio
  const total = cart.reduce((acc, item) => acc + item.precio * (item.cantidad || 1), 0);

  return (
    <div className="p-4 bg-amber-100 rounded-xl mt-6">
      <h2 className="text-xl font-bold text-amber-800">🛒 Mi Carrito</h2>

      {cart.length === 0 ? (
        <p className="text-gray-700 mt-2">No hay servicios seleccionados.</p>
      ) : (
        <>
          <table className="w-full mt-3 border-collapse text-sm md:text-base  text-black">
            <thead>
              <tr className="bg-amber-200 text-left ">
                <th className="p-2 text-black">Servicio</th>
                <th className="p-2 text-center text-black">Cantidad</th>
                <th className="p-2 text-right text-black">Precio unitario</th>
                <th className="p-2 text-right text-black">Subtotal</th>
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b bg-white">
                  <td className="p-2 text-black">{item.nombre}</td>
                  <td className="p-2 text-center text-black">{item.cantidad || 1}</td>
                  <td className="p-2 text-right text-black">${item.precio}</td>
                  <td className="p-2 text-right font-medium ">
                    ${(item.precio * (item.cantidad || 1)).toLocaleString()}
                  </td>
                  <td className="p-2 text-right ">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:underline"
                    >
                      Quitar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-right font-semibold mt-4 text-lg  text-black">
            Total: ${total.toLocaleString()}
          </p>

          <div className="flex justify-end gap-3 mt-3">
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-700"
            >
              Vaciar
            </button>
            <button className="bg-green-700 text-white px-4 py-1 rounded-lg hover:bg-green-800">
              Confirmar Reserva
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
