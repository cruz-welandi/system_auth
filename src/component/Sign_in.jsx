import { Link } from "react-router-dom";

function Sign_in (){

    return (
        <body className="flex justify-center items-center p-7">
            <div className=" flex flex-col gap-y-10 p-5 px-10">
                <div>
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
                
                <form className="flex flex-col gap-y-5">
                    <div className="flex flex-col gap-y-2">
                        <label className="font-bold">
                            Email
                        </label>
                        <input type="email" className="bg-[#e5e7eb] h-[50px] rounded-lg"/>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label className="font-bold flex justify-between">
                            Mot de passe
                            <Link to={'./Forgot_your_password'} className="text-[#4338ca]">Mot de passe oublié</Link>
                        </label>
                        <input type="password" className="bg-[#e5e7eb] h-[50px] rounded-lg"/>
                    </div>
                    <div className="flex gap-x-10">
                        <input type="checkbox" className="default:bg-[#e5e7eb] w-5"/>
                        <label className="font-bold">Se souvenir de moi</label>
                    </div>

                    <button className="bg-[#4338ca] p-4 rounded-lg text-white font-bold">
                        Connexion
                    </button>
                </form>

                <div className="flex gap-x-3">
                    Vous n'avez pas un compte? 
                    <Link to={'./Sign_up'} className="text-[#4338ca]">
                        Créer un compte c'est gratuit
                    </Link>
                </div>
            </div>
            <div className="bg-[#4338ca]">
                
            </div>
        </body>
    )
}

export default Sign_in;