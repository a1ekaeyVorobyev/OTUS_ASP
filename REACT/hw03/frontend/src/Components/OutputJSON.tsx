import { getValue } from "@testing-library/user-event/dist/utils";
import "./OutputJSON.css";
import { log } from "console";

interface Props {
  textJSON?: Array<string>;
  errorJson?: string;
}

export function OutputJSON(props: Props) {
  // console.log(props);
  return (
    <div className="OutputJSON">
      {props.textJSON?.map((item, index) => (
        <h1>
          {JSON.stringify(item)}
        </h1>))}
    </div>
  );
}

export function OutputErrorJSON(props: Props) {

  // const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => 
  // {
  //   var inputField = document.getElementById("inputField") as HTMLInputElement | null;;
  //   if (inputField != null) {
  //     alert(inputField.value); // 👉️ "Initial Value";
  //   }
  //   event.preventDefault();
  // }
  return (
    <div className="OutputErrorJSON">
      <h1>{props.errorJson}</h1>
      {/* <input type="text" id="inputField" />
      <button onClick={buttonHandler}>Get JSON</button> */}
    </div>
  );
}