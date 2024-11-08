import React, { useEffect, useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from "js-cookie";
import { isLogin, login } from '../utils/Auth';

const Login = () => {
	const [open, setOpen] = useState(false)
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const navigate = useNavigate()

	const toggle = () => {
		setOpen(!open)
	}

	useEffect(() => {
		if (isLogin())
			navigate("/")
	}, []);

	const onSubmit = () => {
		if (email && password) {
			axios.post("https://secondhandapi.herokuapp.com/v1/auth/login", {
				email: email,
				password: password
			})
				.then((res) => {
					login(res.data.token)
					Cookies.set("SeconhandToken", res.data.token);
					navigate('/')
				})
				.catch((err) => {
					console.log(err);
				})
		}
	}

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
			<div className='hidden sm:block bg-register'></div>
			<div className='flex flex-col justify-center'>
				<div className='max-w-[400px] w-full mx-auto bg-gray-100 p-8 px-8 rounded-2xl'>
					<h2 className=' text-35px text-center font-bold'>SIGN IN</h2>
					<div className='flex flex-col text-black py-2 '>
						<label>Email</label>
						<input
							className='rounded-xl p-2 text-black'
							placeholder='Example: johndee@gmail.com'
							type='text'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='flex flex-col py-2 text-black relative'>

						<label>Password</label>
						<input
							className='rounded-md p-1 text-black'
							placeholder='Masukkan password'
							type={(open === false) ? 'password' : 'text'}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<div className='text-2xl absolute right-2 bottom-4'>
							{
								(open === false) ? <AiFillEyeInvisible onClick={toggle} /> :
									<AiFillEye onClick={toggle} />
							}
						</div>
					</div>
					<button
						className='w-full my-5 py-2 bg-purple-500 rounded-md font-bold shadow-lg shadow-purple-500/50 hover:shadow-purple/40 text-white'
						onClick={onSubmit}>
						Masuk
					</button>

					<div>
						<p className='text-black text-center p-5'>Belum punya akun? <Link to="/register" className='text-purple-500'>Daftar di sini</Link></p>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Login