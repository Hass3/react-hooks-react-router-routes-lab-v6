import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import ErrorPage from "./pages/ErrorPage";
const routes = [
   {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />
   }, 
   {
    path: "/directors",
    element: <Directors/>,
    errorElement: <ErrorPage />
   }, 
   {
    path: "/actors",
    element: <Actors/>,
    errorElement: <ErrorPage />
   }, 
   {
    path: "/movie/:id",
    element: <Movie/>,
    errorElement: <ErrorPage />
   }
  ];

export default routes;

/**routes.js
You'll be adding the routes you create to this file and saving 
them within the routes variable. You'll need to provide routes for /, 
/directors, /actors, and /movie. The /movie route should also include a URL
 parameter called id. Don't forget that you'll need to import components into this file! */