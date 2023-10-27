import { getValue } from "@testing-library/user-event/dist/utils";
import "./OutputJSON.css";

interface Props {
  textJSON?: string;
  errorJson?: string;
}

export function OutputJSON(props: Props) {
  return (
    <div className="OutputJSON">
      <h1>{props.textJSON}</h1>
    </div>
  );
}

export function OutputErrorJSON(props: Props) {

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => 
  {
    var inputField = document.getElementById("inputField") as HTMLInputElement | null;;
    if (inputField != null) {
      alert(inputField.value); // 👉️ "Initial Value";
    }
    event.preventDefault();
  }
  return (
    <div className="OutputErrorJSON">
      <h1>{props.errorJson}</h1>
      <input type="text" id="inputField" />
      <button onClick={buttonHandler}>Get JSON</button>
    </div>
  );
}