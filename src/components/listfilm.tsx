import { Link } from 'react-router-dom';
const Listfilm = () => {
    return (
        <>
            <div className='w-full'>
                <div className='flex items-center justify-between my-8'>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-lg ml-4'>Danh sách sản phẩm</h1>
                        <button className="text-white bg-red-600 hover:bg-red-800 ml-4 h-12 flex justify-center items-center font-bold  py-1 px-5  rounded" type="submit">
                                    Thêm

                        </button>
                    </div>
                    <div className='w-96'>
                        <form className="max-w-md mx-auto">   
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
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
                </div>
            <div className="w-full relative overflow-hidden shadow-md rounded-lg">
                    <table className="table-fixed w-full text-left">
                        <thead className="uppercase" style={{ backgroundColor: '#555e70', color: '#e5e7eb' }}>
                            <tr>
                                <td className="py-1 border text-center p-4" contentEditable={true}>ID</td>
                                <td className="py-1 border text-center p-4" contentEditable={true}>Title</td>
                                <td className="py-1 border text-center p-4" contentEditable={true}>Năm phát hành</td>
                                <td className="py-1 border text-center p-4" contentEditable={true}>Thể loại</td>
                                <td className="py-1 border text-center p-4" contentEditable={true}>Quốc gia</td>
                                <td className="py-1 border text-center p-4" contentEditable={true}>Mô tả</td>
                                <td className="py-1 border text-center p-4" contentEditable={true}>Sửa</td>
                                <td className="py-1 border text-center p-4" contentEditable={true}>Xoá</td>
                            </tr>
                        </thead>
                        <tbody style={{ backgroundColor: '#ffffff', color: '#6b7280' }}>
                            <tr className="py-10">
                                <td className="py-10 border text-center p-4" contentEditable={true}>1</td>
                                <td className="py-10 border text-center p-4" contentEditable={true}>Conan</td>
                                <td className="py-10 border text-center p-4" contentEditable={true}>
                                    <div style={{ textAlign: 'left' }}>1994</div>
                                </td>
                                <td className="py-10 border text-center p-4" contentEditable={true}>Anime</td>
                                <td className="py-10 border text-center p-4" contentEditable={true}>Nhật Bản</td>
                                <td className="py-10 border text-center p-4" contentEditable={true}>áddádasđ</td>
                                <td className="py-10 border text-center p-4">
                                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Sửa</button>
                                </td>
                                <td className="py-10 border text-center p-4">
                                    <button className="bg-red-500 text-white py-1 px-3 rounded">Xoá</button>
                                </td>
                            </tr>
                            <tr className="py-10">
                                <td className="py-10 border text-center p-4" contentEditable={true}>2024</td>
                                <td className="py-10 border text-center p-4" contentEditable={true}>Anime</td>
                                <td className="py-10 border text-center p-4" contentEditable={true}>Nhật Bản</td>
                                <td className="py-10 border text-center p-4" contentEditable={true}>âsdasasd</td>
                                <td className="py-10 border text-center p-4" contentEditable={true}>âsdasasd</td>
                                <td className="py-10 border text-center p-4" contentEditable={true}></td>
                                <td className="py-10 border text-center p-4">
                                    <button className="bg-blue-500 text-white py-1 px-3 rounded">Sửa</button>
                                </td>
                                <td className="py-10 border text-center p-4">
                                    <button className="bg-red-500 text-white py-1 px-3 rounded">Xoá</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}



export default Listfilm