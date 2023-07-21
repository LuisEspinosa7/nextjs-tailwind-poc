import Link from "next/link";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'


export default function AppNavbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <nav className="w-full fixed top-0 left-0 right-0 z-10 bg-white text-black shadow-md shadow-gray-800">
                <div className="flex justify-between items-center px-4 py-4 2xl:px-8">
                    <div className="flex flex-grow basis-0">
                        <Link href="#">
                            <h2 className="text-2xl font-bold text-black hover:scale-105">LOGO</h2>
                        </Link>
                    </div>
                    
                    <div className="hidden md:block">
                        <ul className="flex gap-4 [&>*>li]:transition-colors [&>*>li]:duration-400 [&>*>li]:text-current 
                            [&>*>li]:font-medium [&>*>li]:px-4 [&>*>li]:py-2 [&>*>li]:border-black">
                            <Link href="/menu1">
                                <li className="hover:border-b-2 hover:py-1 hover:scale-100">Menu 1</li>
                            </Link>
                            <Link href="/menu2">
                                <li className="hover:border-b-2 hover:py-1 hover:scale-100">Menu 2</li>
                            </Link>
                            <Link href="/menu3">
                                <li className="hover:border-b-2 hover:py-1 hover:scale-100">Menu 3</li>
                            </Link>
                        </ul>
                    </div>

                    <div className="flex flex-grow basis-0 justify-end">
                        <Button className="hidden md:block hover:scale-105 bg-black">Sign out</Button>
                        <div className="md:hidden">
                            <button className="p-1 text-black hover:scale-125 cursor-pointer"
                                onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? (<GrClose size="1.5rem"/>) 
                                : (<GiHamburgerMenu size="1.5rem" />)}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            
            <div className={menuOpen 
                ? "fixed left-0 top-0 w-full h-screen bg-black text-white px-10 py-20 ease-in duration-500" 
                : "fixed left-[-100%] top-0 w-full h-screen px-10 py-16 ease-in duration-500"}>
                <div className="flex flex-col items-center">
                    <ul className="flex flex-col gap-1 [&>*>li]:transition-colors [&>*>li]:duration-400 
                        [&>*>li]:text-current [&>*>li]:font-medium [&>*>li]:px-4 [&>*>li]:py-2
                        [&>*>li]:cursor-pointer">
                        <Link href="#">
                            <li className="border-white hover:text-white hover:scale-105 hover:border-b-2" 
                                onClick={() => setMenuOpen(!menuOpen)}>Menu 1</li>
                        </Link>
                        <Link href="#">
                            <li className="border-white hover:text-white hover:scale-105 hover:border-b-2"
                                onClick={() => setMenuOpen(!menuOpen)}>Menu 2</li>
                        </Link>
                        <Link href="#">
                            <li className="border-white hover:text-white hover:scale-105 hover:border-b-2"
                                onClick={() => setMenuOpen(!menuOpen)}>Menu 3</li>
                        </Link>
                    </ul>
                </div>
            </div>

        </header>
    );
}