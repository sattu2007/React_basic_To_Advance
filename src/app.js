// ====Nested ==
import { lazy,Suspense, useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStroe from "./utils/appStore";


const Grocery = lazy(() => import("./components/Grocery"));



const AppLayout =  () =>{
   const [userName, setUserName] = useState();
   

   useEffect(() =>{
     const data = {
          name: "Radhe Radhe",
     }
     setUserName(data.name);
   }, []);

     return (

          <Provider store={appStroe}>
          <UserContext.Provider value={{LoggedInUeser: userName, setUserName}}>
               <div className="app">
               <Header/>
               <Outlet/>  
                </div>
          </UserContext.Provider>
          </Provider>
          
     )
}



const appRouter = createBrowserRouter([
     {
          path: "/",
          element: <AppLayout/>,
          children: [
               {
                    path: "/",
                    element: <Body/>,
               },
               {
                    path:"/about",
                    element: <About/>,
               },
               {
                    path: "/contact",
                    element: <Contact/>,
               },
               {
                    path: "/Grocery",
                    element: <Suspense fallback={<h1>Page Is Loaging....</h1>}><Grocery/></Suspense>,
               },
               {
                    path:"/restaurants/:resId",
                    element: <RestaurantMenu/>
               },
          ],
          errorElement:<Error/>,
     },
     {
          path:"/about",
          element: <About/>,
     },
     {
          path: "/contact",
          element: <Contact/>,
     }, 
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);