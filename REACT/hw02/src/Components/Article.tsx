import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { IArticle } from "../store/type";
import { iTheme } from "../Interfaces/iTheme";
import Card from "react-bootstrap/Card";

type Props = {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
  theme: iTheme ;
};

export const Article: React.FC<Props> = ({ article, removeArticle, theme }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteArticle = React.useCallback(
    (article: IArticle) => dispatch(removeArticle(article)),
    [dispatch, removeArticle]
  );

  const themeCont = theme.name;
  const colorFont = themeCont == 'dark' ? "light" : "dark";

  return (
    <div className="mh-100 mh-100">
      <Card bg={themeCont} data-bs-theme={themeCont} text={colorFont}>
        <Card.Body>
          <div>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
