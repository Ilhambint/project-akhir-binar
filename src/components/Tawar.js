import React from "react";
import ProfilSeller from "./ProfilSeller";

const Tawar = () => {
    return (
        <div className="flex justify-center mt-60">
            <div
                className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Masukan Harga Tawarmu</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Harga tawaranmu akan diketahui penual,
                    jika penjual cocok kamu akan segera dihubungi penjual.</p>
                <div className="mb-5">
                    <ProfilSeller />
                </div>
                <p>Harga Tawar</p>
                <input className="appearance-none block w-80 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-3 mb-3  gap-4 leading-tight focus:outline-none focus:bg-white"></input>
                <br />
                <a
                    href="#"
                    class="inline-flex items-center justify-center w-80 py-3 px-3 gap-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Kirim
                </a>
            </div>
        </div>
    );
}

export default Tawar