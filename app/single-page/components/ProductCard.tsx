import React from 'react';
import Image from 'next/image'
import { StarIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

const ProductCard:React.FC<ProductCardProps> = ({product}) => {
    const router = useRouter();

    return (
        <div onClick={() => router.push(`/single-page/detail/${product.id}`)} className="border rounded-lg border-[#4d4d4dcc] cursor-pointer active:bg-[#333333]">
            <div className="flex w-auto justify-center">
                <Image src={product.thumbnail} alt={''} width={100} height={100}/>
            </div>
            <div className="flex flex-col gap-2 px-2 py-4">
                <p className='text-white text-sm'>{product.title}</p>
                <div className="flex items-center justify-between">
                    <p className='text-white text-sm font-bold'>${product.price}</p>
                    <div className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4 text-yellow-500" />
                        <div className='text-white text-sm'>{product.rating}</div>
                    </div>
                </div>
                <p className='text-white text-xs truncate'>{product.description}</p>
                <div className="flex gap-1">
                    {
                        product.tags.map((t, index) => (
                            <span key={index} className='bg-[#414141] text-white rounded-full text-xs px-1'>{t}</span>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCard;