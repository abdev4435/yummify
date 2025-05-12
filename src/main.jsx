import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store/store.js";
import { Home, Restuarants, MyOrders, ProfileInfo, Addresses } from "./Pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "restuarants",
        element: <Restuarants />
      },
      {
        path: "userId",
        element: <Home />
      },
      {
        path: "my-orders",
        element: <MyOrders />
      },
      {
        path: "profile-info",
        element: <ProfileInfo />
      },
      {
        path: "addresses",
        element: <Addresses />
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
