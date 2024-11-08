import React from 'react'

const NavigatinPenawar = () => {
  return (
    <div>
    <nav className="sm:h-[84px] sm:px-[136px] h-[52px] w-full px-[16px] shadow-md duration-[1s] flex items-center justify-between">
        <div className="sm:hidden" to="/">
          <img src='/assets/fi_arrow-left.png' alt="img" />
        </div>
        <div className="sm:flex sm:bg-purple-900 w-[100px] h-[34px] hidden" />
        <p className="text-base font-medium leading-6 ">Info Penawar</p>
        <div className="sm:w-[100px] w-[24px]" />
      </nav>
    </div>
  )
}

export default NavigatinPenawar