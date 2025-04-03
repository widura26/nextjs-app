import React from 'react';
import Link from 'next/link'
const ListButton: React.FC<ListButtonProps> = (props) => {
    return (
        <Link href={props.link} className='cursor-pointer hover:bg-[#323232] p-2 rounded-[6px]'>{props.name}</Link>
    );
};

export default ListButton;