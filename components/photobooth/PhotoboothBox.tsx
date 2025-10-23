/* eslint-disable @next/next/no-img-element */
"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const PhotoboothBox = (props:any) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const photoRef = useRef<HTMLImageElement>(null);
    const [url, setUrl] = useState("");
    const [result, setResult] = useState("");


    const enableCam = () => {
        const video = videoRef.current;
        if(video){
            if(!navigator.mediaDevices.getUserMedia){
                console.log("getUserMedia not supported on your browser!")
            } else {
                navigator.mediaDevices.getUserMedia(
                    { video: { width: 1280, height: 720 } }
                ).then(stream => {
                    video.srcObject = stream;
                    streamRef.current = stream;

                    video.onloadedmetadata = () => {
                        videoRef.current?.play();
                    };
                }).catch(error => {
                    console.error("Something went wrong!", error);
                });
            }
        }
    }

    function takePicture() {
        const canvas = canvasRef.current;
        if(canvas && videoRef.current){
            const context = canvas.getContext("2d");

            canvas.width = 1280;
            canvas.height = 720;

            context?.drawImage(videoRef.current, 0, 0, 1280, 720);
            const data = canvas.toDataURL("image/png");
            photoRef.current?.setAttribute("src", data);
        }
    }

    useEffect(() => {
        if(props.enable){
            enableCam()
        } else {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach((track) => track.stop());
                streamRef.current = null;
            }
        }

        return () => {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }
        }
    }, [props.enable])


    return (
        <>
            <div className="py-4 sm:py-10 flex flex-col gap-4">
                <div className="max-w-[763px]">
                    <div className="bg-white rounded-xl p-4 shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
                        <video autoPlay playsInline ref={videoRef} width={1280} height={720}></video>
                        <div className="text-white mt-4 flex items-center text-xs gap-2">
                            <div className="flex items-center gap-2">
                                <label className="inline-flex items-center cursor-pointer">
                                    <input onChange={() => props.setEnable(!props.enable)} type="checkbox" value="" className="sr-only peer"/>
                                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                                </label>
                                <p className='text-black'>Enable kamera</p>
                            </div>
                            {/* <button onClick={() => props.setEnable(!props.enable)} className='bg-[#187cff] py-2 px-4 rounded-lg'>Enable Camera</button> */}
                            <button onClick={takePicture} className='bg-[#187cff] py-2 px-4 rounded-lg'>Capture</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:py-10">
                <div className="max-w-[763px]">
                    <div className="bg-white rounded-xl p-4 shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
                        {/* <div className="flex items-center gap-2">
                            <button className='bg-white border w-full rounded-lg py-1'>1</button>
                            <button className='bg-white border w-full rounded-lg py-1'>2</button>
                            <button className='bg-white border w-full rounded-lg py-1'>3</button>
                        </div> */}
                        <div className="">
                            <canvas ref={canvasRef} className='bg-black w-full'></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PhotoboothBox;