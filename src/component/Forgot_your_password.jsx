import Img3  from "../assets/image5.png";
import { Link } from "react-router-dom";

function Forgot_your_password (){

    return (
        <>
           <div className="flex">
                <div className="w-1/2 flex flex-col gap-y-10 p-[79px]">
                    <div  className="flex flex-col gap-y-5">
                        <div className="p-4 bg-[#e0e7ff] w-14 rounded-lg text-[#4338ca] font-bold">
                            E41
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <h1 className="text-3xl font-bold">
                                Mot de passe oublié
                            </h1>
                            <p  className="text-xl">
                                Saisissez votre email pour récupérer votre mot de passe, vous allez recevoir un email pour confirmer la demande de réinitialisation
                            </p>
                        </div>
                    </div>
                    <form className="flex flex-col gap-y-5">
                        <div className="flex flex-col gap-y-3">
                            <label className="font-bold">
                                Email
                            </label>
                            <input type="email" placeholder="saipul@gmail.com" className="bg-[#e5e7eb] h-[60px] pl-6 rounded-lg placeholder:text-black"/>
                        </div>
                        <button className="bg-[#4338ca] p-4 rounded-lg text-white font-bold drop-shadow-2xl">
                            Confirmer
                        </button>
                    </form>
                    <div className="flex justify-center gap-x-2 ">
                        Je me souviens de mon mot de passe ? 
                        <Link to={'/sign-in'} className="text-[#4338ca]">Connexion</Link>
                    </div>
                </div>
                <div className="bg-[#4338ca] w-1/2 flex flex-col gap-y-16 pt-24">
                    <div>
                        <img src={Img3}/>
                    </div>
                    <div className=" flex flex-col gap-y-4 pl-16">
                        <h1 className="text-[#f1f5f9] text-xs">
                            ECOLE 241.BUSINESS
                        </h1>
                        <p className="text-2xl text-white ">
                            Etudier en ligne devient plus facile - <br/>vous pouvez toujours étudier avec Ecole <br/> 241 Businnes
                        </p>
                    </div>
                </div>
           </div>
        </>
    )
}

export default Forgot_your_password;