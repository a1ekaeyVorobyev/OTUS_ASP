import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import React from 'react';
import { iTheme } from "../Interfaces/iTheme";




export  function withTheme(ChildComp: React.ComponentType<any | string>) {
  return class Component<T> extends React.Component<T & iTheme> {
    render() {
      const { name, ...childProps } = this.props;
      const json = JSON.stringify(this.props);
      const themeCont = name;
      const colorFont =
        themeCont == 'dark' ? "light" : "dark";

      return (
        <div className="mh-100 mh-100">
          <Card bg={themeCont} data-bs-theme={themeCont} text={colorFont}>
            <Card.Body>
              <ChildComp childProps />
            </Card.Body>
          </Card>
        </div>
      );
    }
  };
};


