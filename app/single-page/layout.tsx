"use client"
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { useState } from "react";
import { SidebarProvider } from './context/SidebarContext';

const SpaLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='flex flex-col h-screen'>
            <Navbar/>
            <SidebarProvider>
                <div className="bg-[#252525] h-screen flex overflow-hidden">
                    <Sidebar/>
                    <div className="flex-1 p-4 overflow-y-auto">{children}</div>
                </div>
            </SidebarProvider>
        </main>
    );
};

export default SpaLayout;