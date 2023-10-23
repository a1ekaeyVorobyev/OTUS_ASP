import { createContext, useState } from "react";

const UserContext = createContext ('Unknown')


export default function User(){
    const [userName , setUserName] = useState('Aleksey');
  
    return (
      <div>
        {userName}
      </div>
    )
  }