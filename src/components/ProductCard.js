import React from 'react'

const ProductCard = (item) => {
  const data = item.item
  return (
    <div className='border-2 border-grey-lightest p-2 w-full'>
      <img src={data.images[0].path} alt='' className='left-1/2' />
      <h3 className='text-md mt-2'>{data.name}</h3>
      <h4 className='text-xs'>{data.category}</h4>
      <h3 className='text-md mt-1'>Rp. {(data.price).toLocaleString(['id'])}</h3>
    </div>
  )
}

export default ProductCard