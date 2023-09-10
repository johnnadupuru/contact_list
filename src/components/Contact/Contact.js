import React, { useState } from 'react'
import ContactList from './ContactList'
import { addContacts, editContacts} from '../Redux/Actions/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'


const Contact = () => {
    const contactList=useSelector((state)=>state.contact.contacts)
    const [showModal, setShowModal] = React.useState(false);
    const [name,setName]=useState("")
    const [number,setNumber]=useState("")
    const [contactId,setContactId]=useState("")
    const dispatch=useDispatch()
    const editContactId=(item)=>{
        setContactId(item.id);
        setName(item.name)
        setNumber(item.number)
        setShowModal(true)
    }

  return (
    <div className='px-1 lg:px-10 py-5 flex justify-center '>
        <div className='w-full lg:w-[60%] shadow-2xl p-0 lg:p-5'>
            <h1 className='font-bold text-blue-600 text-2xl text-center'>Contacts List</h1>
            <div className='flex justify-between w-full'>
                <p className='text-xl'>All Contacts</p>
                <button onClick={() => setShowModal(true)} className='text-white font-semibold bg-blue-600 rounded-lg p-1 hover:scale-105'>+ Add Contacts</button>
            </div>
            {showModal ? (
                <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-full my-6 mx-auto max-w-xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Add Contact
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => {setShowModal(false); setContactId(""); setName(""); setNumber("")}}
                        >
                            <span className="bg-transparent text-black h-6 w-6 text-xl block outline-none focus:outline-none">
                            x
                            </span>
                        </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <input onChange={(e)=>setName(e.target.value)} type='text' value={name} placeholder='Enter Name' className='border-[1px] w-full h-[30px] pl-2' />
                            <br/>
                            <input onChange={(e)=>setNumber(e.target.value)}  type='number' value={number} placeholder='Enter Phone Number' className='mt-5 border-[1px] w-full h-[30px] pl-2' />
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                            {contactId?(<button
                                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {dispatch(editContacts({id:contactId,name,number})); setShowModal(false); setName(""); setNumber(""); setContactId("")}}
                            >
                                Edit
                            </button>):
                                (<button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="submit"
                                onClick={() => {dispatch(addContacts({name,number})); setShowModal(false); setName(""); setNumber("")}}
                            >
                                Add
                            </button>)}
                        </div>
                    </div>
                    </div>
                </div>
                </>
            ) : null}
            <div className='w-full h-[500px] overflow-auto '>
                {contactList.length===0?<p className='text-xl font-semibold text-red-700 text-center'>No Contacts in the list</p>:<ContactList contactList={contactList} editContactId={editContactId}/>}
            </div>
        </div>
    </div>
  )
}

export default Contact