import React, { useState } from 'react'
import first from '../assets/first.svg'
import second from '../assets/second.svg'
import third from '../assets/third.svg'

const LeaderBoard = (props) => {
    const [slippage, setSlippage] = useState('0%');
    const strategies = [
        { id: 1, name: 'Rank 1', calmarRatio: 3.96, overallProfit: 381845, avgDailyProfit: 319.54, winPercentage: '65%', price: '—', action: 'View' },
        { id: 2, name: 'Rank 2', calmarRatio: 3.62, overallProfit: 268872.5, avgDailyProfit: 216.31, winPercentage: '64%', price: 500, action: 'Buy' },
        { id: 3, name: 'Rank 3', calmarRatio: 3.42, overallProfit: 255425, avgDailyProfit: 208.51, winPercentage: '64%', price: '—', action: 'View' },
        { id: 4, name: 'strategy_name', calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercentage: '65%', price: '—', action: 'View' },
        { id: 5, name: 'strategy_name', calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercentage: '65%', price: '—', action: 'View' },
        { id: 6, name: 'Based on premium wit', calmarRatio: 3.01, overallProfit: 135980, avgDailyProfit: 185.77, winPercentage: '49%', price: '—', action: 'View' },
        { id: 6, name: 'Based on premium wit', calmarRatio: 3.01, overallProfit: 135980, avgDailyProfit: 185.77, winPercentage: '49%', price: '—', action: 'View' },
        { id: 6, name: 'Based on premium wit', calmarRatio: 3.01, overallProfit: 135980, avgDailyProfit: 185.77, winPercentage: '49%', price: '—', action: 'View' },
        { id: 6, name: 'Based on premium wit', calmarRatio: 3.01, overallProfit: 135980, avgDailyProfit: 185.77, winPercentage: '49%', price: '—', action: 'View' },
        { id: 6, name: 'Based on premium wit', calmarRatio: 3.01, overallProfit: 135980, avgDailyProfit: 185.77, winPercentage: '49%', price: '—', action: 'View' },
        { id: 6, name: 'Based on premium wit', calmarRatio: 3.01, overallProfit: 135980, avgDailyProfit: 185.77, winPercentage: '49%', price: '—', action: 'View' },
        { id: 6, name: 'Based on premium wit', calmarRatio: 3.01, overallProfit: 135980, avgDailyProfit: 185.77, winPercentage: '49%', price: '—', action: 'View' },
        { id: 7, name: 'strategy_name', calmarRatio: 2.76, overallProfit: 267867.5, avgDailyProfit: 218.49, winPercentage: '60%', price: '—', action: 'View' }
    ];
    return (
        <>
            {props.view === 'View2' ? (
                <div className='bg-gray-800 bg-c-blue h-[719.5px] flex justify-center items-center'>
                    <div className='container mt-2 border-4 border-c-grey h-[600px] w-[1500px] bg-c-black rounded-xl overflow-x-auto'>
                        <div className='flex items-center justify-between mx-4 p-2 text-lg font-semibold border-b-2 border-c-grey'>
                            <p className='text-xl font-bold'>BASIC BACKTEST</p>
                            <div className="flex items-center">
                                <label htmlFor="slippage" className="mr-5 text-lg font-semibold">SLIPPAGE</label>
                                <select id="slippage" className="border border-gray-300 rounded px-2 py-1 text-black w-24"
                                    value={slippage} onChange={(e) => setSlippage(e.target.value)}>
                                    <option value="0%">0%</option>
                                    <option value="1%">1%</option>
                                    <option value="2%">2%</option>
                                </select>
                            </div>
                        </div>

                        <table className='w-full text-center border-collapse p-4'>
                            <thead>
                                <tr className='text-2xl font-semibold '>
                                    <th className='p-2'>Rank</th>
                                    <th >Name</th>
                                    <th>Calmar Ratio</th>
                                    <th>Overall Profit</th>
                                    <th>Avg. Daily Profit</th>
                                    <th>Win %(Day)</th>
                                    <th>Price (Rs)</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {strategies.map((strategy, index) => (
                                    <tr key={strategy.id} className="border-t border-c-grey text-xl">
                                        <td className="p-4">{strategy.id}</td>
                                        <td>{strategy.name}</td>
                                        <td>{strategy.calmarRatio.toFixed(2)}</td>
                                        <td>{strategy.overallProfit.toLocaleString()}</td>
                                        <td>{strategy.avgDailyProfit.toFixed(2)}</td>
                                        <td>{strategy.winPercentage}</td>
                                        <td>{strategy.price}</td>
                                        <td>
                                            <button className={`px-4 py-1 rounded ${strategy.action === 'Buy' ? 'bg-c-white text-c-black font-semibold' : 'bg-c-grey text-c-white font-semibold'}`}>
                                                {strategy.action}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <>
                    <div className='flex justify-between h-[719.5px] w-screen'>
                        <div className='border-4 border-c-black border-r-c-grey w-1/2 h-full'  >
                            <div className='container border-2 border-gray-700 p-10 w-full h-full mr-10'>
                                <div className='border-2 border-c-white bg-gray-800 p-10 w-3/4 mb-10'>
                                    <table className='w-full text-center border-collapse p-4'>
                                        <tbody>
                                            {strategies
                                                .filter((strategy) => strategy.id === 1)
                                                .map((strategy) => (
                                                    <tr key={strategy.id} className='text-c-dark_gold text-3xl font-semibold '>
                                                        <td className='p-4'><img src={first} alt="first" /></td>
                                                        <td>{strategy.name}</td>
                                                        <td>{strategy.calmarRatio.toFixed(2)}</td>
                                                        <td>{strategy.winPercentage}</td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className='border-2 border-c-white bg-gray-800 p-10 mb-10 w-3/4 ml-20'>
                                    <table className='w-full text-center border-collapse p-4'>
                                        <tbody>
                                            {strategies
                                                .filter((strategy) => strategy.id === 2)
                                                .map((strategy) => (
                                                    <tr key={strategy.id} className='text-c-silver text-3xl font-semibold  '>
                                                        <td className='p-4'><img src={second} alt="second" /></td>
                                                        <td>{strategy.name}</td>
                                                        <td>{strategy.calmarRatio.toFixed(2)}</td>
                                                        <td>{strategy.winPercentage}</td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className='border-2 border-c-white bg-gray-800 p-10 mb-10 w-3/4 ml-[190px] '>
                                    <table className='w-full text-center border-collapse p-4'>
                                        <tbody>
                                            {strategies
                                                .filter((strategy) => strategy.id === 3)
                                                .map((strategy) => (
                                                    <tr key={strategy.id} className='text-c-bronze text-3xl font-semibold '>
                                                        <td className='p-4'><img src={third} alt="third" /></td>
                                                        <td>{strategy.name}</td>
                                                        <td>{strategy.calmarRatio.toFixed(2)}</td>
                                                        <td>{strategy.winPercentage}</td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='h-full w-1/2 bg-gray-800 flex justify-center items-center '>
                            <div className='container bg-c-black w-[870px] h-[664px]  overflow-x-auto '>
                                <table className='w-full text-center border-collapse p-4 border-4 border-c-grey'>
                                    <thead>
                                        <tr className='text-2xl font-semibold'>
                                            <th className='p-2'>Rank</th>
                                            <th >Name</th>
                                            <th>Calmar Ratio</th>
                                            <th>Win %(Day)</th>
                                            <th>Price (Rs)</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {strategies.map((strategy, index) => (
                                            <tr key={strategy.id} className='border-t border-c-grey text-xl'>
                                                <td className='p-4'>{strategy.id}</td>
                                                <td>{strategy.name}</td>
                                                <td>{strategy.calmarRatio.toFixed(2)}</td>
                                                <td>{strategy.winPercentage}</td>
                                                <td>{strategy.price}</td>
                                                <td>
                                                    <button className={`px-4 py-1 rounded ${strategy.action === 'Buy' ? 'bg-c-white text-c-black font-semibold' : 'bg-c-grey text-c-white font-semibold'}`}>
                                                        {strategy.action}
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default LeaderBoard;

