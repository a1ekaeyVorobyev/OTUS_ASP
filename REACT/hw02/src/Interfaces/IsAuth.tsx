import { useState } from "react";

export interface IAuth {
    login:string|null;
    email:string
    password:string;

};


let auth : IAuth|null;


const saveAuth= ()=>
{
    if (auth != null && auth.login != null )
        localStorage.setItem("todoloist", JSON.stringify(auth));
}

const loadAuth= (login:string)=>
{
    auth = JSON.parse(localStorage.getItem(login)|| "") ;
}
