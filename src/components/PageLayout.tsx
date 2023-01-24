import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { SearchBar } from "@yext/search-ui-react";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: LayoutProps) => (
      <div className="flex justify-center px-4 py-6">
      <div className="w-full max-w-5xl">
    <Header />
    <SearchBar />
    <Navbar />
    {children}
    <Footer />
  </div>
  </div>
);

export default PageLayout;
