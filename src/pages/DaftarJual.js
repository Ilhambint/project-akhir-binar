import React from 'react'
import Navbar from '../components/Navbar'

const DaftarJual = () => {
  return (
    <>
    <Navbar />
    <div className='mx-72'>
      <h3 className='font-bold mb-2'>Daftar Jual Saya</h3>
      <div className='flex  border-4 rounded-lg p-2'>
        <img src="/assets/FotProfil.png" alt="" />
        <div>
          <h4 className='font-bold'>Nama Penjual</h4>
          <p>Kota</p>
        </div>
        <button>Edit</button>
      </div>
    </div>
    </>
  )
}

export default DaftarJual