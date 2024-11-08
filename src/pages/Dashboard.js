import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import CategoryButton from '../components/CategoryButton'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Cookies from "js-cookie";
import { Link } from 'react-router-dom'
import ButtonAdd from '../components/ButtonAdd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
  const [product, setProduct] = useState()
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    if (Cookies.get("SeconhandToken")) {
      setIsLogin(true)
    }
    // if (Cookies.get("SeconhandToken")) {
    //   axios.get("https://secondhandapi.herokuapp.com/v1/product/seller", null, { headers: { Authorization: 'Bearer ' + Cookies.get("SeconhandToken") } })
    //     .then((res) => {
    //       setProduct(res.data.product);
    //       setNotification(res.data.notification);
    //     })
    // }
    // else {
    axios.get(process.env.REACT_APP_API_URL + "product")
      .then((res) => {
        setProduct(res.data.product);
      })
    // }
  }, [])

  const handleCategory = (value) => {
    axios.get(process.env.REACT_APP_API_URL + "product?category=" + value)
      .then((res) => {
        setProduct(res.data.product);
      })
  }

  return (
    <div className='min-h-screen bg-white'>
      <Navbar isLogin={isLogin} />
      <Banner />
      <div className='mx-3 lg:mx-[200px]'>
        <h1 className='mb-3 mt-8 text-xl font-bold'>Telusuri Kategori</h1>
        <CategoryButton handleCategory={handleCategory} />
        {product && product.length !== 0 ?
          <div className='my-6 pb-6 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-4'>
            {product && product.map((item) => (
              <Link to={"/product/" + item.id}>
                <ProductCard item={item} key={item.id} />
              </Link>
            )
            )}
          </div>
          :
          <div className='py-24 flex flex-col justify-center'>
            <FontAwesomeIcon icon={faBoxOpen} size={"10x"} className="opacity-50" />
            <h2 className='text-center text-lg'>Produk kosong</h2>
          </div>
        }
      </div>
      <ButtonAdd />
    </div>
  )
}

export default Dashboard