import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../Redux/Actions/action'

const UserList = ({users}) => {
    const dispatch=useDispatch()
  return (
    <div className='w-full h-[500px] overflow-auto '>       
        <div className="relative overflow-x-auto mt-5">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-1 md:px-6 py-3">
                            S.No
                        </th>
                        <th scope="col" className="px-1 md:px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-1 md:px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-1 md:px-2 py-3">
                            
                        </th>
                    </tr>
                </thead>
                {users?.map((item,index)=>(<tbody key={index}>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-1 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {index+1}
                        </th>
                        <td className="px-1 md:px-6 py-4">
                            {item.name}
                        </td>
                        <td className="px-1 md:px-6 py-4">
                            {item.address}
                        </td>
                        <td className="px-2 py-4">
                            <button onClick={()=>dispatch(deleteUser(item.id))} className='text-white bg-red-700 p-1 rounded-lg hover:scale-105'>Delete</button>
                        </td>
                    </tr>
                </tbody>))}
            </table>
        </div>
    </div>
  )
}

export default UserList