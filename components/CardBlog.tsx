import React from 'react';
import Image from 'next/image'
import hero from '../public/customers/amy-burns.png'

const CardBlog = () => {
    return (
        <div className="rounded-[10px] border border-[#313131] p-4">
            {/* <Image 
                src={hero} 
                alt="Picture of the author" 
                width={}
                height={100} 
                style={{ objectFit: 'cover' }}
            /> */}
            <div className="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, natus.</p>
            </div>
        </div>
    );
};

export default CardBlog;