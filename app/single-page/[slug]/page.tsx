"use client"
import { useParams } from 'next/navigation'
export default function DynamicPage() {
    const params = useParams();

    return (
        <div className='text-white'>
            <h1>Halaman Dinamis</h1>
            <p>Slug: {params.slug}</p>
        </div>
    )
}
