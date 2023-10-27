import { Component, ReactNode, useContext  } from "react";
import './MyInput.css';
import { TextChangeRange } from "typescript";
import  { ChangeEvent } from 'react';

interface Props{
    onChange:(event: React.ChangeEvent<HTMLInputElement>)=>void
}

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //setValueURL(event.target.value);
    console.log(event.target.value);
  };

export class MyInput extends Component<Props> {
  
  

    render(): ReactNode {

        return (
            <div className="MyInput">
              <label htmlFor="myInput">Input Url: </label>
              <input name="myInput"  onChange={this.props.onChange}  width={300}/>
            </div>
          );
    }
}

