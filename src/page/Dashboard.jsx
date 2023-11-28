import React from "react";
import { CiGrid41 } from "react-icons/ci";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsBootstrap } from "react-icons/bs";
import { BsBoxArrowInRight } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

function Dashboard (){

    return (
        <div className="h-[100vh]">
            <div className="flex flex-row h-full">
                <div className="bg-black w-1/4 h-full flex flex-col justify-between py-8">
                        <div className="flex flex-col gap-y-5 justify-center items-center">
                            <Link className="flex flex-row gap-x-3 bg-[#4338ca] w-[250px] py-2 rounded">
                                <div className="border-[3px] rounded-lg "></div>
                                <CiGrid41 className="text-white text-4xl"/>
                                <h1 className="text-white self-center font-semibold text-xl">
                                    Dashboard
                                </h1>
                            </Link>

                            <Link className="flex flex-row gap-x-3 hover:bg-[#4338ca] hover:transition hover:duration-700 w-[250px] py-2 rounded">
                                <div className="border-[3px] rounded-lg border-black"></div>
                                <FaCar className="text-white text-4xl"/>
                                <h1 className="text-white self-center font-semibold text-xl">
                                    Véhicules
                                </h1>
                            </Link>

                            <Link className="flex flex-row gap-x-3 hover:bg-[#4338ca]  hover:transition hover:duration-700 w-[250px] py-2 rounded">
                                <div className="border-[3px] rounded-lg border-black"></div>
                                <BsBootstrap className="text-white text-4xl"/>
                                <h1 className="text-white self-center font-semibold text-xl">
                                    Réservations
                                </h1>
                            </Link>
                            
                        </div>
                        <div className="mx-auto">
                            <Link className="flex flex-row gap-x-10 bg-slate-600 w-[250px] p-2 rounded">
                                <BsBoxArrowInRight className="text-white text-4xl"/>
                                <h1 className="text-white self-center font-semibold text-xl">
                                    Deconnexion
                                </h1>
                            </Link>
                        </div>
                </div>
                <div className="w-3/4 h-full">
                    <div className="flex flex-row justify-between px-5">
                        <div className="pt-8">
                            <input className=" rounded-lg h-10 w-[350px] px-5 placeholder:text-xl drop-shadow-lg" type="text" placeholder="Rechercher ici"/>
                            <CiSearch  className="absolute top-[40px] right-[670px] text-2xl text-slate-500 "/>
                        </div>
                        <div className="flex flex-row gap-x-4 pt-3">
                            <div className="self-center">
                                <h1 className="text-end">
                                    Gabin Moundziegou
                                </h1>
                                <h1>
                                    gabinmoundziegou@gmail.com
                                </h1>
                            </div>
                            <VscAccount className="text-6xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;