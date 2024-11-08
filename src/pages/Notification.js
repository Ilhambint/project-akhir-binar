import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";

const Notification = () => {
  const navigate = useNavigate()
  return (
    <div className='flex w-full'>
      <div className="text-right absolute lg:hidden top-4 z-50 left-1/2 transform -translate-x-1/2 text-xl font-bold">
        Notifikasi
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 my-16">
        <div className="hidden lg:flex items-start mt-4">
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <IoArrowBack />
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <Link to="/info-penawar">
            <div className="w-full flex p-4 gap-4 border-2 border-gray-400 rounded-md">
              <div>
                <img
                  src="/assets/JamCasio.png"
                  alt=""
                  className="rounded-md cover w-48"
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="w-full text-tiny text-gray-500 flex justify-between">
                  <div>Penawaran Produk</div>
                  <div className="flex items-center gap-2">
                    <p>20 Apr, 14:04</p>
                    <div className="bg-red-500 w-2 h-2 rounded-full"></div>
                  </div>
                </div>
                <div className="text-base">Jam Tangan Abal</div>
                <div className="text-sm my-1">Rp 250.000</div>
                <div className="text-sm">Ditawar Rp 200.000</div>
              </div>
            </div>
          </Link>
          <div className="w-full flex p-4 gap-4 border-2 border-gray-400 rounded-md">
            <div>
              <img
                src="/assets/JamCasio.png"
                alt=""
                className="rounded-md cover w-48"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="w-full text-tiny text-gray-500 flex justify-between">
                <div>Penawaran Produk</div>
                <div className="flex items-center gap-2">
                  <p>20 Apr, 14:04</p>
                  <div className="bg-red-500 w-2 h-2 rounded-full"></div>
                </div>
              </div>
              <div className="text-base">Jam Tangan Abal</div>
              <div className="text-sm my-1">Rp 250.000</div>
              <div className="text-sm">Ditawar Rp 200.000</div>
            </div>
          </div>
          <div className="w-full flex p-4 gap-4 border-2 border-gray-400 rounded-md">
            <div>
              <img
                src="/assets/JamCasio.png"
                alt=""
                className="rounded-md cover w-48"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="w-full text-tiny text-gray-500 flex justify-between">
                <div>Penawaran Produk</div>
                <div className="flex items-center gap-2">
                  <p>20 Apr, 14:04</p>
                  <div className="bg-red-500 w-2 h-2 rounded-full"></div>
                </div>
              </div>
              <div className="text-base">Jam Tangan Abal</div>
              <div className="text-sm my-1">Rp 250.000</div>
              <div className="text-sm">Ditawar Rp 200.000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification