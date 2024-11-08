import React from 'react'
import CategoryMobile from '../../components/ProductList/terjual/CategoryMobile'
import DesktopView from '../../components/ProductList/terjual/DesktopView'
import Seller from '../../components/ProductList/Seller'
import Title from '../../components/ProductList/terjual/Title'

const Terjual = () => {
  return (
    <div className="Product">
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
  )
}

export default Terjual