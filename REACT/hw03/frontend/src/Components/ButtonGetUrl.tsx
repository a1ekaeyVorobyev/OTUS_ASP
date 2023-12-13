import React, { Component } from "react";
import "./ButtonGetUrl.css";

interface Props {
  getJSON?: () => void;
}

export class ButtonGetUrl extends Component<Props> {
  //constructor(props:string) {
  //    super(props);

  //    this.print = this.print.bind(this);
  //}
  //press(e){
  //    console.log(e); // РІС‹РІРѕРґРёРј РёРЅС„РѕСЂРјР°С†РёСЋ Рѕ СЃРѕР±С‹С‚РёРё
  //    console.log(`Name ${name}  Age: ${age}`);
  //    alert(`Name ${name}  Age: ${age}`)
  //}
  //print(name:string, age:number){
  //    console.log(`Name ${name}  Age: ${age}`);
  //}
  click = () => {
    if (this.props.getJSON) {
      this.props.getJSON();
    }
  };

  render() {
    return (
      <div className="ButtonGetUrl">
        <button onClick={this.click}>Get JSON</button>
      </div>
    );
  }
}
