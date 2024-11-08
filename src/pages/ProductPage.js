import ProfilSeller from "../components/ProfilSeller";
import Carousel from '../components/Carousel';
import DeskripsiHargaSeller from '../components/DeskripsiHargaSeller';
import Deskripsi from '../components/Deskripsi';

const ProductPage = () => {
	return (
		<div>
			<div
				className="flex flex-1 justify-center pl-[150px] mobile:flex-col mobile:mt-3 mobile:p-3 ">
				<Carousel />
				<div
					className="flex flex-1 items-center justify-items-center flex-col mt-10 shadow-around mobile:items-center  ">
					<DeskripsiHargaSeller />
					<div>
						<ProfilSeller />
					</div>
				</div>

			</div>
			<div className="flex flex-1 justify-between">
				<Deskripsi />
			</div>
		</div>
	);
}

export default ProductPage