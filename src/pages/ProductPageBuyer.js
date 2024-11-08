import Deskripsi from '../components/Deskripsi';
import DeskripsiHarga from '../components/DeskripsiHarga'
import ProfilSeller from "../components/ProfilSeller";
import Carousel from '../components/Carousel';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductPageBuyer = () => {
	const { id } = useParams()
	const [product, setProduct] = useState()

	useEffect(() => {
		axios.get("https://secondhandapi.herokuapp.com/v1/product/" + id)
			.then((res) => {
				setProduct(res.data.product)
			})
	}, [])

	return (
		<div>
			{product &&
				<>
					<div
						className="flex flex-1 ml-[120px] mobile:flex-col mobile:relative mobile:mt-3 mobile:p-2 mobile:-ml-[15px]">
						<Carousel images={product.images} />
						<div
							className="flex flex-1 items-center mobile:absolute justify-items-center flex-col mt-10 shadow-around mobile:items-center ml-5 ">
							<DeskripsiHarga name={product.name} category={product.category} price={product.price} />
							<ProfilSeller />
						</div>
					</div>
					<div className="flex flex-1 justify-between">
						<Deskripsi deskripsi={product.description}/>
					</div>
				</>
			}
		</div>
	);
}

export default ProductPageBuyer