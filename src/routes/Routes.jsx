import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";
import HomeLayout from "../layout/HomeLayout";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";

const route = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
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
  
  },
  // {
  //   path: "/news",
  //   element: <NewsDetail></NewsDetail>,
  //   children: [
  //     {
  //       path: ":id",
  //       element: <PrivateRoute><News></News></PrivateRoute>,
  //       loader: ({ params }) =>
  //         fetch(`https://dragon-news-server-hasan469328.vercel.app/news/${params.id}`),
  //     },
  //   ],
  // },
]);


export default route;