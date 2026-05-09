import ReactDom from "react-dom/client";
import "./index.css";
import {BrowserRouter, Outlet, Link,RouterProvider} from "react-router-dom";
import Route from "./routes.jsx/Route";
import { AppProvider } from "./context/AppContext";


const data= ReactDom.createRoot(document.getElementById("root"));
data.render(<AppProvider>
                <RouterProvider  router={Route}/>{""}
            </AppProvider>);




