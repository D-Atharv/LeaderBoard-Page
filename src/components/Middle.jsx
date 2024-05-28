import React, { useState } from 'react'
import LeaderBoard from './LeaderBoard';

const Middle = () => {
    const [view, setView] = useState('View1');

    const handleView = () => {
        setView(prevView => prevView === 'View1' ? 'View2' : 'View1');
    };
    return (
        <>
            <div className="p-10 bg-c-black text-c-blue flex items-center justify-between border-4 border-c-black border-b-c-grey">
                <p className='text-5xl font-semibold'>LeaderBoard</p>
                <button onClick={handleView} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        {view}
                    </span>
                </button>
            </div>
            <LeaderBoard view={view} />
        </>

    )
}

export default Middle;
