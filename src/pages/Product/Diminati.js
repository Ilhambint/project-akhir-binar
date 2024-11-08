import React from "react";
import Title from "../../components/ProductList/diminati/Title";
import Seller from "../../components/ProductList/Seller";
import CategoryMobile from "../../components/ProductList/diminati/CategoryMobile";
import DesktopView from "../../components/ProductList/diminati/DesktopView";

const Diminati = () => {
  return (
    <div>
      <div className="container max-w-screen-lg mx-auto">
        <Title />
        {/* card nama penjual */}
        <Seller />
        {/* Category Mobile View */}
        <CategoryMobile />
        {/* Desktop View */}
        <DesktopView />
      </div>
    </div>
    /* Kategori end */
  );
};

export default Diminati;