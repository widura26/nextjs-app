"use client"
import React, { useEffect } from 'react';
import ListButton from './ListButton';
import { useSidebar } from "../context/SidebarContext"

const Sidebar = () => {
    const { active, setActive } = useSidebar();

    const ListStaticMenus = [
        { id: 1, name: 'Dashboard', link: '/single-page' },
        { id: 2, name: 'About', link: '/single-page/about' },
    ]
    
    const ListDynamicMenus = [  
        { id: 1, name: 'Widura', link: '/single-page/widura' },
        { id: 2, name: 'Hasta', link: '/single-page/hasta' },
    ]

    return (
        <div className="w-[300px] p-2 overflow-y-auto">
            <div className="text-white flex flex-col gap-2 text-sm">
                <ul className='flex flex-col'>
                    {
                        ListStaticMenus.map((item) => (
                            <ListButton {...item} key={item.id} active={active} setActive={setActive}/>
                        ))
                    }
                </ul>
                <ul className='flex flex-col'>
                    {
                        ListDynamicMenus.map((item) => (
                            <ListButton {...item} key={item.id} active={active} setActive={setActive}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;