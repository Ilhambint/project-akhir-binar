import React, { useEffect, useState } from "react";
import axios from 'axios';
import Cookies from "js-cookie";

const ProfilSeller = () => {
    const [profile, setProfile] = useState()
    useEffect(() => {
        axios.get("https://secondhandapi.herokuapp.com/v1/profile/", { headers: { Authorization: Cookies.get("SeconhandToken") } })
            .then((res) => {
                console.log(res);
                setProfile(res.data.user)
            })
    }, [])

    return (
        <div className="-ml-[200px] mobile:-ml-10">
            {profile &&
                <div className="flex w-80 shadow-md mt-10  mobile:ml-10 rounded-lg mobile:w-72">
                    <div className="mt-3 mb-3 ml-5">
                        <img className="h-14" src={profile.avatar} alt="" />
                    </div>
                    <div className="ml-5 mt-2">
                        <h1>{profile.name}</h1>
                        <p>{profile.city}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default ProfilSeller