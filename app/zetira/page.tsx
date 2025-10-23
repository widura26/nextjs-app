"use client"
import React, { useState } from 'react';

const Page = (props:any) => {

    const [loading, setLoading] = useState(false);

    return (
        <>
            {/* <main className="flex min-h-screen flex-col items-center justify-center gap-4"> */}
            <main className="flex min-h-screen justify-center gap-4">
                <div className="p-4 max-w-[1000px]">
                    <h1 className='text-[50px] text-center'>Happy Graduation!</h1>
                    <p className='mt-10 text-justify'>
                        Selamat ya jet udah berhasil namatin kuliahmu, selalu jadiin kebanggaan buat orang tua dan keluargamu.
                        Selamat menempuh kehidupan level 1, semoga apa yang kamu harapkan terkabul.
                    </p>
                    <p className='mt-10 text-justify'>
                        Maaf ya bunganya cuma sedikit. Mungkin kalau aku udah ada kerja, aku bisa beliin bunga lebih banyak lagi (I wish).
                        Aku bingung mau ngasih apa ke kamu, jadi masih bunga aja plus sticker buatanku sendiri, muka idolamu sih soalnya mukaku
                        nggak pantes dijadiin sticker.
                    </p>
                    <p className='mt-10 text-justify'>
                        Bunga ini juga tanda terima kasih ku (walaupun rada kureng ya), dan minta maaf ku. Aku sadar, aku nggak pernah ngasih kamu
                        gift atau sesuatu. Malah kamu yang sering. Jadi aku ngerasa nggak enak. Dan aku minta maaf juga selama 4 tahun ini aku udah nyakitin hati kamu
                    </p>
                    <p className='mt-10 text-justify'>
                        Jujur, aku masih nggak rela kamu dideketin sama cowok lain. Agak egois tapi aku jujur sama perasaanku. Aku agak kaget aja kamu pernah pacaran sama irfan dan endingnya
                        kamu juga sakit hati sama dia. Ditambah lagi kamu cerita kalo dideketin dua cowok yang brengseknya lagi udah ada cewek. Aku heran kenapa yang ngedeketin kamu brengsek semua? termasuk aku.
                    </p>
                    <p className='mt-10 text-justify'>
                        Maaf untuk masa lalu yang menyakitkan. Aku yakin, kamu dapat orang yang bisa bikin kamu bahagia dan beruntung. Aku tau, aku nggak bisa deketin kamu lagi karena aku terlalu sakit buat kamu. 
                        Kamu nggak papa kok ajak cowok barumu di tongkrongan kita. I wanna be his friend.
                    </p>
                    <p className='mt-10 text-justify text-[20px]'>
                        Tolong selalu bahagia ya jet!
                    </p>
                </div>
            </main>
        </>
    );
};

export default Page;