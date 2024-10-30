import { MdDashboard } from "react-icons/md";
import { FaPager } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { GrUserManager } from "react-icons/gr";
import { FaList } from "react-icons/fa";
import React, {useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Listfilm from '../components/listfilm'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Link } from "react-router-dom";

const Dashboard : React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const [chartData, setChartData] = useState({
      labels: ['Thể Loại', 'Quản Lí Phim', 'Tổng Phim'],
      datasets: [{
        label: 'My Dataset',
        data: [7,30,37],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75,192,192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      }],
    });
  
    useEffect(() => {
      const ctx = chartRef.current?.getContext('2d');
  
      if (ctx && chartData) {
        const chart = new Chart(ctx, {
          type: 'bar', 
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        });
  
        
        return () => chart.destroy();
      }
    }, [chartData]);
    return (
        <>

                <div className="w-full"> 
                            <h2 className="h-20 flex items-center text-colorblack">Thống kê phim</h2>

                            <div className="text-colorblack w-full h-60 bg-neutral-900    flex items-center justify-evenly">
                                <div className="w-1/4 bg-customBGblack px-16 py-10 rounded-lg">
                                    <p className="text-xl mb-3">Thể Loại</p>
                                    <span className="text-6xl" >19</span>
                                </div>
                                <div className="w-1/4 bg-customBGblack px-16 py-10 rounded-lg">
                                    <p className="text-xl mb-3">Quản Lí Phim</p>
                                    <span className="text-6xl">19</span>
                                </div>

                                <div className="w-1/4 bg-customBGblack px-16 py-10 rounded-lg">
                                    <p className="text-xl mb-3">Tổng phim</p>
                                    <span className="text-6xl">50</span>
                                </div>
                            </div>
                    
                                <div className="w-full h-80 flex-1 box-border  mt-20">
                                    <canvas className="" id="myChart" ref={chartRef} />
                                </div>
                </div>

                {/* <Listfilm/> */}

                {/* <div className="w-full bg-slate-500"> 
                    <div className="h-20  border-zinc-700">

                        <div className="text-white text-xl ml-10 h-16  flex items-center  ">
                            Thêm tập phim
                        </div>
                        <div>
                            <form action="">
                                <div className="flex items-center ">
                                    <p>Danh mục phim</p>
                                    <input type="text" />
                                </div>

                                <div className="flex items-center ">
                                    <p>Tên phim</p>
                                    <input type="text" />
                                </div>
                                <div className="flex items-center ">
                                    <p>Link phim</p>
                                    <input type="text" />
                                </div>

                                <button className="text-white bg-red-600 hover:bg-red-800 ml-4 h-12 flex justify-center items-center font-bold  py-1 px-5  rounded" type="submit">
                                    Thêm

                                </button>
                            </form>

                    
                        </div>

                        <div>
                            <div>
                                <h1>Danh sách sản phẩm</h1>
                                <form className="max-w-md mx-auto">   
                                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tìm kiếm tên phim" required />
                                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                </div>
                                </form>
                            </div>
                            <div className="container mx-auto">
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr>
                                            <th className="py-2">ID</th>
                                            <th className="py-2">Tên Film</th>
                                            <th className="py-2">Tập Film</th>
                                            <th className="py-2">Link Film</th>
                                            <th className="">Hành Động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    
                                        <tr >
                                        <td className="border px-4 py-2"></td>
                                        <td className="border px-4 py-2"></td>
                                        <td className="border px-4 py-2"></td>
                                        <td className="border px-4 py-2">
                                            <a href="/"></a>
                                        </td>
                                        <td className="border">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Sửa</button>
                                            <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-2 rounded ml-2">Xoá</button>
                                        </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>




                            
                        </div>
                    </div>
                </div> */}



        </>
    )
 
}

export default Dashboard


