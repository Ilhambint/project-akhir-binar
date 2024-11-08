import React from 'react'

const CategoryButton = ({ handleCategory }) => {
  return (
    <div className='flex overflow-scroll scrollbar-hide'>
      <button className='bg-darkblue01 text-sm text-black focus:bg-darkblue04 focus:text-white py-2 px-4 rounded-lg mr-2'
        onClick={() => handleCategory("")}
      >
        Semua
      </button>
      <button className='bg-darkblue01 text-sm text-black focus:bg-darkblue04 focus:text-white py-2 px-4 rounded-lg mr-2'
        onClick={() => handleCategory("Hobi")}
      >
        Hobi
      </button>
      <button className='bg-darkblue01 text-sm text-black focus:bg-darkblue04 focus:text-white py-2 px-4 rounded-lg mr-2'
        onClick={() => handleCategory("Kendaraan")}
      >
        Kendaraan
      </button>
      <button className='bg-darkblue01 text-sm text-black focus:bg-darkblue04 focus:text-white py-2 px-4 rounded-lg mr-2'
        onClick={() => handleCategory("Baju")}
      >
        Baju
      </button>
      <button className='bg-darkblue01 text-sm text-black focus:bg-darkblue04 focus:text-white py-2 px-4 rounded-lg mr-2'
        onClick={() => handleCategory("Elektronik")}
      >
        Elektronik
      </button>
      <button className='bg-darkblue01 text-sm text-black focus:bg-darkblue04 focus:text-white py-2 px-4 rounded-lg mr-2'
        onClick={() => handleCategory("Kesehatan")}
      >
        Kesehatan
      </button>
    </div>
  )
}

export default CategoryButton