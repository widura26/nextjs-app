"use client"
import React, { useState, useEffect } from 'react';
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";


const Page = (props:any) => {
    const [formData, setFormData] = useState({
        posisi: "",
        namaLengkapKamu: "",
        namaLengkapPasangan: "",
        akunInstagramKamu: "",
        akunInstagramPasangan: "",
        berapaLamaPacaran: "",
        kesibukan: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "submissions"), {
                ...formData,
                createdAt: serverTimestamp(),
            });
            setFormData({
                posisi: "",
                namaLengkapKamu: "",
                namaLengkapPasangan: "",
                akunInstagramKamu: "",
                akunInstagramPasangan: "",
                berapaLamaPacaran: "",
                kesibukan: "",
            });
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <main className="flex min-h-screen justify-center gap-4">
                <div className="bg-white w-[500px] border p-4">
                    <h1 className='text-center font-bold text-[20px]'>Ketahui seberapa cocok kalian wkwk</h1>
                    <p className='text-sm text-center mt-2'>Bantuin buat menang challenge bikin web guys. Please bantu isi ya🤣</p>
                    <form onSubmit={handleSubmit} className='mt-10 flex flex-col gap-4'>
                        <div>
                            <label htmlFor="posisi" className="block text-sm/6 font-medium text-black">Posisi</label>
                            <div className="mt-2">
                                <input value={formData.posisi} onChange={handleChange} required id="posisi" placeholder="Surabaya" type="text" name="posisi" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="namaLengkapKamu" className="block text-sm/6 font-medium text-black">Nama lengkap kamu</label>
                            <div className="mt-2">
                                <input value={formData.namaLengkapKamu} onChange={handleChange} required id="namaLengkapKamu" placeholder="nama" type="text" name="namaLengkapKamu" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="namaLengkapPasangan" className="block text-sm/6 font-medium text-black">Nama lengkap pasangan kamu</label>
                            <div className="mt-2">
                                <input value={formData.namaLengkapPasangan} onChange={handleChange} required id="namaLengkapPasangan" placeholder="Nama pasangan" type="text" name="namaLengkapPasangan" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="akunInstagramKamu" className="block text-sm/6 font-medium text-black">Akun instagram kamu</label>
                            <div className="mt-2">
                                <input value={formData.akunInstagramKamu} onChange={handleChange} required id="akunInstagramKamu" placeholder="@bambang" type="text" name="akunInstagramKamu" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="akunInstagramPasangan" className="block text-sm/6 font-medium text-black">Akun instagram pasangan</label>
                            <div className="mt-2">
                                <input value={formData.akunInstagramPasangan} onChange={handleChange} required id="akunInstagramPasangan" placeholder="@sri" type="text" name="akunInstagramPasangan" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="berapaLamaPacaran" className="block text-sm/6 font-medium text-black">Berapa lama pacaran?</label>
                            <div className="mt-2">
                                <input value={formData.berapaLamaPacaran} onChange={handleChange} required id="berapaLamaPacaran" placeholder="6 bulan / 1 tahun" type="text" name="berapaLamaPacaran" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="kesibukan" className="block text-sm/6 font-medium text-black">Kesibukan sekarang kamu dan pasangan kamu</label>
                            <span className='text-xs text-red-700'>sebutin profesinya*</span>
                            <div className="mt-2">
                                <input value={formData.kesibukan} onChange={handleChange} required id="kesibukan" placeholder="dia kerja aku kerja juga" type="text" name="kesibukan" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                        <div>
                            <button className='bg-black text-white w-[100%] rounded-xl p-2 mt-4'>Submit</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Page;