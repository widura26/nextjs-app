"use client"
import React, { useState } from 'react';
import { useRouter } from "next/navigation"

const Page = (props:any) => {

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [password, setPassword] = useState("")
    const router = useRouter()
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.toLowerCase() === "zetira salsa herawati" && date === "2003-06-23") {
            sendClick("Iya")
            router.push("/zetira/");
        } else {
            alert("Salah! yang bener dong jet");
            // setLoading(false);
        }
    };

    const sendClick = async (action: string) => {
        setLoading(true)
        try {
            const res = await fetch("/api/sendClick", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action }),
            });

            if (res.ok) {
                return
            } else {
                alert(res);
            }
        } catch (err) {
            console.error(err);
            alert("Terjadi error saat mengirim data.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex h-screen bg-white'>
            <div className="w-[350px] m-auto">
                {/* <h1 className='text-[50px] animate-bounce font-bold bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent'>Login dulu ya..</h1> */}
                <h1 className='text-[40px] text-center mb-4 font-bold bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent'>Login</h1>
                <form onSubmit={handleSubmit} action="" method="post" className='flex flex-col gap-2'>
                    <div>
                        <input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama lengkap kamu siapa?" type="text" name="name" autoComplete="name" className="block w-full font-bold rounded-md bg-white border-blue-600 border-[2px] px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-indigo-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                    <div>
                        <input id="date" value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date" className="block w-full font-bold rounded-md bg-white border-blue-600 border-[2px] px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                    <button type='submit' className='bg-blue-600 text-white rounded-md p-2'>
                        {loading ? (
                            <svg className="mr-2 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                            </svg>
                        ) : null}
                        {loading ? "" : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;