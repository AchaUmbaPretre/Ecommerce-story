import './App.css';
import { createBrowserRouter, RouterProvider, Outlet, Route } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Product from './pages/product/Product';


function App() {

  const Layout = () =>{

    return(
      <div className="layout">
        <Topbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
   
    {
      path: '/',
      element: <Layout/>,
      children : [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/products/:id',
          element: <Products/>
        },
        {
          path: '/product/:id',
          element: <Product/>
        },

      ]

    }

  ])

  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
