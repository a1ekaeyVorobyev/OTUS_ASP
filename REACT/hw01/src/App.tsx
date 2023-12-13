import React, { useContext } from "react";
import "./App.css";
import { MyInput } from "./Components/MyInput";
import { ButtonGetUrl } from "./Components/ButtonGetUrl";
import { ContextType } from "./Provider/MyProvider";
import axios, { AxiosError } from "axios";
import { OutputJSON, OutputErrorJSON } from "./Components/OutputJSON";

const { useState } = React;

function App() {
  const [textJSON, setTextJSON] = useState<string>("");
  const [errorJson, setErrorJson] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSiteName(event.target.value);
    //console.log(event.target.value);
  };
 

  const [buttonStatus, setbuttonStatus] = useState<string>("");
  const getJSON = () => {
    //"https://catfact.ninja/fact"
    //alert(siteName);
    //setbuttonStatus( "push");
    axios
      .get(siteName)
      .then((res) => {
        setTimeout(() => {
          setTextJSON(res.data.fact);
          setErrorJson("");
        }, 1000);
      })
      .catch((e: AxiosError) => {
        // really AxiosError?
        setTextJSON("");
        setErrorJson(e.message);
      });
  };

  //const [siteName, setSiteName] = useState<ContextType["siteName"]>("");
  const [siteName, setSiteName] = useState<string>("https://catfact.ninja/fact");
  return (
    <div className="App">
      <MyInput onChange={handleChange} />
      <ButtonGetUrl getJSON={getJSON} />
      <OutputJSON textJSON={textJSON} />
      <OutputErrorJSON errorJson={errorJson} />
    </div>
  );
}

export default App;
