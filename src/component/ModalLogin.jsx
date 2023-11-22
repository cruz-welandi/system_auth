import React from "react";
import ReactDom from "react-dom";

const ModalLogin = ({children, open, close}) => { 
    if(!open) return null;

    return ReactDom.createPortal(
    <div>
        <Layout/>
        <div className="absolute  top-1/2 left-1/2 z-50 p-5 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md">
            {children}
        </div>
    </div>, 
    document.getElementById("portal"))

};

const Layout = () =>  {

    return (
        <div className="absolute inset-0 bg-black opacity-50 z-50 layout"></div>
    )
};

export default ModalLogin;