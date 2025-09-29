"use client"
import React, { useState } from 'react';

const Page = (props:any) => {

    const [loading, setLoading] = useState(false);

    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center gap-4">
                <div className="w-[200px] h-[200px] rounded-full bg-black">
                
                </div>
            </main>
        </>
    );
};

export default Page;