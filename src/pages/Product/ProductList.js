import React from "react";
import Category from "../../components/ProductList/Category";
import CategoryMobile from "../../components/ProductList/CategoryMobile";
import Seller from "../../components/ProductList/Seller";
import Title from "../../components/ProductList/Title";

const ProductList = () => {
  return (
      <div className="container max-w-screen-lg mx-auto">
        <Title />
        {/* card nama penjual */}
        <Seller />
        {/* Mobile View */}
        <CategoryMobile />
        {/* Desktop View */}
        <Category />
      </div>
  )
}

export default ProductList