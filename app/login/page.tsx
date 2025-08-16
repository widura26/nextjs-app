"use client"
import React, { useRef, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link'

const Page = (props:any) => {
    const passwordRef = useRef<HTMLInputElement>(null);
    const [change, setChange] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div className="w-[400px] flex flex-col gap-4 h-auto m-auto p-4">
            <div className="">
                <h1 className='text-white font-bold text-[20px] text-center'>LOGIN</h1>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-white">Email</label>
                <div className="mt-2">
                    <input id="email" placeholder="Email" type="email" name="email" autoComplete="email" className="block w-full rounded-md bg-[#252525] px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-white">Password</label>
                <div className="relative w-full mt-2">
                    <input
                        ref={passwordRef} 
                        id="password"
                        type={ change === false ? 'password' : 'text' } 
                        placeholder="Password"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="block w-full rounded-md bg-[#252525] px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    {
                        value && (
                            <button title='display-password' type="button" onClick={() => setChange(!change)} className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700">
                                {
                                    change == false ? (<EyeSlashIcon className="w-5 h-5" />) : (<EyeIcon className="w-5 h-5" />)
                                }
                            </button>
                        )
                    }
                </div>
            </div>
            <div>
                <button className="text-white bg-[#646464] rounded-lg p-2 w-full active:bg-[#4b4b4b] hover:bg-[#4b4b4b]">Sign in</button>
            </div>
            <div className="flex justify-center">
                <p className='text-white text-[12px]'>don&apos;t have account? <Link href="/signup" className='text-[#187cff]'>sign up</Link></p>
            </div>
            <div className="flex justify-center">
                <p className='text-white'>Or</p>
            </div>
            <div className="">
                <button title='google-auth' className='bg-white py-2 px-4 rounded-full flex items-center gap-2 w-full active:bg-[#c5c5c5] hover:bg-[#e2e2e2]'><FcGoogle className="w-5 h-5" /> Lanjutkan dengan Google</button>
            </div>
        </div>
    );
};

export default Page;