import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import Cart from "./pages/cart/Cart";
// import Shop from "./pages/shop/Shop";
import ItemDetail from "./pages/details/ItemDetail";
import { Suspense, lazy } from "react";

const Shop = lazy(() => import("./pages/shop/Shop"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback="loading component...">
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/item/:itemId",
        element: <ItemDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
