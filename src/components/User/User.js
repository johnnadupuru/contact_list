import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import UserList from './UserList';
import { addUser } from '../Redux/Actions/action';

const User = () => {
    const {users}=useSelector((state)=>state.user)
    const dispatch=useDispatch()
    const { register, handleSubmit,formState: { errors },reset} = useForm();
    

    const onSubmit=(data,e)=>{
        e.preventDefault()
        dispatch(addUser(data))
        reset()
    }

  return (
    <div className='p-5 flex justify-center'>
        <div className='w-[60%] shadow-2xl p-5'>
            <h1 className='text-center text-2xl text-blue-600 font-bold'>Users List</h1>
            <div className='w-full p-2'>
                <form onSubmit={handleSubmit((data,e)=>onSubmit(data,e))}>
                    <div className='mt-2'>
                        <label htmlFor="name" className='font-semibold'>Name</label>
                        <br/>
                        <input
                            type="text"
                            id="name"
                            className='border-[1px] w-full h-[30px] pl-2'
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <p className='text-red-700'>* {errors.name.message}</p>}
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="address" className='font-semibold'>Address</label>
                        <br/>
                        <input
                            type="text"
                            id="address"
                            className='border-[1px] w-full h-[30px] pl-2'
                            {...register('address', { required: 'Number is required' })}
                        />
                        {errors.address && <p className='text-red-700'>* {errors.address.message}</p>}
                    </div>
                    <div className='flex justify-center mt-2'>
                    <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="submit"
                                
                            >
                                Add User
                            </button>
                    </div>
                </form>
            </div>
            <hr className='h-1 bg-black'/>
            <div className=''>
                <h2 className='font-semibold text-blue-600'>Existing users list</h2>
                {users.length===0?<p className='text-red-600 text-center'>No Existing Users</p>:<UserList users={users}/>}
            </div>
        </div>
    </div>
  )
}

export default User