import React from 'react'
import Navbar from './Navbar'
import Socialsinput from './Socialsinput'

const Usersettings = () => {
    return (
        <div className=" pb-32 bg-purple-50">
            <Navbar/>
            <div className="flex justify-center m-auto mt-16">
                <form action="">
                    <div className="flex flex-col mt-8">
                        <label htmlFor="" className="text-lg">Name</label>
                        <input type="text" className=" mt-4 py-4 rounded-md"/>
                    </div>
                    <div className="flex flex-col mt-8">
                        <label htmlFor="" className="text-lg">Username</label>
                        <input type="text" className=" mt-4 py-4 rounded-md"/>
                    </div>
                    {/* <div className="flex flex-col w-96 mt-8">
                        <label htmlFor="" className="text-lg">Description</label>
                        <textarea name="" id="" className=" mt-4 py-4 rounded-md"></textarea>
                    </div> */}
                    <Socialsinput/>
                    <h4 className="mt-8 text-xl">Links</h4>
                    <div className="flex flex-col">
                        <div className="mt-4 flex flex-col border-2 border-gray-600 rounded-lg p-4 ">
                            <input type="text" placeholder="Text" className=" px-8 mt-4 py-4 rounded-md"/>
                            <input type="text" placeholder="Paste Link" className=" px-8 mt-4 relative ml-12 py-4 rounded-md"/>
                        </div>
                        <div className="mt-4 flex flex-col border-2 border-gray-600 rounded-lg p-4 ">
                            <input type="text" placeholder="Text" className=" px-8 mt-4 py-4 rounded-md"/>
                            <input type="text" placeholder="Paste Link" className=" px-8 mt-4 relative ml-12 py-4 rounded-md"/>
                        </div>   
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Usersettings
