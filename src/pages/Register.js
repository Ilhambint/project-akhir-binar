import axios from 'axios'
import React, { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Link, useNavigate } from "react-router-dom"

const Register = () => {
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const navigate = useNavigate()

    const onSubmit = () => {
        if (email && password) {
            axios.post("https://secondhandapi.herokuapp.com/v1/auth/register", {
                name: name,
                email: email,
                password: password
            })
                .then((res) => {
                    console.log(res);
                    navigate('/login')
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    const toggle = () => {
        setOpen(!open)
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block bg-register bg-no-repeat'>
                {/* <img classname='w-full h-full object-cover' src={LoginImg} alt=''/> */}
            </div>
            <div className='flex flex-col justify-center'>
                <div className='max-w-[400px] w-full mx-auto bg-gray-100 p-8 px-8 rounded-2xl'>
                    <h2 className='text-black text-35px text-center font-bold'>REGISTER</h2>
                    <div className='flex flex-col text-black py-2 '>
                        <label>Nama</label>
                        <input
                            className='rounded-md p-1 text-black'
                            placeholder='Nama Lengkap'
                            type='text'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col  text-black py-2 '>
                        <label>Email</label>
                        <input
                            className='rounded-md p-1 text-black'
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
                        onClick={onSubmit}
                    >
                        Daftar
                    </button>

                    <div>
                        <p className='text-center text-black p-5'>Sudah punya akun? <Link to="/login" className='text-purple-500'>Masuk di sini</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register