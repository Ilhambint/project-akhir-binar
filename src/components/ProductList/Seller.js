import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";


const Seller = () => {
  const [profile, setProfile] = useState()
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + "profile",
      { headers: { Authorization: Cookies.get("SeconhandToken") } })
      .then((res) => {
        console.log(res.data);
        setProfile(res.data.user)
      })
  }, [])

  return (
    <div className="flex p-4 shadow-auto justify-between items-center rounded-3xl">
      {profile &&
        <div className="flex">
          <img src={profile.avatar} alt="" className="w-12 h-12" />
          <div className="text-profil ml-5">
            <h1 className="text-sm lg:text-xl font-medium">{profile.name}</h1>
            <p className="text-tiny lg:text-sm text-gray-300">{profile.city}</p>
          </div>
        </div>
      }
      <Link to="/InfoProfile">
        <button className="border border-purple4 rounded-xl px-5 lg:px-6 py-2 text-sm lg:text-base hover:bg-purple4 hover:text-neutral1 hover:font-semibold">
          Edit
        </button>
      </Link>
    </div>
  );
};

export default Seller;
