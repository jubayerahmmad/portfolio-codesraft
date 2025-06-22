import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <Navbar />
      <div className="flex-grow mt-16 max-w-7xl mx-auto px-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
