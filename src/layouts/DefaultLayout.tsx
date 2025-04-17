import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="default-layout">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
