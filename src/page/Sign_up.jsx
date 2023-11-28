import { Link } from "react-router-dom";
import Img2 from "../assets/image2.png";
import Img3 from "../assets/image3.png";
import { useCallback, useEffect, useState } from "react";
import Axios from 'axios';
import ModalLogin from "../component/ModalLogin";

function Sign_up (){

    const [firstname, setFirstname]= useState("");
    const [lastname, setLastname]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const [open, setOpen] = useState(false);

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        Axios
      .post('http://localhost:1337/api/auth/local/register', {
        username: "hance_cruz",
        firstname: firstname,
        lastname : lastname,
        email: email,
        password: password,
      })
      .then(response => {
       // Handle success.
       setOpen(true);
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
      });
    };


    return (
        <>
            <div className="flex h-[100vh]">
                <div className="xl:w-1/2 lg:w-1/2  xl:flex xl:flex-col lg:flex lg:flex-col xl:gap-y-7 lg:gap-y-7 xl:px-24 lg:px-24 xl:justify-center lg:justify-center
                               flex flex-col px-10 gap-y-5 py-4">
                    <div className="flex flex-col gap-y-4">
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
            
                    <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
                        <div  className="flex flex-col gap-y-2">
                            <label  className="font-bold">
                                Nom complet
                            </label>
                            <div className="flex gap-x-6">
                                <input type="text" className="bg-[#e5e7eb] h-[50px] w-1/2 rounded-lg  pl-6 placeholder:text-black" placeholder="NOM" name="lastname" onChange={(e) => setLastname(e.target.value)} value={lastname}/>
                                <input type="text" className="bg-[#e5e7eb] h-[50px]  w-1/2 rounded-lg pl-6 placeholder:text-black" placeholder="PRENOM" name="firstname" onChange={(e) => setFirstname(e.target.value)} value={firstname}/>
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <label className="font-bold">
                                Email
                            </label>
                            <input type="email" className="bg-[#e5e7eb] h-[50px] rounded-lg pl-6 placeholder:text-black" placeholder="aurelius@rocketmail.com" name="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <label className="font-bold">
                                Mot de passe
                            </label>
                            <input type="password" className="bg-[#e5e7eb] h-[50px] rounded-lg pl-6 placeholder:text-6xl placeholder:font-blod placeholder:text-black" placeholder=".................." name="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        </div>

                        <p>
                            En vous Inscrivant, vous acceptez les conditions d'utilisation et la politique de confidentialité de 
                            Namanyajugabelajar.io                        
                        </p>

                        <button className="bg-[#4338ca] p-3 rounded-lg text-white font-bold drop-shadow-2xl" type="submit" onClick={open}>
                            S'incrire
                        </button>

                    </form>
                    <div className="flex gap-x-3 justify-center text-2sm">
                            Vous avez déjà un compte ?
                            <Link to={'/Sign-in'} className="text-[#4338ca]">Connetez vous</Link>
                    </div>
                </div>
                <div className="bg-[#4338ca] w-1/2 flex flex-col gap-y-16 pt-24 hidden xl:block lg:block">
                    <div>
                        <img src={Img2}/>
                        <img src={Img3} className="absolute top-[180px] right-[270px]"/>
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
            <ModalLogin open={open} close={()=> setOpen(false)}> 
                    <p className="text-xl mb-5">Félicitations ! Votre inscription a été un succès.</p>
                    <Link to={'/Sign-in'} className="text-[#4338ca] text-xl font-semibold" onClick={() => setOpen(false)}>Connetez vous</Link>
            </ModalLogin>
        </>
    )
}

export default Sign_up;