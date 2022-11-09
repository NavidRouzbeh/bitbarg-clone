 import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Pages/Home/Home";
import React from "react";
const SpotPrice = React.lazy(() => import("../Pages/SpotPrice/SpotPrice"));
 const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/CurrentPrice',
          element:(
              <SpotPrice />
          ),
        }
      ]
    },
  ]);
  
  export default router;