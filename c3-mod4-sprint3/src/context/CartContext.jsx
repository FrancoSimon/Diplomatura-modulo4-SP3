import React, { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("carritoFiambala");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("carritoFiambala", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (servicio) => {
    const existe = cart.find((item) => item.id === servicio.id);
    if (existe) {
      setCart(
        cart.map((item) =>
          item.id === servicio.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...servicio, cantidad: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const item = cart.find((s) => s.id === id);
    if (item.cantidad > 1) {
      setCart(
        cart.map((s) =>
          s.id === id ? { ...s, cantidad: s.cantidad - 1 } : s
        )
      );
    } else {
      setCart(cart.filter((s) => s.id !== id));
    }
  };
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
