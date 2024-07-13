import { RouterProvider } from "react-router";
import "./App.css";
import routes from "./routes/MainRoutes";
import Cart from "./components/shop/Cart";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <Cart/>
    </>
  );
}
export default App;
