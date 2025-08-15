import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid'

const page = (props:any) => {
    return (
        <main className='flex flex-col h-screen bg-[#252525]'>
            <div className="w-[400px] m-auto">
                <form>
                    <div className="">
                        <input type="text" className="rounded focus:outline-none focus:ring-0 border-none" />
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm/6 font-semibold text-white">Cancel</button>
                        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default page;