import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === 'kiendzsh1@gmail.com' && password === '123456') {
            navigate('/dashboard');
        } else {
            alert('Login failed');
        }
    };


    return (
        //className="flex items-center justify-center bg-slate-600 m-auto  w-96 h-96"
        <div  className="min-h-screen w-screen  bg-slate-600 flex items-center justify-center">

            <div className=" bg-white  rounded-20px max-w-md shadow-black w-full">
                <form onSubmit={handleSubmit}>
                    <div className="rounded-t-2xl bg-customBG text-center py-8 ">
                        <h1 className="text-3xl text-white">Sign in to your account</h1>
                    </div>

                    <div className="p-14 ">
                        <div className="text-lg text-black mb-10">
                            <div className="   mb-4 ">
                                <span  >Your email</span>
                                <input 
                                    id="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    className="mt-2 px-3.5 rounded-2xl bg-bgInput w-full h-14 focus:border-sky-700 focus:outline-none border-2" 
                                    type="email" 
                                    placeholder="Username" 
                                />
                            </div>

                            <div>
                                <span>Password</span>

                                <input
                                    id="password"
                                    className="mt-2 px-3.5 rounded-2xl h-14 bg-bgInput w-full focus:border-sky-700 focus:outline-none border-2" 
                                    type="password" 
                                    placeholder="Password" 
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </div>
                        </div>

                        <div className="text-center ">
                          <button className="h-14 text-base w-full  rounded-20px bg-customBG text-white hover:bg-white hover:text-black border-2 border-black transition duration-300 ease-in delay-75" type="submit">SIGN IN</button>
                        </div>

                        <div className="w-full mt-6 text-lg text-blue-500 font-normal hover:text-blue-950 ">
                            <a className="p-2 pl-0" href="/">Quên mật khẩu</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login



