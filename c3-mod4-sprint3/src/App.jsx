import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ThemeButton from "./components/ThemeButton";

export default function App() {
  return (
    <CartProvider>
      <div className="max-w-4xl mx-auto my-6 p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            Turismo en Fiambalá
          </h1>
          <ThemeButton />
        </div>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}
