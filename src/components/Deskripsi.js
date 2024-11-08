import React from "react";

const Deskripsi = ({ deskripsi }) => {
  return (
    <div className="flex flex-1 w-[50%] justify-start px-2 py-2 text-justify ml-36 mt-5 mobile:flex-col mobile:mt-3 mobile:ml-0 mobile:p-3 moblie:w-10">
      <div className="w-[45%] h-[90%] text-justify p-6 border-2 shadow-lg rounded-lg mobile:w-72" >
        <h5>Deskripsi</h5>
        <p>
          {deskripsi}
        </p>
      </div>
    </div>
  );
}

export default Deskripsi