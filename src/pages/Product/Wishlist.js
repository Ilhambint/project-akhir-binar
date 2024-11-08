import React from "react";
import CategoryMobile from "../../components/ProductList/wishlist/CategoryMobile";
import DesktopView from "../../components/ProductList/wishlist/DesktopView";
import Seller from "../../components/ProductList/Seller";
import Title from "../../components/ProductList/wishlist/Title";

const Wishlist = () => {
  return (
    <div className="Product">
      <div className="container max-w-screen-lg mx-auto">
        <Title />
        {/* card nama penjual */}
        <Seller />
        {/* mobile kategori card start */}
        <CategoryMobile />

        {/* Kategori start */}
        <DesktopView />
      </div>
    </div>
    /* Kategori end */
  );
};

export default Wishlist;