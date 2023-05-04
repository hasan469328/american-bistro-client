import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";
import HomeLayout from "../layout/HomeLayout";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import RecipeLayout from "../layout/RecipeLayout";
import Recipies from "../pages/Recipes/Recipies";
import BlogLaylout from "../layout/BlogLaylout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NotFound from "../pages/Error/NotFound";

const route = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Navigate to="/home"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/home",
    element: <HomeLayout></HomeLayout>,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "/recipes",
    element: <RecipeLayout></RecipeLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <Recipies></Recipies>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
    ],
  },
  {
    path: "blog",
    element: <BlogLaylout></BlogLaylout>,
    errorElement: <NotFound></NotFound>,
  },
]);

export default route;
