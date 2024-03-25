import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Formulario from "../pages/Formulario";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/formulario",
    element: <Formulario />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
]);
