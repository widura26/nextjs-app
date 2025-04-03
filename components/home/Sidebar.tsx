"use client"
import React, { useState, useRef, useEffect, useCallback } from 'react';
import ListButton from '../ListButton';

const Sidebar = () => {

    const ListMenus: ListButtonProps[] = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'About', link: '/about' },
    ]

    return (
        <div className="w-[300px] p-2 overflow-y-auto">
            <div className="text-white flex flex-col gap-2 text-sm">
                <ul className='flex flex-col'>
                    {
                        ListMenus.map((item, index) => (
                            <ListButton {...item} key={index}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;