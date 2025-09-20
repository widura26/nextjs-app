"use client"
import React, { useState, useEffect } from 'react'
import Loading from './components/Loading';
import ProductCard from './components/ProductCard';

const SinglePage = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {         
                const res = await fetch("https://dummyjson.com/products")
                const data = await res.json()
                setProducts(data.products)
                console.log(data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [])

    return (
        <>
            {
                loading ? <Loading/>
                : (
                    <div className="grid grid-cols-4 gap-3">
                        {
                            products.map((product:Product, index) => (
                                <ProductCard key={index} product={product}/>
                            ))
                        }
                    </div>
                )
            }
        </>
    );
};

export default SinglePage;