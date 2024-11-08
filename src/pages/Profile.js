import React, { useEffect, useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'
import { isLogin } from '../utils/Auth';

const Profile = () => {
  const [profile, setProfile] = useState()
  const [image, setImage] = useState([])
  const navigate = useNavigate()

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.id]: e.target.value
    })
  }

  const thumbs = image.map(img => (
    <div key={img.name}>
      <label htmlFor="upload_file">
        <img
          src={URL.createObjectURL(img.selectedFile)}
          alt="thumb"
          className="w-[96px] h-[96px]"
          onLoad={() => { URL.revokeObjectURL(img.preview) }}
        />
      </label>
    </div>
  ));

  const handleInputChange = (evt) => {
    setImage([{
      selectedFile: evt.target.files[0]
    }])
  }

  const handleSubmit = () => {
    let formData = new FormData();
    if (image) {
      for (const i in image) {
        const img = image[i];
        formData.append('image', img.selectedFile);
      }
    }
    for (var key in profile) {
      formData.append(key, profile[key]);
    }
    axios.put("https://secondhandapi.herokuapp.com/v1/profile/",
      formData,
      { headers: { Authorization: Cookies.get("SeconhandToken") } })
      .then(() => {
        navigate('/')
      })
  }

  useEffect(() => {
    axios.get("https://secondhandapi.herokuapp.com/v1/profile/",
      { headers: { Authorization: Cookies.get("SeconhandToken") } }
    )
      .then((res) => {
        setProfile(res.data.user)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])


  return (
    <div>
      <NavigationBar />
      <section className="flex justify-center py-6">
        <div className="sm:block hidden">
          <img src='/assets/fi_arrow-left.png' alt="img" />
        </div>
        <div className="sm:mx-[78px] sm:w-[568px] w-[328px] h-[552px] flex flex-col justify-between items-center duration-[1s]">
          <div className="w-[96px] h-[96px] bg-purple-100 rounded-xl flex items-center justify-center">
            {image.length !== 0 ? thumbs :
              <>
                <label htmlFor="upload_file" className="w-[96px] h-[96px] border-2 rounded-xl border-dashed flex items-center justify-center">
                  <img src={profile && profile.avatar ? profile.avatar : '/assets/fi_camera.png'} alt="img" />
                </label>
              </>
            }
            <input type="file" className="form-control hidden" id='upload_file' name="upload_file" onChange={handleInputChange} />
          </div>
          <p>klik icon di atas untuk upload</p>
          <div className="w-full flex flex-col justify-between">
            <div className="flex flex-col my-3">
              <label className="mb-1 font-medium">Nama*</label>
              <input
                type="text"
                className="border-2 border-gray-300 rounded-2xl h-[48px] px-5"
                placeholder="Nama"
                id="name"
                value={profile && profile.name ? profile.name : ""}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1 font-medium">Kota*</label>
              <select className="border-2 border-gray-300 rounded-2xl h-[48px] px-5"
                id="city"
                onChange={handleChange}
                value={profile && profile.city ? profile.city : ""}
              >
                <option value="none" hidden>
                  Pilih Kota
                </option>
                <option value="Jakarta">Jakarta</option>
                <option value="Surabaya">Surabaya</option>
                <option value="Bandung">Bandung</option>
                <option value="Malang">Malang</option>
                <option value="Yogyakarta">Yogyakarta</option>
              </select>
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1 font-medium">Alamat*</label>
              <textarea
                type="textarea"
                className="border-2 border-gray-300 rounded-2xl h-[80px] py-1 px-5 resize-none"
                placeholder="Contoh: Jalan Ikan Hiu 33"
                id="address"
                value={profile && profile.address ? profile.address : ""}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1 font-medium">No Handphone*</label>
              <input
                type="text"
                className="border-2 border-gray-300 rounded-2xl h-[48px] px-5"
                placeholder="Contoh: +628123456789"
                id="phone_number"
                value={profile && profile.phone_number ? profile.phone_number : ""}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="h-[48px]  bg-purple-700 text-white rounded-2xl mt-5 font-medium"
              onClick={handleSubmit}
            >
              Simpan
            </button>
          </div>
        </div>
        <div className="sm:w-[24px] w-0" />
      </section>
    </div>
  )
}

export default Profile