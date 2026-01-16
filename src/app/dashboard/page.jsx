"use client";

import { IoMdHome, IoMdClose } from 'react-icons/io';
import { FaSignOutAlt } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

// --- Assets ---

import Swal from 'sweetalert2';
import { Outlet } from 'react-router';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const AgencyDashboardLayout = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();








    // const getNavLinkClass = ({ isActive }) =>
    //     `flex flex-row items-center gap-3 p-3 rounded-lg font-bold transition-all ${isActive ? "text-red-400 " : "text-gray-700 "
    //     }`;




    return (
        <div className="flex flex-col bg-[#9EC1D2] min-h-screen w-full font-sans">
            {/* --- TOP NAVIGATION --- */}


            <div className="flex flex-col md:flex-row flex-1 w-full overflow-hidden">
                <aside className={`
                    ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                    fixed md:relative inset-y-0 left-0 z-50
                    w-[280px] bg-[#BCC5D7BF] p-5 
                    md:m-4 md:rounded-xl shadow-lg
                    transition-transform duration-300 ease-in-out
                    overflow-y-auto shrink-0 h-full
                `}>


                    <nav className="flex flex-col text-base space-y-2">
                        {/* Common Dashboard Link */}

                        <Link
                            href="/product"
                            className={`block px-4 py-2 hover:bg-gray-100 ${pathname === "/dashboard"
                                }`}
                        >
                            <IoMdHome className="text-xl" /> All Products
                        </Link>
                        <Link
                            href="/chartlist"
                            className={`block px-4 py-2 hover:bg-gray-100 ${pathname === "/chartlist" ? activeClass : ""
                                }`}
                        >
                            My Product
                        </Link>




                        {/* --- Master Agency Section --- */}




                    </nav>
                </aside>

                {/* --- CONTENT AREA --- */}
                <main className="flex-1 overflow-auto p-4 md:p-6 w-full min-w-0">
                    <div className="w-full">
                        <Outlet />
                    </div>
                </main>
            </div>

            {/* Mobile Overlay */}
            {open && (
                <div className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={() => setOpen(false)} />
            )}
        </div>
    );
};

export default AgencyDashboardLayout;