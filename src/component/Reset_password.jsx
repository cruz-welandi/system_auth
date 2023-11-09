import Img4 from '../assets/image4.png'

function Reset_password (){

    return (
        <>
            <div  className="flex h-[100vh]">
                <div  className="w-1/2 flex flex-col gap-y-10 p-[75px] justify-center">
                    <div  className="flex flex-col gap-y-5">
                        <div className="p-4 bg-[#e0e7ff] w-14 rounded-lg text-[#4338ca] font-bold">
                            E41
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <h1  className="text-3xl font-bold">
                                Réinitialisation de mot passe
                            </h1>
                            <p className="text-xl">
                                N'utilisez pas de mot de passe difficile à utiliser, ce serait un problème pour les gens.
                            </p>
                        </div>
                    </div>
                    <form className="flex flex-col gap-y-5">
                        <div  className="flex flex-col gap-y-3">
                            <label className="font-bold">
                                Nouveau mot de passe
                            </label>
                            <input  type="password" className="bg-[#e5e7eb] h-[50px] rounded-lg pl-6 placeholder:text-6xl placeholder:font-blod placeholder:text-black" placeholder=".................."/>
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <label className="font-bold">
                                Ressaissez le nouveau mot de passe
                            </label>
                            <input  type="password" className="bg-[#e5e7eb] h-[50px] rounded-lg pl-6 placeholder:text-6xl placeholder:font-blod placeholder:text-black" placeholder=".................."/>
                        </div>
                        <button className="bg-[#4338ca] p-4 rounded-lg text-white font-bold drop-shadow-2xl">
                            Confirmer la réinitialisation
                        </button>
                    </form>
                </div>

                <div className="bg-[#4338ca] w-1/2 flex flex-col gap-y-20 pt-20">
                    <img src={Img4}/>
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

export default Reset_password;