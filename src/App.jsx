import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./ui/Home"
import Menu, { loader as menuLoader } from "./components/menu/Menu"
import Cart from "./components/cart/Cart"
import AppLayout from "./ui/AppLayout"
import Error from './ui/Error'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: '/cart',
        element: <Cart />
      },
    ],
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App