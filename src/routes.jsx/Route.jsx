import { createBrowserRouter } from "react-router-dom";
import Applayout from "../layout/Applayout";
import Homepage from "../pages/Homepage";
import Comment from "../pages/Comment";
import Counter from "../pages/Counter";
// import Productdetials from "../pages/Productdetials";
import Errorpage from "../pages/Errorpage";
import Contact from "../pages/Contact/Contact";
import Imagepage from "../pages/Imagepage";
import ComponentA from "../pages/Props/ComponentA";
import Card from "../pages/Card";
import Input from "../pages/input";
import { lazy, Suspense } from "react";
import Loader from "../pages/Loader";
import ExpensiveCal from "../pages/ExpensiveCal";


const Productdetials = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("../pages/Productdetials"));
    }, 3000);
  })
);

const Route= createBrowserRouter([{
  path:"/",
  element:<Applayout/>,
  children:[
    {
      path:"/",
      element:<Homepage/>
    },
    {
      path:"/Counter",
      element:<Counter/>
    },
    {
      path:"/Comment",
      element:<Comment/>
    },
    {
      path:"/Card",
      element:<Card/>
    },
    {
      path:"/Input",
      element:<Input/>
    },
    {
      path:"/Productdetials/:id",
      element:(
      <Suspense fallback={<Loader/>}>
        <Productdetials/>
      </Suspense>
      )

    },
    {
      path:"/Contact",
      element:<Contact/>
    },
    {
      path:"/Image",
      element:<Imagepage/>
    },
    {
      path:"/Props",
      element:<ComponentA/>
    },
    {
      path:"/ExpensiveCal",
      element:<ExpensiveCal/>
    },
    

  ],
  errorElement:<Errorpage/>
 }])

 export default Route;
 