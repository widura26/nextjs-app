"use client"
import React from 'react';
import Link from 'next/link'
function ListButton({ name, link, active, setActive }: ListButtonProps) {
    return (
        <li>
            <Link href={link}>
                <button
                    onClick={() => setActive(name)}
                    className={`w-full text-left px-4 py-2 rounded ${
                    active === name ? "bg-[#2b2b2b] text-white" : ""
                    }`}
                >
                    {name}
                </button>
            </Link>
        </li>
    )
}

export default ListButton;