import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import './Navbar.css'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    const [user, setUser] = useState(false)

    window.onscroll = () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 0) {
            setScroll(true)
            console.log(currentScroll);
        }
        else {
            console.log(currentScroll);
            setScroll(false)
        }

    }

    return (
        <Disclosure as="nav" className={`w-full fixed top-0 z-50 ${!scroll ? "bg-transparent transition duration-500" : "bg-white shadow-md transition duration-500"}`}>
            {({ open }) => (
                <>
                    <div className="py-1 mx-[3%]">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-0 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="items-center">

                                    <Link to='/'><img
                                        className="h-10 sm:h-12 w-full lg:block"
                                        src="https://i.ibb.co/jLxS0dN/logo2.png"
                                        alt="Red Onion"
                                    /></Link>
                                </div>

                            </div>
                            {
                                !user ?
                                    <div className='hidden sm:block space-x-6'>
                                        <Link className='text-lg font-semibold' to='/login'>Sign In</Link>
                                        
                                        <button className='px-5 py-3  text-lg font-semibold text-white rounded-full bg-[#f91944] active:scale-110  duration-200 transition ease-in-out'><Link to='/register'>Sign Up</Link></button>
                                    </div> :
                                    <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        <button
                                            type="button"
                                            className="hidden relative sm:block rounded-full mr-2 p-1 text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        >
                                            <ShoppingCartIcon className="h-8 w-8" />
                                            <p className='absolute text-white top-0 leading-none bg-[#f91944] py-[0.25rem] px-[0.25rem] rounded-full  right-0'>10</p>
                                        </button>

                                        {/* Profile dropdown */}
                                        <Menu as="div" className="hidden relative ml-3 sm:block">
                                            <div>
                                                <Menu.Button className="flex rounded-full bg-gray-800 text-sm border-2 border-white  ">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="h-10 w-10 rounded-full"
                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                        alt=""
                                                    />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item>

                                                        <a className='block px-4 py-2 text-sm text-gray-700'>
                                                            Your Profile
                                                        </a>

                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        <a className='block px-4 py-2 text-sm text-gray-700'>
                                                            Your Profile
                                                        </a>
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        <a className='block px-4 py-2 text-sm text-gray-700'>
                                                            Your Profile
                                                        </a>
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                            }
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden bg-white">

                        <div className="text-center flex flex-col justify-center items-center space-y-1 px-2 pt-2 pb-3">
                            {user && <Menu as="div" className="relative  ml-3">
                                <div>
                                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute text-left left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <p>Mahhaf fwwfwef</p>
                                        <Menu.Item>

                                            <a className='block px-4 py-2 text-sm text-gray-700'>
                                                Your Profile
                                            </a>

                                        </Menu.Item>
                                        <Menu.Item>
                                            <a className='block px-4 py-2 text-sm text-gray-700'>
                                                Your Profile
                                            </a>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <a className='block px-4 py-2 text-sm text-gray-700'>
                                                Your Profile
                                            </a>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>}

                            <Disclosure.Button className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3   py-2 rounded-md text-base font-medium'>
                                xvsbvsfvdfsbsfvs
                            </Disclosure.Button>
                            <Disclosure.Button className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3   py-2 rounded-md text-base font-medium'>
                                xvsbvsfvdfsbsfvs
                            </Disclosure.Button>
                            <Disclosure.Button className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3   py-2 rounded-md text-base font-medium'>
                                xvsbvsfvdfsbsfvs
                            </Disclosure.Button>
                            <Disclosure.Button className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3   py-2 rounded-md text-base font-medium'>
                                xvsbvsfvdfsbsfvs
                            </Disclosure.Button>
                            {
                                !user && <div className='space-x-6'>
                                <Link className='text-lg font-semibold' to='/login'>Sign In</Link>
                                
                                <button className='px-5 py-3  text-lg font-semibold text-white rounded-full bg-[#f91944] active:scale-110  duration-200 transition ease-in-out'><Link to='/register'>Sign Up</Link></button>
                            </div>
                            }

                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;