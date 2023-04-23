import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

export const MainLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
