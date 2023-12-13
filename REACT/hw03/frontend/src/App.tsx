import React, { useContext } from "react";
import "./App.css";
import { MyInput } from "./Components/MyInput";
import { ButtonGetUrl } from "./Components/ButtonGetUrl";
import { ContextType } from "./Provider/MyProvider";
import axios, { AxiosError } from "axios";
import { OutputJSON, OutputErrorJSON } from "./Components/OutputJSON";

const { useState } = React;

function App() {
  const [textJSON, setTextJSON] = useState<Array<string>>([]);
  const [errorJson, setErrorJson] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSiteName(event.target.value);
    //console.log(event.target.value);
  };
  const [checked, setChecked] = useState(true);

  function handleChangeChecked() {
    setChecked(!checked); // инвертируем стейт
  }

  const [buttonStatus, setbuttonStatus] = useState<string>("");
  const getJSON = () => {
    //"https://catfact.ninja/fact"
    //var siteName = "http://localhost:5094/WeatherForecast";
    let config = {
      headers: {
        header1: 'test',
      }
    }
    if (checked) {
      axios.interceptors.request.use(
        config => {
          config.headers['custom-header'] = `345`;
          return config;
        },
        error => {
          return Promise.reject(error);
        }
      );
    }
    else {
      axios.interceptors.request.use(
        config => {
          config.headers['custom2-header'] = `345`;
          return config;
        },
        error => {
          return Promise.reject(error);
        }
      );
    }

    axios
      .post(siteName)
      .then((res) => {
        setTimeout(() => {
          setTextJSON(res.data);
          console.log(res.data);
          setErrorJson("");
        }, 1000);
      })
      .catch((e: AxiosError) => {
        // really AxiosError?
        setTextJSON([]);
        setErrorJson(e.message);
        console.log(e);
      });
    ;

  };

  //const [siteName, setSiteName] = useState<ContextType["siteName"]>("");
  const [siteName, setSiteName] = useState<string>("http://localhost:8080/WeatherForecast");
  return (
    <div className="App">
      <MyInput onChange={handleChange} />
      <ButtonGetUrl getJSON={getJSON} />
      <OutputJSON textJSON={textJSON} />
      <OutputErrorJSON errorJson={errorJson} />
      <label>
        Использовать header. <input type="checkbox" checked={checked} onChange={handleChangeChecked} />
      </label>
    </div>
  );
}

export default App;
