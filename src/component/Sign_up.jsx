import { Link } from "react-router-dom";
import Img2 from "../assets/image2.png";
import Img3 from "../assets/image3.png";

function Sign_up (){

    return (
        <>
            <div className="flex">
                <div className="w-1/2 flex flex-col gap-y-5 py-5 px-24 ">
                    <div className="flex flex-col gap-y-3">
                        <div className="p-4 bg-[#e0e7ff] w-14 rounded-lg text-[#4338ca] font-bold">
                            E41
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <h1 className="text-3xl font-bold">
                                Créer un compte
                            </h1>
                            <p className="text-xl ">
                                Ce n'est pas difficile, il suffit de saisir quelques données
                            </p>
                        </div>
                    </div>
            
                    <form className="flex flex-col gap-y-3">
                        <div  className="flex flex-col gap-y-2">
                            <label  className="font-bold">
                                Nom complet
                            </label>
                            <div className="flex gap-x-6">
                                <input type="text" className="bg-[#e5e7eb] h-[50px] w-[250px] rounded-lg pl-6 placeholder:text-black" placeholder="NOM"/>
                                <input type="text" className="bg-[#e5e7eb] h-[50px]  w-[250px] rounded-lg pl-6 placeholder:text-black" placeholder="PRENOM"/>
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <label className="font-bold">
                                Email
                            </label>
                            <input type="email" className="bg-[#e5e7eb] h-[50px] rounded-lg pl-6 placeholder:text-black" placeholder="aurelius@rocketmail.com"/>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <label className="font-bold">
                                Mot de passe
                            </label>
                            <input type="password" className="bg-[#e5e7eb] h-[50px] rounded-lg pl-6 placeholder:text-6xl placeholder:font-blod placeholder:text-black" placeholder=".................."/>
                        </div>

                        <p>
                            En vous Inscrivant, vous acceptez les conditions d'utilisation et la politique de confidentialité de 
                            Namanyajugabelajar.io                        
                        </p>

                        <button className="bg-[#4338ca] p-3 rounded-lg text-white font-bold drop-shadow-2xl">
                            S'incrire
                        </button>

                    </form>
                    <div className="flex gap-x-3 justify-center">
                            Vous avez déjà un compte ?
                            <Link to={'/Sign-in'} className="text-[#4338ca]">Connetez vous</Link>
                    </div>
                </div>
                <div className="bg-[#4338ca] w-1/2 flex flex-col gap-y-20">
                    <div>
                        <img src={Img2}/>
                        <img src={Img3} className="absolute top-24 right-[270px]"/>
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

export default Sign_up;