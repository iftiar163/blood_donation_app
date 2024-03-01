import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumb from "./Breadcrumb";

export const Layouts = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Outlet />
      <Footer />
    </>
  );
};
