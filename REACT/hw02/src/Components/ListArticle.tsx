import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { Article } from "./Article";
import { AddArticle } from "./AddArticle";
import { addArticle, removeArticle } from "../store/actionCreators";
import { Dispatch } from "redux";
import { ArticleState, IArticle } from "../store/type";
import { iTheme } from "../Interfaces/iTheme";

const ListArticle: React.FC<iTheme> = (theme) => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
          theme={theme}
        />
      ))}
    </main>
  );
};

export default ListArticle;
