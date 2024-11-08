import React from "react";
import { Button } from "@material-tailwind/react";

const DeskripsiHargaSeller = () => {
	return (
		<div >
			<div className="shadow-md w-[330px] h-[280px] pl-[24px] pt-5 -ml-[220px] mt-10 mobile:mt-[20px] mobile:relative mobile:w-72 mobile:-ml-5 mobile:-mt-[100px] ">
				<h1 className="title text-[24px] mobile:text-[14px]">Jam Tangan Casio</h1>
				<p className="pr-[4rem] text-justify mt-1 text-[] mobile:pr-0 color-grey-600 mobile:text-[10px]">
					Aksesoris
				</p>
				<p className="mt-1 text-2xl mobile:text-[14px]">
					<b>Rp 250.000</b>
				</p>

				<Button
					className="ml-10 mb-3.5 mt-6 ml-[25px] px-4 py-2 w-60 bg-purple-600 border-solid border-2 rounded-lg mobile:w-[308px] mobile:h-[48px] mobile:text-[14px] mobile:-ml-5">Terbitkan</Button>
				<br />
				<Button
					className=" ml-10 mb-3.5 mt-1 ml-[25px] px-4 py-2 w-60 border-purple-600 border-solid border-2 rounded-lg  mobile:w-[308px] mobile:h-[48px] mobile:text-[14px] mobile:-ml-5 mobile:disabled">
					<p className="text-black">Edit</p>
				</Button>

			</div>
		</div>
	);
}

export default DeskripsiHargaSeller