import { Link } from "react-router-dom";
import Img1 from "../assets/image1.png"

function Sign_in (){

    return (
        <div className="xl:flex lg:flex h-[100vh]
                        md:flex md:justify-center">
            <div className=" xl:flex xl:flex-col lg:flex lg:flex-col lg:gap-y-10 xl:gap-y-10 lg:px-20 xl:px-28 xl:w-1/2 lg:w-1/2 xl:justify-center lg:justify-center
                            md:self-center
                            ">
                <div className="flex flex-col gap-y-6">
                    <div className="p-4 bg-[#e0e7ff] w-14 rounded-lg text-[#4338ca] font-bold">
                        E41
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <h1 className="text-3xl font-bold">
                            Connexion
                        </h1>
                        <p className="text-lg ">
                            Saisissez votre email et votre mot de passe pour avoir accès au Dashboard
                        </p>
                    </div>
                </div>
                
                <form className="flex flex-col gap-y-5
                                md:mt-5">
                    <div className="flex flex-col gap-y-2">
                        <label className="font-bold">
                            Email
                        </label>
                        <input type="email" className="bg-[#e5e7eb] h-[50px] rounded-lg pl-6"/>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label className="font-bold flex justify-between">
                            Mot de passe
                            <Link to={'/Forgot-your-password'} className="text-[#4338ca]">Mot de passe oublié</Link>
                        </label>
                        <input type="password" className="bg-[#e5e7eb] h-[50px] rounded-lg pl-6"/>
                    </div>
                    <div className="flex gap-x-8">
                        <input type="checkbox" className="w-5 bg-[#e5e7eb]"/>
                        <label className="font-bold">Se souvenir de moi</label>
                    </div>

                    <button className="bg-[#4338ca] p-4 rounded-lg text-white font-bold drop-shadow-2xl">
                        Connexion
                    </button>
                </form>

                <div className="flex gap-x-3 xl:mt-2.5 lg:mt-2.5 justify-center text-2sm
                                md:mt-14 md:flex md:gap-x-3">
                    Vous n'avez pas un compte? 
                    <Link to={'/Sign-up'} className="text-[#4338ca]">
                        Créer un compte c'est gratuit
                    </Link>
                </div>
            </div>
            <div className="bg-[#4338ca] w-1/2 flex flex-col gap-y-16 pt-24 hidden xl:block lg:block">
                <img src={Img1}/>
                <div className=" flex flex-col gap-y-4 pl-28 lg:px-14 lg:mt-16">
                    <h1 className="text-[#f1f5f9] text-xs">
                        ECOLE 241.BUSINESS
                    </h1>
                    <p className="text-2xl text-white ">
                        Etudier en ligne devient plus facile - <br/>vous pouvez toujours étudier avec Ecole <br className="hidden xl:block"/> 241 Businnes
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sign_in;