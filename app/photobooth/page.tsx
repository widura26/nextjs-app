"use client"
import PhotoboothBox from '@/components/photobooth/PhotoboothBox';
import React, { useState } from 'react';

const PhotoBoothPage = () => {
    const [enable, setEnable] = useState(false)

    return (
        <div className="w-full h-full bg-white flex items-center">
            <div className="m-auto">
                <PhotoboothBox enable={enable} setEnable={setEnable}/>
            </div>
        </div>
    );
};

export default PhotoBoothPage;