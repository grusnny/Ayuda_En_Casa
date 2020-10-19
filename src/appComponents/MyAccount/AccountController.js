import React from 'react';

function AccountController() {
var usuario=JSON.parse(localStorage.getItem("data"));
    if(usuario==null){
        window.location.href="/loginp";
    }else{
        window.location.href="/MyAccount";
    }
    return (<div>Cargando datos de usuario...</div>);

}
export default AccountController;