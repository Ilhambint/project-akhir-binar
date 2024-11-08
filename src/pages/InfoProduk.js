import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavigationProduk from '../components/NavigationProduk';


const InfoProduk = () => {
  const [product, setProduct] = useState()
  const [image, setImage] = useState([])
  const navigate = useNavigate()

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.id]: e.target.value
    })
  }
  const thumbs = image.map(img => (
    <div key={img.name}>
      <div>
        <img
          src={URL.createObjectURL(img.selectedFile)}
          alt="thumb"
          className="w-[96px] h-[96px]"
          onLoad={() => { URL.revokeObjectURL(img.preview) }}
        />
      </div>
    </div>
  ));
  const handlePreview = () => {
    let formData = new FormData();
    if (image) {
      for (const i in image) {
          const img = image[i];
          formData.append('image', img.selectedFile);
      }
    }
    for (var key in product) {
      formData.append(key, product[key]);
    }
    formData.append("status", "published")
    axios.post("https://secondhandapi.herokuapp.com/v1/product/",
      formData,
      { headers: { Authorization: Cookies.get("SeconhandToken") } })
      .then(() => {
        navigate('/')
      })
  }
  const handlePublish = () => {
    let formData = new FormData();
    if (image) {
      for (const i in image) {
          const img = image[i];
          formData.append('image', img.selectedFile);
      }
    }
    for (var key in product) {
      formData.append(key, product[key]);
    }
    formData.append("status", "published")
    axios.post("https://secondhandapi.herokuapp.com/v1/product/",
      formData,
      { headers: { Authorization: Cookies.get("SeconhandToken") } })
      .then(() => {
        navigate('/')
      })
  }

  const handleInputChange = (evt) => {
    setImage([...image, {
      selectedFile: evt.target.files[0]
    }])
  }
  return (
    <div>
      <NavigationProduk />
      <section className="py-6 flex justify-center ">
        <div className="sm:block hidden" to="/">
          <img src='/assets/fi_arrow-left.png' alt="img" />
        </div>
        <div className="sm:w-[568px] sm:mx-[78px] h-[568px] w-[328px] flex flex-col justify-between duration-[1s]">
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium text-xs">Nama Produk</label>
            <input
              type="text"
              className="border-2 border-gray-300 rounded-2xl h-[48px] px-4  text-xs"
              placeholder="Nama Produk"
              id="name"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium text-xs">Harga Produk</label>
            <input
              type="text"
              className="border-2 border-gray-300 rounded-2xl h-[48px] px-4  text-xs"
              placeholder="Rp 0,00"
              id="price"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium text-xs">Kategori</label>
            <select
              className="border-2 border-gray-300 rounded-2xl h-[48px] px-4 text-xs"
              id="category"
              onChange={handleChange}>
              <option value="none" hidden>
                Pilih Kategori
              </option>
              <option value="Hobi">Hobi</option>
              <option value="Kendaraan">Kendaraan</option>
              <option value="Baju">Baju</option>
              <option value="Elektronik">Elektronik</option>
              <option value="Kesehatan">Kesehatan</option>
            </select>
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium text-xs">Alamat</label>
            <textarea
              type="textarea"
              className="border-2 border-gray-300 rounded-2xl h-[80px] py-1 px-4 resize-none text-xs"
              placeholder="Contoh: Jalan Ikan Hiu 33"
              id="description"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-medium text-xs">Foto Produk</label>
            <div className="box">
              <div className='flex'>
                {image ? thumbs : ""}
                {image.length < 3 ?
                  <>
                    <label htmlFor="upload_file" className="w-[96px] h-[96px] border-2 rounded-xl border-dashed flex items-center justify-center"><img src='/assets/IcnTambah.png' alt="plus" /></label>
                    <input type="file" className="form-control hidden" id='upload_file' name="upload_file" onChange={handleInputChange} />
                  </>
                  :
                  ""
                }
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div to={"#"}>
              <button
                type="submit"
                className="sm:w-[276px] w-[156px] h-[48px] rounded-2xl border-2 border-purple-700 text-black font-medium text-xs duration-[1s]"
                onClick={handlePreview}>
                Preview
              </button>
            </div>
            <div to={"#"}>
              <button
                type="submit"
                className="sm:w-[276px] w-[156px] h-[48px] rounded-2xl bg-purple-700 text-white font-medium text-xs duration-[1s]"
                onClick={handlePublish}>
                Terbitkan
              </button>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
};


export default InfoProduk